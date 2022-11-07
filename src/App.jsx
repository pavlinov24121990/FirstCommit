import './HardReset.css';
import './Fonts.css';
import './App.css';
import { useState } from "react"
import { MainRoute } from './Routs/MainRoute';
import { Routee } from './Routs/Routers';
import { Routes, Route, Link, redirect, BrowserRouter } from 'react-router-dom';

function App() {
  const [passwordDigest, setPasswordDigest] = useState()
  console.log(passwordDigest)
  return (
   passwordDigest ? <MainRoute setPasswordDigest = {setPasswordDigest} /> : <Routee setPasswordDigest={setPasswordDigest} />  
  );
}
export default App;
