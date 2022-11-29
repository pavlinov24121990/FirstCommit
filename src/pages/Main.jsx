import { NavBar } from '../components/NavBar'
import { HeaderMain } from '../components/HeaderMain'
import "../css/HardReset.css"
import '../css/Fonts.css'
import '../css/MainSass.scss'
import { Routes, Route, Link, BrowserRouter, Outlet } from 'react-router-dom';

const Main = ({setPasswordDigest, passwordDigest, userName, setUserName}) => {
  return (
    <div className="MainMain">
      <NavBar setPasswordDigest={setPasswordDigest} passwordDigest={passwordDigest}/>
      <div className="CenterCenterCenter">
        <HeaderMain userName={userName} setUserName={setUserName} setPasswordDigest={setPasswordDigest} passwordDigest={passwordDigest}/>
        <Outlet/>
      </div>
    </div>
  )
}

export {Main}