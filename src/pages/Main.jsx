import { Link } from 'react-router-dom';
import { NavBar } from './NavBar'
import { HeaderMain } from './HeaderMain'
import { MainCenter } from './MainCenter'
import '../css/MainSass.scss'
import { useState, useEffect } from "react";

const Main = ({setPasswordDigest, passwordDigest}) => {
  return (
      <div className="MainCenter">
        <NavBar setPasswordDigest={setPasswordDigest}/>
        <div>
          <HeaderMain setPasswordDigest={setPasswordDigest} passwordDigest={passwordDigest} />
          <MainCenter setPasswordDigest={setPasswordDigest}/>
        </div>
      </div>
      
      
    )
}

export {Main}