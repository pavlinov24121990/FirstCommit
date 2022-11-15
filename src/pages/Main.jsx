import { Link } from 'react-router-dom';
import { NavBar } from './NavBar'
import { HeaderMain } from './HeaderMain'
import { MainCenter } from './MainCenter'
import "../css/HardReset.css"
import '../css/Fonts.css'
import '../css/MainSass.scss'
import { useState, useEffect } from "react";

const Main = ({setPasswordDigest, passwordDigest}) => {
  return (
      <div className="MainMain">
        <NavBar setPasswordDigest={setPasswordDigest}/>
        <div className="CenterCenterCenter">
          <HeaderMain setPasswordDigest={setPasswordDigest} passwordDigest={passwordDigest} />
          <MainCenter setPasswordDigest={setPasswordDigest} passwordDigest={passwordDigest}/>
        </div>
      </div>
      
      
    )
}

export {Main}