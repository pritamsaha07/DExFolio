import {useState} from "react";
import Wallet from "./components/Wallet/Wallet";
import Projects from "./components/Project/Project";
import Hero from "./components/Hero/Hero";
import "./index.css";
import Skills from "./components/Skills/Skills";
import Handles from "./components/Contact/Contact";
import Contact from "./components/Resume/Resume";
import Experience from "./components/Experience/Experience";
function App() {
  const [state,setState]=useState({
    web3:null,
    contract:null
  })
  const saveState=(state)=>{
    console.log(state);
    setState(state);
  }

  return (
    <>
   
      <Wallet saveState={saveState}></Wallet>
      <Hero state={state}></Hero>
      <Skills></Skills>
      <Experience state={state}></Experience>
      <Projects state={state}></Projects>
      <Contact state={state}></Contact>
      <Handles></Handles>
    
    </>
  );
}

export default App;
