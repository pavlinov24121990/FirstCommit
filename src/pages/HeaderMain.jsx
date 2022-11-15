import { Link } from 'react-router-dom';
import '../css/HeaderSass.scss';
import { ReactComponent as NotOnlyFlower } from '../Foto/NotOnlyFlower.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import { flipOutX, flipOutY, flipInX, flipInY, rotateOut, zoomInDown } from 'react-animations';
import { flip } from 'react-animations';





//  Anime
const BounceButton = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
const NameFlipX = styled.div`animation: 7s ${keyframes`${flipOutY}`} infinite`;
const SvglFlipY = styled.div`animation: 7s ${keyframes`${rotateOut}`} infinite`;
const EmailzoomInDown = styled.div`animation: 7s ${keyframes`${zoomInDown}`} infinite`;
// Finish anime



const HeaderMain = ({ setPasswordDigest, passwordDigest }) => {
  const [userName, setUserName] = useState()
  const [email, setEmail] = useState()

  function Logout() {
    setPasswordDigest("")
  }
  
  
  const showUser = async (e) => {
    let request = await fetch('https://study-rails-blog-api.herokuapp.com/api/v1/user', {
    method: 'GET',
    headers: {
    Authorization: `Bearer ${passwordDigest}`
    }
    }) 
    let result = await request.json()
    
      setUserName(result.full_name)
      setEmail(result.email)
    
    }
  showUser()
  
  

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

     
            
            
        
            