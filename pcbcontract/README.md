# NFT
This is an example non-fungible token (NFT) smart contract.

The contract provides basic functionality to track and transfer NFTs.

The contract works using a mint method for creating new bindings of NFTs to accounts.

An NFT is identified via an u128 tokenID.
Any token owner can then `transfer` their tokens to other accounts, or `approve` other accounts
to transfer their tokens.
If Alice has been approved an NFT from Bob, then Alice can use `transfer_from` to transfer Bob's tokens.

Each token can only be approved to a single account.
Any token owner can also make another account an operator of their tokens using `set_approval_for_all`.

An operator is approved to manage all NFTs owned by the owner, this includes setting approval on each token and transfer.

The contract is inspired by the ERC721 NFT contract with extensions for Metadata and Burnable\
[https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md)

This example follows the mpc-721 standard contract interface. You can read more about this standard here:  [https://partisiablockchain.gitlab.io/documentation/smart-contracts/integration/mpc-721-nft-contract.html](https://partisiablockchain.gitlab.io/documentation/smart-contracts/integration/mpc-721-nft-contract.html)