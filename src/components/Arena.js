/*import React,{Component} from 'react';
import { ReactDOM } from 'react';
import Navbar from "./Navbar";

import './Arena1.css'
// Get payer input values
let player1;

let player2;

// Update the HTML to display the player stats


// Function to calculate the damage done by an attacker
function calculateDamage() {
    player1 = {
        name: document.getElementById("name1").value,
        health: parseInt(document.getElementById("health1").value),
        attack: parseInt(document.getElementById("attack1").value),
        defense: parseInt(document.getElementById("defense1").value)
    };
    player2={
    name: document.getElementById("name2").value,
	health: parseInt(document.getElementById("health2").value),
	attack: parseInt(document.getElementById("attack2").value),
	defense: parseInt(document.getElementById("defense2").value)
    };
    document.getElementById("name1").innerHTML = player1.name;
    document.getElementById("health1").innerHTML = player1.health;
    document.getElementById("attack1").innerHTML = player1.attack;
    document.getElementById("defense1").innerHTML = player1.defense;

    document.getElementById("name2").innerHTML = player2.name;
document.getElementById("health2").innerHTML = player2.health;
document.getElementById("attack2").innerHTML = player2.attack;
document.getElementById("defense2").innerHTML = player2.defense;
    console.log(player1,player2);
	let damage1 = player1.attack - player2.defense;
	let damage2 = player2.attack - player1.defense;
	let turns1 = Math.ceil(player2.health / damage1);
	let turns2 = Math.ceil(player1.health / damage2);

	// Determine the winner based on the number of turns
  let winner = "";
  if (turns1 >= turns2) {
    winner = player1.name;
   alert("player1's Charecter "+player1.name + " wins! Please wait for 24hrs, admin will verify your victory and will send Player2's Charecter "+player2.name+" card to your wallet");
   window.location.href="/"
  } else {
    winner = player2.name;
    alert("player2's Charecter "+player2.name + " wins! Please wait for 24hrs, admin will verify your victory and will send Player1's Charecter "+player1.name+" card to your wallet");
    window.location.href="/"
  }
  let resultContainer = document.getElementById("result");
  resultContainer.innerHTML = winner + " wins!";
  resultContainer.style.color = "white";
  resultContainer.style.backgroundColor = "#2464ec";
  resultContainer.style.padding = "10px";
  resultContainer.style.borderRadius = "5px";
}
const Arena=()=> {
  return (
    <div>
      <Navbar></Navbar>
      <div className="Arena">
      <div className="player-container">
		<div className="player" id="player1">
			<h3>Player 1</h3>
			<p>Name: <input type="text" id="name1" placeholder="Player 1"/></p>
      <p>Wallet Address: <input type="test" id="walad1" placeholder="0x..."/></p>
			<p>Health: <input type="number" id="health1" placeholder="100"/></p>
			<p>Attack: <input type="number" id="attack1" placeholder="8"/></p>
			<p>Defense: <input type="number" id="defense1" placeholder="8"/></p>
		</div>
		<div className="player" id="player2">
			<h3>Player 2</h3>
			<p>Name: <input type="text" id="name2" placeholder="Player 2"/></p>
      <p>Wallet Address: <input type="test" id="walad2" placeholder="0x..."/></p>
            <p>Health: <input type="number" id="health2" placeholder="100"/></p>
			<p>Attack: <input type="number" id="attack2" placeholder="10"/></p>
			<p>Defense: <input type="number" id="defense2" placeholder="5"/></p>
		</div>
	</div>
	<button onClick={calculateDamage}>Let's see the winner</button>
  <br></br>
  <div id="result"></div>
  


    </div>
    <footer className="bg-white dark:bg-[#0c0d26] h-screen justify-between" >
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul className="text-gray-500 dark:text-blue-400 font-medium">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">About</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Careers</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Brand Center</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Blog</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
            <ul className="text-gray-500 dark:text-blue-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Discord Server</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Twitter</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Facebook</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-500 dark:text-blue-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Licensing</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">iOS</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Android</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Windows</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">MacOS</a>
                </li>
            </ul>
        </div>
    </div>
    <div className="px-4 py-6 bg-gray-100 dark:bg-blue-800 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://google.com/">Ultron</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                <span className="sr-only">Instagram page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                <span className="sr-only">GitHub account</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" /></svg>
                <span className="sr-only">Dribbble account</span>
            </a>
        </div>
      </div>
    </div>
</footer>  
    </div>
  );
}

export default Arena;*/
import React,{Component} from 'react';
import { useEffect } from 'react';
import { ReactDOM } from 'react';
import { Web5 } from "@web5/api";
import Navbar from "./Navbar";

import './Arena1.css'
// Get payer input values
let player1;

let player2;

// Update the HTML to display the player stats


// Function to calculate the damage done by an attacker
var timeInSecs;
var ticker;
let bidStarted=false
function startTimer(secs) {
    bidStarted=true
    timeInSecs = parseInt(secs);
    ticker = setInterval(tick, 1000);
    let ww,bid
    if(parseInt(document.getElementById("health1").value)>parseInt(document.getElementById("health2").value)){
        ww=document.getElementById("name1").value
        bid=parseInt(document.getElementById("health1").value)
    }else{
        ww=document.getElementById("name2").value
        bid=parseInt(document.getElementById("health2").value)
    }
    document.getElementById("winner").innerHTML=`Highest bidder: ${ww} Bid: ${bid}`

        
}

function tick() {
    var secs = timeInSecs;
    if (secs > 0) {
        timeInSecs--;
    }
    else {
        clearInterval(ticker);
        alert(parseInt(document.getElementById("health1").value)>parseInt(document.getElementById("health2").value)?` ${document.querySelector('#name1').value} wins and can claim voucher, please wait for 24hrs, Admin will process the voucher`:`${document.querySelector('#name2').value} wins and can claim voucher, please wait for 24hrs, Admin will process the voucher`)
        bidStarted=false
    }
    
    var mins = Math.floor(secs / 60);
    secs %= 60;
    var pretty = ((mins < 10) ? "0" : "") + mins + ":" + ((secs < 10) ? "0" : "") + secs;
    
    document.getElementById("countdown").innerHTML = pretty;
}

  
function sayHi(){
    let cp = document.querySelector('#coup')
    console.log(cp)
}
function startAuction() {
    document.querySelector('#health1').addEventListener('change',()=>{
        if(bidStarted==true){
            clearInterval(ticker)
            startAuction(10)
        }
    })
    document.querySelector('#health2').addEventListener('change',()=>{
        if(bidStarted==true){
            clearInterval(ticker)
            startAuction(10)
        }
    })
    document.querySelector('.card').style.display='flex';
    player1 = {
        name: document.getElementById("name1").value,
        bidamt: parseInt(document.getElementById("health1").value),
    };
    player2={
        name: document.getElementById("name2").value,
	    bidamt: parseInt(document.getElementById("health2").value),
    };
    document.getElementById("name1").innerHTML = player1.name;
    document.getElementById("health1").innerHTML = player1.health;

    document.getElementById("name2").innerHTML = player2.name;
    document.getElementById("health2").innerHTML = player2.health;
    console.log(player1,player2);
    startTimer(5)

//const { protocols, status } = await web5.dwn.protocols.query({
   // message: {
     // filter: {
       // protocol: 'https://music.org/protocol',
     // },
   // },
 // });

  // logs an array of protocol configurations installed on the user's DWN
  console.log(protocols);
	/*let damage1 = player1.attack - player2.defense;
	let damage2 = player2.attack - player1.defense;
	let turns1 = Math.ceil(player2.health / damage1);
	let turns2 = Math.ceil(player1.health / damage2);

	// Determine the winner based on the number of turns
  let winner = "";
  if (turns1 >= turns2) {
    winner = player1.name;
   alert("player1's Charecter "+player1.name + " wins! Please wait for 24hrs, admin will verify your victory and will send Player2's Charecter "+player2.name+" card to your wallet");
   window.location.href="/"
  } else {
    winner = player2.name;
    alert("player2's Charecter "+player2.name + " wins! Please wait for 24hrs, admin will verify your victory and will send Player1's Charecter "+player1.name+" card to your wallet");
    window.location.href="/"
  }
  let resultContainer = document.getElementById("result");
  resultContainer.innerHTML = winner + " wins!";
  resultContainer.style.color = "white";
  resultContainer.style.backgroundColor = "#2464ec";
  resultContainer.style.padding = "10px";
  resultContainer.style.borderRadius = "5px";*/
}
function handleChange(){
    let n1,w1,b1,n2,w2,b2
    n1=document.getElementById("name1")
    n2=document.getElementById("name2")
    console.log(n2+"aaaaaaaaaaaaaaaas")
    w1=document.getElementById("walad1")
    w2=document.getElementById("walad2")
    b1=document.getElementById("health1")
    b2=document.getElementById("health2")
    if(document.querySelector('#coup').value==''){
        n1.disabled=true
        n2.disabled=true
        w1.disabled=true
        w2.disabled=true
        b1.disabled=true
        b2.disabled=true
    }else {
        n1.disabled=false
        n2.disabled=false
        w1.disabled=false
        w2.disabled=false
        b1.disabled=false
        b2.disabled=false
        
    }
}
const Arena=()=> {
    useEffect(() => {
        const element = document.getElementById('coup');
        console.log(element)
        if (element) {
          element.addEventListener('change', handleChange);
        }
      }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="Arena">
        <div className='coupon-card'>
        <p align="left">Coupon Id: <input class ="bg-white hover:bg-green-50 " type="text" id="coup" onLoad={sayHi()} placeholder="Coupon ID: "/></p>

        </div>
      <div className="player-container ">
		<div className="player bg-white  shadow-md rounded-lg px-8 pt-4 pb-8 mb-4 " id="player1">
			<h3 ><b>Player 1</b></h3>
			<p align="left">Name: <input type="text" required={true} id="name1"  className="bg-white hover:bg-green-50 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Player 1" disabled={true}/></p>
      <p align="left">Wallet Address: <input type="test" id="walad1" required={true} className="bg-white hover:bg-green-50 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="0x..." disabled={true} /></p>
			<p align="left">Bid Amount: <input type="number" id="health1" required={true} className="bg-white hover:bg-green-50 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="100" disabled={true}/></p>
		</div>
		<div className="player bg-white  shadow-md rounded-lg px-8 pt-4 pb-8 mb-4   " id="player2">
        <h3    ><b>Player 2</b></h3>
			<p align="left">Name: <input type="text"  required={true} className="bg-white hover:bg-green-50 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name2" placeholder="Player 2" disabled={true}/></p>
      <p align="left">Wallet Address: <input type="test"  required={true}  className="bg-white hover:bg-green-50 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="walad2" placeholder="0x..." disabled={true}/></p>
            <p align="left">Bid Amount: <input type="number" required={true} className="bg-white hover:bg-green-50 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="health2" placeholder="100" disabled={true}/></p>
		</div>
	</div>
	<button onClick={startAuction} onLoad={sayHi()} >Start Auction</button>
  <br></br>
  <div className="card fadeInUp">
    <span id="winner"></span>
    <span id="countdown"></span>
  </div>
  <div id="result"></div>
  


    </div>
    <footer className="dark:bg-[#0c0d26] h-screen justify-between" >
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul className="text-gray-500 dark:text-blue-400 font-medium">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">About</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Careers</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Brand Center</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Blog</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
            <ul className="text-gray-500 dark:text-blue-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Discord Server</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Twitter</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Facebook</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-500 dark:text-blue-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Licensing</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
            <ul className="text-gray-500     font-mediumtext-gray-500 dark:text-blue-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">iOS</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Android</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Windows</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">MacOS</a>
                </li>
            </ul>
        </div>
    </div>
    <div className="px-4 py-6 bg-gray-100 dark:bg-[#0c0d26] md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://google.com/">Ultron</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                <span className="sr-only">Instagram page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                <span className="sr-only">GitHub account</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" /></svg>
                <span className="sr-only">Dribbble account</span>
            </a>
        </div>
      </div>
    </div>
</footer>  
    </div>
  );
}

export default Arena;
