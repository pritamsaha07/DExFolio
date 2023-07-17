import ABI from "./Portfolio.json";
import './Wallet.css';
import Web3 from "web3";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Wallet =({saveState})=>{
   const [connected,setConnected]=useState(true);
   const isAndroid=/android/i.test(navigator.userAgent);
   //await window.ethereum.request({method:'eth_requestAccounts'}) is used to pause the execution until 
   //the user grants permission to the web page to access their Ethereum accounts using the Metamask 
   //extension. It waits for the promise returned by window.ethereum.request 
   //to resolve or reject before moving to the next line of code.
    const init =async()=>{
    try{
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({method:'eth_requestAccounts'});
      const contract = new web3.eth.Contract(
          ABI,
          "0xFec151aa2351ad8eedcc51f6ff400972cA48d235"
      );
       setConnected(false);
       saveState({web3:web3,contract:contract});
    }catch(error){
      alert("Please Install Metamask");
    }
      
    }

  return (
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
        <Nav>
        <div className="header">
            {isAndroid && <button className="connectBTN">
               <a href="https://metamask.app.link/dapp/646937ee4981346776d84226--adorable-arithmetic-9c6cc3.netlify.app/"> Click for Mobile</a> 
            </button>}
        <button className="connectBTN" onClick={init} disabled={!connected}>{connected ? "Connect Metamask" : "Connected" }</button>
      </div>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
};

export default Wallet;
