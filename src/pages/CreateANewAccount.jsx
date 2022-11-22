import { useState } from "react"
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/CreateANewAccountSass.scss'
import { CreateNewAccountHtml } from '../components/CreateNewAccountHtml'
import { PassSee } from "../Helpers/PassSeeHelper";

const CreateANewAccount = ({ setPasswordDigest, passwordDigest }) => {
	
	const [password, setPassword] = useState("")
	const [passwordError, setPasswordError] = useState("")

	const [passwordConfirmation, setpasswordConfirmation] = useState("")
	const [passwordConfirmationError, setPasswordConfirmationError] = useState("")

	const [firstТame, setFirstТame] = useState("")
	const [firstТameError, setFirstТameError] = useState("")


	const [lastName, setLastName] = useState("")
	const [lastNameError, setLastNameError] = useState("")

	const [email, setEmail] = useState("")
	const [emailError, setEmailError] = useState("")

	const navig = useNavigate();

	return (
		<CreateNewAccountHtml password={password} setPassword={setPassword} passwordError={passwordError} setPasswordError={setPasswordError} passwordConfirmation={passwordConfirmation} setpasswordConfirmation={setpasswordConfirmation} passwordConfirmationError={passwordConfirmationError} setPasswordConfirmationError={setPasswordConfirmationError} firstТame={firstТame} setFirstТame={setFirstТame} firstТameError={firstТameError} setFirstТameError={setFirstТameError} lastName={lastName} setLastName={setLastName} lastNameError={lastNameError} email={email} setEmail={setEmail} emailError={emailError} setEmailError={setEmailError} PassSee={PassSee} navig={navig} setLastNameError={setLastNameError} setPasswordDigest={setPasswordDigest}/>
	)
}

export {CreateANewAccount}