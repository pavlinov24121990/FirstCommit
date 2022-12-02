import "../css/ServiseSass.scss"
import { useState, useEffect } from "react";
import { showUser } from '../Helpers/ShowUserHelper'
import { useNavigate } from 'react-router-dom';
import { DeleteUser } from "../Helpers/DeleteUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlock } from '@fortawesome/free-solid-svg-icons';
import { PassSee } from "../Helpers/PassSeeHelper";
import { UpdateUserName } from "../Helpers/UpdateUserName";
import { FirstNameHandler, LastNameHandler, PasswordHandler, PasswordConfirmationHandler } from '../Helpers/CreateNewAccountHandler';
import { UpdateUserPassword } from "../Helpers/UpdateUserPassword";

function Servise({passwordDigest, setPasswordDigest, userName, setUserName, setUserNameId}) {
  const [email, setEmail] = useState()
  const navig = useNavigate();

  const [firstТame, setFirstТame] = useState("")
  const [firstТameError, setFirstТameError] = useState("")
  
  const [lastName, setLastName] = useState("")
  const [lastNameError, setLastNameError] = useState("")
  
  const [password, setPassword] = useState("")
	const [passwordError, setPasswordError] = useState("")

	const [passwordConfirmation, setpasswordConfirmation] = useState("")
	const [passwordConfirmationError, setPasswordConfirmationError] = useState("")

  useEffect(() => {
    showUser(setEmail, setUserName, passwordDigest, setUserNameId)
    }, [email, userName])
    

  return (
    <div className="Servise">
      <h2>Update \ Delete User</h2>
      <form id="updateUserName" onSubmit={e => UpdateUserName(e, passwordDigest, navig, setUserName, setFirstТameError, setLastNameError)}>
        <div>
          <p>First name</p>
          <p>Last Name</p>
        </div>
        <div className="inputName">
          {(firstТameError) && <div className="InputError">{firstТameError}</div>}
					{(lastNameError) && <div className="InputError right">{lastNameError}</div>}	
          <input onChange={ e => FirstNameHandler(e, setFirstТame, setFirstТameError)} defaultValue={firstТame} name="user[first_name]" placeholder="Write first name" type="text" />
          <input onChange={e => LastNameHandler(e, setLastName, setLastNameError)} defaultValue={lastName} name="user[last_name]" placeholder="Write last name" type="text" />
        </div>
        <div>
          <button className="buttonName" type="submit" >Update name for {userName}</button>
        </div>
      </form>
      <form id="updateUserPassword" onSubmit={e => UpdateUserPassword(e, passwordDigest, navig, setPasswordDigest, setPasswordError, setPasswordConfirmationError)}>
        <div>
          <p>Password</p>
          <p>Password Confirmation</p>
        </div>
        <div className="inputPassword">
          {(passwordError) && <div  className="InputError">{passwordError}</div>}
					{(passwordConfirmationError) && <div className="InputError right" >{passwordConfirmationError}</div>}
          <input defaultValue={password} onChange={ e => PasswordHandler(e, setPassword, setPasswordError)} id="passInput" name="user[password]" placeholder="Write password" type="password" />
          <FontAwesomeIcon icon={faUnlock} onMouseDown={() => { PassSee("passInput") }} onMouseUp={() => { PassSee("passInput") }} />
          <input onChange={e => PasswordConfirmationHandler(e, setpasswordConfirmation, setPasswordConfirmationError)} defaultValue={passwordConfirmation} id="passInputLast" name="user[password_confirmation]" placeholder="Password Confirmation" type="password" />
          <FontAwesomeIcon icon={faUnlock} onMouseDown={() => { PassSee("passInputLast") }} onMouseUp={() => { PassSee("passInputLast") }} />
        </div>
        <div>
          <button type="submit" >Update password for {userName}</button>
          <button onClick={e => DeleteUser(e, navig, passwordDigest, setPasswordDigest)} >Delete {userName} </button>
        </div>
      </form>
    </div>
  )
}

export {Servise}