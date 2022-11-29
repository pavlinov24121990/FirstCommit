import '../css/HeaderSass.scss';
import { ReactComponent as NotOnlyFlower } from '../Foto/NotOnlyFlower.svg'
import { useState, useEffect } from "react";
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import { flipOutY, rotateOut, zoomInDown } from 'react-animations';
import { showUser } from '../Helpers/ShowUserHelper'
import { useNavigate } from 'react-router-dom';



//  Anime
const BounceButton = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
const NameFlipX = styled.div`animation: 7s ${keyframes`${flipOutY}`} infinite`;
const SvglFlipY = styled.div`animation: 7s ${keyframes`${rotateOut}`} infinite`;
const EmailzoomInDown = styled.div`animation: 7s ${keyframes`${zoomInDown}`} infinite`;
// Finish anime

const HeaderMain = ({ setPasswordDigest, passwordDigest, userName, setUserName }) => {
  
  const [email, setEmail] = useState()
  const navig = useNavigate();

  function Logout() {
    setPasswordDigest(false)
    navig("/")
  }
  
  useEffect(() => {
    showUser( setEmail, setUserName, passwordDigest)
    }, [userName, email])

  return (
    <section className='HeaderrMain'>
      <ul>
        <li><NameFlipX><p>{ userName }</p></NameFlipX></li>
        <li><EmailzoomInDown><p>{email}</p></EmailzoomInDown></li>
        <li><SvglFlipY><i><NotOnlyFlower/></i></SvglFlipY></li>
        <li><button onClick={Logout}><BounceButton>Logout</BounceButton></button></li>
      </ul>
    </section>
  )
}

export { HeaderMain }

     
            
            
        
            