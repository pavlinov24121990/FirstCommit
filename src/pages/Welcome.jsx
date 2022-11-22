import { Link } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from "react";
import { authenticateUser } from '../Helpers/authenticateUserHelper';
import '../css/WelcomeSass.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUnlock } from '@fortawesome/free-solid-svg-icons'
import { PassSee } from "../Helpers/PassSeeHelper";
import { EmailHandler, PasswordHandler } from "../Helpers/authenticateUserHandler";

const Welcome = ({ setPasswordDigest }) => {

  const [passwords, setPasswords] = useState("")
  const [passwordsErrors, setPasswordsErrors] = useState("")
  const [email, setEmail] = useState("")
  const [emailErrors, setEmailErrors] = useState("")
  
  
  return (
    <div className="Main">
      <div>
        <h1>NoT Only Flowers</h1>
        <h2>In Love</h2>
        <form id="MainContentForm" onSubmit={e => { authenticateUser(e, setPasswordDigest, setPasswordsErrors, setEmailErrors) }}>
          {emailErrors && <div className="DivErrors">{emailErrors}</div>}
          <input defaultValue={email} onChange={ e => EmailHandler(e, setEmail, setEmailErrors)} name="[email]" placeholder="Write email" type="email" />
          <div className="MainContentFormWelcomeDiv">
            {passwordsErrors && <div className="DivErrorsPass">{passwordsErrors}</div>}
            <input onChange={ e => PasswordHandler(e, setPasswords, setPasswordsErrors)} defaultValue={passwords} className="MainContentInput" id="passInput" name="[password]" placeholder="Write password" type="password" />
            <FontAwesomeIcon icon={faUnlock} onMouseDown={ () => { PassSee("passInput") }} onMouseUp={ () => { PassSee("passInput") }}/>
          </div>
          <button type="submit">Log in</button>
        </form>
        <Link className="ForgotAccount" to="ForgotAccount">Forgot account ?</Link>
        <span>
          or
        </span>
        <Link to="CreateANewAccount" className="CreateANewAccount">Create a new account</Link>
      </div>
    </div>
  )
}

export { Welcome }

