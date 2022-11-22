import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUnlock } from '@fortawesome/free-solid-svg-icons'
import { FirstNameHandler, LastNameHandler, PasswordHandler, PasswordConfirmationHandler, EmailHandler } from '../Helpers/CreateNewAccountHandler'
import { CreateNewAccount } from '../Helpers/CreateNewAccountHelper'


const CreateNewAccountHtml = ({ password, setPassword, passwordError, setPasswordError, passwordConfirmation, setpasswordConfirmation, passwordConfirmationError, setPasswordConfirmationError, firstТame, setFirstТame, firstТameError, setFirstТameError, lastName, setLastName, lastNameError, email, setEmail, emailError, setEmailError, PassSee, navig, setLastNameError, setPasswordDigest}) => {
  return (
    <div className="CreateAccountMain">
		<div>
			<h2>NoT Only Flowers</h2>
			<h2>Create an account</h2>
			<p>Quick and easy.</p>
			<span></span>
				<form onSubmit={e => { CreateNewAccount(e, setPasswordDigest, navig, setPassword, setpasswordConfirmation, setFirstТame, setLastName, setEmail, setPasswordError, setPasswordConfirmationError, setEmailError, setFirstТameError, setLastNameError) }} id="CreateAccountMainContentForm">
					<div className="DivInput">
						{(firstТameError) && <div className="InputError">{firstТameError}</div>}
						{(lastNameError) && <div className="InputError right">{lastNameError}</div>}	
						<input onChange={ e => FirstNameHandler(e, setFirstТame, setFirstТameError)} defaultValue={firstТame} name="user[first_name]" placeholder="Write first name" type="text" />
						<input onChange={e => LastNameHandler(e, setLastName, setLastNameError)} defaultValue={lastName} name="user[last_name]" placeholder="Write last name" type="text" />
					</div>
					<div className="DivInput">
						{(passwordError) && <div  className="InputError">{passwordError}</div>}
						{(passwordConfirmationError) && <div className="InputError right" >{passwordConfirmationError}</div>}
						<input defaultValue={password} onChange={ e => PasswordHandler(e, setPassword, setPasswordError)} id="passInput" name="user[password]" placeholder="Write password" type="password" />
						<FontAwesomeIcon icon={faUnlock} onMouseDown={() => { PassSee("passInput") }} onMouseUp={() => { PassSee("passInput") }} />
						<input onChange={e => PasswordConfirmationHandler(e, setpasswordConfirmation, setPasswordConfirmationError)} defaultValue={passwordConfirmation} id="passInputLast" name="user[password_confirmation]" placeholder="Write password confirmation" type="password" />
						<FontAwesomeIcon icon={faUnlock} onMouseDown={ () => { PassSee("passInputLast") }} onMouseUp={ () => { PassSee("passInputLast") }}/>
					</div>
					<div>
						{(emailError) && <div className="InputError email" >{emailError}</div>}
						<input defaultValue={email} onChange={ e => EmailHandler(e, setEmail, setEmailError)} name="user[email]" placeholder="Write email" type="email" />
						<input value="asd" name="user[image_link]" type="hidden" />
				</div>
				<p>In Love</p>
				<button id="clearButton" type="submit">Registration</button>
			</form>
		</div>
		</div>
  )
}


export {CreateNewAccountHtml}