import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from "react";
import { MainRoute } from "../Routs/MainRoute";


const Welcome = ({setPasswordDigest}) => {

const [passwords, setPassword] = useState("Write password")
const [email, setEmail] = useState("Write email")
const [fullName, setFullName] = useState()
  
  function PassSee(id) {
      const PassSee = document.getElementById(id)
        if (PassSee.type === "password") {
            PassSee.type = "text"
        } else {
            PassSee.type = "password"
        }
    }

  let authenticateUser = async (e) => {
    e.preventDefault()
    const forma = document.getElementById('MainContentForm')
    const formDataa = new FormData(forma)
    let request = await fetch('https://study-rails-blog-api.herokuapp.com/api/v1/auth', {
      method: 'POST',
      body: formDataa
    })
    let result = await request.json()
    
    forma.reset()
    if (request.ok) {
      setPasswordDigest(result.password_digest)
      setFullName(result.full_name)
      setEmail(result.email)
      console.log(result)
    } else {
      setPassword("Invalid password")
      setEmail("Invalid email")
    }
  }

  return (
    <div className="Main">
      <div className="MainContent">
        <h1 className="MainContentH1">NoT Only Flowers</h1>
        <h2 className="MainContentH2">In Love</h2>
        <form className="MainContentForm" id="MainContentForm" onSubmit={ e => { authenticateUser (e) }}>
          <input className="MainContentInput" name="[email]" placeholder={email} type="email" />
          <div className="MainContentFormWelcomeDiv">
            <input className="MainContentInput" id="passInput" name="[password]" placeholder={passwords} type="password" />
            <i className="MainContentFormI"  onMouseDown={() => { PassSee("passInput") }} onMouseUp={() => { PassSee("passInput") }}></i>
          </div>
          <button type="submit" className="MainContentButton">Log in</button>
        </form>
        <Link className="ForgotAccount" to="ForgotAccount">Forgot account ?</Link>
        <span className="MainSpan">
          or
        </span>
        <Link to="CreateANewAccount" className="CreateANewAccount">Create a new account</Link>
      </div>
    </div>
  )
}

export {Welcome}