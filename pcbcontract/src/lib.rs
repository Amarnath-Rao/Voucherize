#![doc = include_str!("../README.md")]
#![allow(unused_variables)]

#[macro_use]
extern crate pbc_contract_codegen;

use create_type_spec_derive::CreateTypeSpec;
use pbc_contract_common::address::Address;
use pbc_contract_common::context::ContractContext;
use pbc_contract_common::sorted_vec_map::{SortedVec, SortedVecMap};
use read_write_state_derive::ReadWriteState;

/// A permission to transfer and approve NFTs given from an NFT owner to a separate address, called an operator.
#[derive(ReadWriteState, CreateTypeSpec, PartialEq, Copy, Clone, Ord, PartialOrd, Eq)]
struct OperatorApproval {
    /// NFT owner.
    owner: Address,
    /// Operator of the owner's tokens.
    operator: Address,
}

/// State of the contract.
#[state]
pub struct NFTContractState {
    /// Descriptive name for the collection of NFTs in this contract.
    name: String,
    /// Abbreviated name for NFTs in this contract.
    symbol: String,
    /// Mapping from token_id to the owner of the token.
    owners: SortedVecMap<u128, Address>,
    /// Mapping from token_id to the approved address who can transfer the token.
    token_approvals: SortedVecMap<u128, Address>,
    /// Containing approved operators of owners. Operators can transfer and change approvals on all tokens owned by owner.
    operator_approvals: SortedVec<OperatorApproval>,
    /// Template which the uri's of the NFTs fit into.
    uri_template: String,
    /// Mapping from token_id to the URI of the token.
    token_uri_details: SortedVecMap<u128, [u8; 16]>,
    /// Owner of the contract. Is allowed to mint new NFTs.
    contract_owner: Address,
}

impl NFTContractState {
    /// Find the owner of an NFT.
    /// Throws if no such token exists.
    ///
    /// ### Parameters:
    ///
    /// * `token_id`: [`u128`] The identifier for an NFT.
    ///
    /// ### Returns:
    ///
    /// An [`Address`] for the owner of the NFT.
    pub fn owner_of(&self, token_id: u128) -> Address {
        let owner_opt = self.owners.get(&token_id);
        match owner_opt {
            None => panic!("MPC-721: owner query for nonexistent token"),
            Some(owner) => *owner,
        }
    }

    /// Get the approved address for a single NFT.
    ///
    /// ### Parameters:
    ///
    /// * `token_id`: [`u128`] The NFT to find the approved address for.
    ///
    /// ### Returns:
    ///
    /// An [`Option<Address>`] The approved address for this NFT, or none if there is none.
    pub fn get_approved(&self, token_id: u128) -> Option<Address> {
        self.token_approvals.get(&token_id).copied()
    }

    /// Query if an address is an authorized operator for another address.
    ///
    /// ### Parameters:
    ///
    /// * `owner`: [`Address`] The address that owns the NFTs.
    ///
    /// * `operator`: [`Address`] The address that acts on behalf of the owner.
    ///
    /// ### Returns:
    ///
    /// A [`bool`] true if `operator` is an approved operator for `owner`, false otherwise.
    pub fn is_approved_for_all(&self, owner: Address, operator: Address) -> bool {
        let as_operator_approval: OperatorApproval = OperatorApproval { owner, operator };
        self.operator_approvals.contains(&as_operator_approval)
    }

    /// Helper function to check whether a tokenId exists.
    ///
    /// Tokens start existing when they are minted (`mint`),
    /// and stop existing when they are burned (`burn`).
    ///
    /// ### Parameters:
    ///
    /// * `token_id`: [`u128`] The tokenId that is checked.
    ///
    /// ### Returns:
    ///
    /// A [`bool`] True if `token_id` is in use, false otherwise.
    pub fn exists(&self, token_id: u128) -> bool {
        let owner = self.owners.get(&token_id);
        owner.is_some()
    }

    /// Helper function to check whether a spender is owner or approved for a given token.
    /// Throws if token_id does not exist.
    ///
    /// ### Parameters:
    ///
    /// * `spender`: [`Address`] The address to check ownership for.
    ///
    /// * `token_id`: [`u128`] The tokenId which is checked.
    ///
    /// ### Returns:
    ///
    /// A [`bool`] True if `token_id` is owned or approved for `spender`, false otherwise.
    pub fn is_approved_or_owner(&self, spender: Address, token_id: u128) -> bool {
        let owner = self.owner_of(token_id);
        spender == owner
            || self.get_approved(token_id) == Some(spender)
            || self.is_approved_for_all(owner, spender)
    }

    /// Mutates the state by approving `to` to operate on `token_id`.
    /// None indicates there is no approved address.
    ///
    /// ### Parameters:
    ///
    /// * `approved`: [`Option<Address>`], The new approved NFT controller.
    ///
    /// * `token_id`: [`u128`], The NFT to approve.
    pub fn _approve(&mut self, approved: Option<Address>, token_id: u128) {
        if let Some(appr) = approved {
            self.token_approvals.insert(token_id, appr);
        } else {
            self.token_approvals.remove(&token_id);
        }
    }

    /// Mutates the state by transferring `token_id` from `from` to `to`.
    /// As opposed to {transfer_from}, this imposes no restrictions on `ctx.sender`.
    ///
    /// Throws if `from` is not the owner of `token_id`.
    ///
    /// ### Parameters:
    ///
    /// * `from`: [`Address`], The current owner of the NFT
    ///
    /// * `to`: [`Address`], The new owner
    ///
    /// * `token_id`: [`u128`], The NFT to transfer
    pub fn _transfer(&mut self, from: Address, to: Address, token_id: u128) {
        if self.owner_of(token_id) != from {
            panic!("MPC-721: transfer from incorrect owner")
        } else {
            // clear approvals from the previous owner
            self._approve(None, token_id);
            self.owners.insert(token_id, to);
        }
    }
}

/// Initial function to bootstrap the contracts state.
///
/// ### Parameters:
///
/// * `ctx`: [`ContractContext`], initial context.
///
/// * `name`: [`String`], A descriptive name for a collection of NFTs in this contract.
///
/// * `symbol`: [`String`], An abbreviated name for NFTs in this contract.
///
/// * `uri_template`: [`String`], Template for uri´s associated with NFTs in this contract.
///
/// ### Returns:
///
/// The new state object of type [`NFTContractState`].
#[init]
pub fn initialize(
    ctx: ContractContext,
    name: String,
    symbol: String,
    uri_template: String,
) -> NFTContractState {
    NFTContractState {
        name,
        symbol,
        owners: SortedVecMap::new(),
        token_approvals: SortedVecMap::new(),
        operator_approvals: SortedVec::new(),
        uri_template,
        token_uri_details: SortedVecMap::new(),
        contract_owner: ctx.sender,
    }
}

/// Change or reaffirm the approved address for an NFT.
/// None indicates there is no approved address.
/// Throws unless `ctx.sender` is the current NFT owner, or an authorized
/// operator of the current owner.
///
/// ### Parameters:
///
/// * `ctx`: [`ContractContext`], the context for the action call.
///
/// * `state`: [`NFTContractState`], the current state of the contract.
///
/// * `approved`: [`Option<Address>`], The new approved NFT controller.
///
/// * `token_id`: [`u128`], The NFT to approve.
///
/// ### Returns
///
/// The new state object of type [`NFTContractState`] with an updated ledger.
#[action(shortname = 0x05)]
pub fn approve(
    ctx: ContractContext,
    mut state: NFTContractState,
    approved: Option<Address>,
    token_id: u128,
) -> NFTContractState {
    let owner = state.owner_of(token_id);
    if ctx.sender != owner && !state.is_approved_for_all(owner, ctx.sender) {
        panic!("MPC-721: approve caller is not owner nor authorized operator")
    }
    state._approve(approved, token_id);
    state
}

/// Enable or disable approval for a third party (operator) to manage all of
/// `ctx.sender`'s assets. Throws if `operator` == `ctx.sender`.
///
/// ### Parameters:
///
/// * `context`: [`ContractContext`], the context for the action call.
///
/// * `state`: [`NFTContractState`], the current state of the contract.
///
/// * `operator`: [`Address`], Address to add to the set of authorized operators.
///
/// * `approved`: [`bool`], True if the operator is approved, false to revoke approval.
///
/// ### Returns
///
/// The new state object of type [`NFTContractState`] with an updated ledger.
#[action(shortname = 0x07)]
pub fn set_approval_for_all(
    ctx: ContractContext,
    mut state: NFTContractState,
    operator: Address,
    approved: bool,
) -> NFTContractState {
    if operator == ctx.sender {
        panic!("MPC-721: approve to caller")
    }
    let operator_approval = OperatorApproval {
        owner: ctx.sender,
        operator,
    };
    if approved {
        state.operator_approvals.insert(operator_approval);
    } else {
        state.operator_approvals.remove(&operator_approval);
    }
    state
}

/// Transfer ownership of an NFT.
///
/// Throws unless `ctx.sender` is the current owner, an authorized
/// operator, or the approved address for this NFT. Throws if `from` is
/// not the current owner. Throws if `token_id` is not a valid NFT.
///
/// ### Parameters:
///
/// * `ctx`: [`ContractContext`], the context for the action call.
///
/// * `state`: [`NFTContractState`], the current state of the contract.
///
/// * `from`: [`Address`], The current owner of the NFT
///
/// * `to`: [`Address`], The new owner
///
/// * `token_id`: [`u128`], The NFT to transfer
///
/// ### Returns
///
/// The new state object of type [`NFTContractState`] with an updated ledger.
#[action(shortname = 0x03)]
pub fn transfer_from(
    ctx: ContractContext,
    mut state: NFTContractState,
    from: Address,
    to: Address,
    token_id: u128,
) -> NFTContractState {
    if !state.is_approved_or_owner(ctx.sender, token_id) {
        panic!("MPC-721: transfer caller is not owner nor approved")
    } else {
        state._transfer(from, to, token_id);
        state
    }
}

/// Mints `token_id` and transfers it to an owner.
///
/// Requirements:
///
/// - `token_id` must not exist
/// - `ctx.sender` owns the contract
///
/// ### Parameters:
///
/// * `ctx`: [`ContractContext`], the context for the action call.
///
/// * `state`: [`NFTContractState`], the current state of the contract.
///
/// * `to`: [`Address`], the owner of the minted token.
///
/// * `token_id`: [`u128`], The new id for the minted token.
///
/// ### Returns
///
/// The new state object of type [`NFTContractState`] with an updated ledger.
#[action(shortname = 0x01)]
pub fn mint(
    ctx: ContractContext,
    mut state: NFTContractState,
    to: Address,
    token_id: u128,
    token_uri: [u8; 16],
) -> NFTContractState {
    if ctx.sender != state.contract_owner {
        panic!("MPC-721: mint only callable by the contract owner")
    } else if state.exists(token_id) {
        panic!("MPC-721: token already minted")
    } else {
        state.owners.insert(token_id, to);
        state.token_uri_details.insert(token_id, token_uri);
        state
    }
}

/// Destroys `token_id`.
/// The approval is cleared when the token is burned.
/// Requires that the `token_id` exists and `ctx.sender` is approved or owner of the token.
///
/// ### Parameters:
///
/// * `ctx`: [`ContractContext`], the context for the action call.
///
/// * `state`: [`NFTContractState`], the current state of the contract.
///
/// * `token_id`: [`u128`], The id of the NFT to be burned.
///
/// ### Returns
///
/// The new state object of type [`NFTContractState`] with an updated ledger.
#[action(shortname = 0x08)]
pub fn burn(ctx: ContractContext, mut state: NFTContractState, token_id: u128) -> NFTContractState {
    if !state.is_approved_or_owner(ctx.sender, token_id) {
        panic!("MPC-721: burn caller is not owner nor approved")
    } else {
        let owner = state.owner_of(token_id);
        // Clear approvals
        state._approve(None, token_id);

        state.owners.remove(&token_id);
        state.token_uri_details.remove(&token_id);
        state
    }
}
