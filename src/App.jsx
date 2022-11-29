
import "./css/HardReset.css"
import './css/Fonts.css';
import './App.css';
import { useState, useEffect } from "react";
import { MainRoute } from './Routs/MainRoute';
import { Routee } from './Routs/Routers';

function App() {
  const [passwordDigest, setPasswordDigest] = useState("")
  const [userName, setUserName] = useState()

  useEffect(() => {
    let tokeen = localStorage.getItem("passwordDigest")
    if (tokeen){
      setPasswordDigest(tokeen)
      }
  }, [])
  

  console.log(passwordDigest)
  useEffect(() => {
    localStorage.setItem("passwordDigest",  passwordDigest);
    

  }, [passwordDigest]);
  return (
   
  
    passwordDigest ? <MainRoute userName={userName} setUserName={setUserName} setPasswordDigest={setPasswordDigest}  passwordDigest={passwordDigest} /> : <Routee setPasswordDigest={setPasswordDigest} passwordDigest={passwordDigest}/>
  );
}
export default App;
