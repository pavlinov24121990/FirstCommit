
import "./css/HardReset.css"
import './css/Fonts.css';
import './App.css';
import { useState, useEffect } from "react";
import { MainRoute } from './Routs/MainRoute';
import { Routee } from './Routs/Routers';

function App() {
  const [passwordDigest, setPasswordDigest] = useState()

  useEffect(() => {
    let tokeen = localStorage.getItem("passwordDigest")
    setPasswordDigest(tokeen)
  }, [])
  


  useEffect(() => {
    localStorage.setItem("passwordDigest",  passwordDigest);
    

  }, [passwordDigest]);
  return (
   
  
    passwordDigest ? <MainRoute setPasswordDigest={setPasswordDigest}  passwordDigest={passwordDigest} /> : <Routee setPasswordDigest={setPasswordDigest} passwordDigest={passwordDigest}/>
  );
}
export default App;
