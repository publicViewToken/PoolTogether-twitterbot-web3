
console.log('the bot is starting');

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);
var  PORT = process.env.PORT || 5000




var web3 = require('web3');
var abiDecoder = require('abi-decoder');
var DAIaddress = ("0xEBfb47A7ad0FD6e57323C8A42B2E5A6a4F68fc1a");
var UNIaddress = ("0x0650d780292142835F6ac58dd8E2a336e87b4393");
var USDCaddress = ("0xde9ec95d7708b8319ccca4b8bc92c0a3b70bf416");
var COMPaddress = ("0xBC82221e131c082336cf698F0cA3EBd18aFd4ce7");
var LOOTboxaddress =("0x4d695c615a7AACf2d7b9C481B66045BB2457Dfde");






//contract abi
var abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"baseURI","type":"string"}],"name":"ERC721ControlledBaseURISet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"symbol","type":"string"}],"name":"ERC721ControlledInitialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"baseURI","type":"string"},{"internalType":"address","name":"admin","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]

         //pool contract that trasfers the winners            0x4d695c615a7AACf2d7b9C481B66045BB2457Dfde
        address = ("0x4d695c615a7AACf2d7b9C481B66045BB2457Dfde");
        this.address = address.toLowerCase();
        this.web3 = new web3("https://mainnet.infura.io/v3/887faf9da02f4eed8598322432101e19");

var AllEvents = require('web3');

var contract = new this.web3.eth.Contract(abi,address);

//let ss = contract.methods;
//console.log(ss);

let numberr = 14;
numberr ++;
setInterval(tweetIt, 300000)//7 minutes //hour // 60minute  3600000


////tweetIt();


function tweetIt() 
{

// call boty function

//dailyPost();//calling function
boty();

function boty () 
{

contract.getPastEvents(
'Transfer', 
{
 //fromBlock:11794330
//,
 toBlock:"latest"
},
//(err, events) => {console.log(events)}
//returns the first data from returnValues
 //(err, events) => {console.log(events[0].returnValues[1])}
//returns using the from and to
(err, events) => {



if (DAIaddress == events[0].returnValues.from)
{



T.post('statuses/update', { status: 'Todays DAI Pool Winner is ' 
+ events[0].returnValues.to + ' Congrats!!>> Stake and earn only on https://pooltogether.com #defi #crypto #earn #eth #btc'  }, function(err, data, response) 


{
  console.log(data)
});





}
if (UNIaddress == events[0].returnValues.from)
{


T.post('statuses/update', { status: 'Todays UNIswap Pool Winner is ' 
+ events[0].returnValues.to + ' Congrats!!>> Stake and earn only on https://pooltogether.com' }, function(err, data, response) 



{
  console.log(data)
});


}

if (USDCaddress == events[0].returnValues.from)
{


T.post('statuses/update', { status: 'Todays USDC Pool Winner is ' 
+ events[0].returnValues.to + ' Congrats!!>> Stake and earn only on https://pooltogether.com' }, function(err, data, response) 



{
  console.log(data)
});

}
if (COMPaddress == events[0].returnValues.from)
{


T.post('statuses/update', { status: 'Todays Compound Pool Winner is ' 
+ events[0].returnValues.to + ' Congrats!!>> Stake and earn only on https://pooltogether.com' }, function(err, data, response) 



{
  console.log(data)
});

}
if (LOOTboxaddress == events[0].returnValues.from)
{



T.post('statuses/update', { status: 'Todays LOOTBOX Pool Winner is ' 
+ events[0].returnValues.to + ' Congrats!!>> Stake and earn only on https://pooltogether.com' }, function(err, data, response) 



{
  console.log(data)
});


}


}
)

//28,800,000= 3 times a day// 3,600,000 = 1 hour
//day 64,400,000 milliseconds we want it to post 3 times a day // milliseconds %3
//setTimeout( tweetIt, 28800000 );//28,800,000 3 times daily 



}



}













//}















function  dailyPost(){
//setTimeout(dailyPost, 64400000); //24hours in millis
//then post this

//console.log(" "+ numberr);
T.post('statuses/update', { status: 'Want to stake and earn crypto while getting a chance to win the weekly jackpot??? only on  #defi #crypto #earn #eth #btc  pooltogether.com '+numberr }, function(err, data, response) 



{
  console.log(data)
});


numberr++;

}









