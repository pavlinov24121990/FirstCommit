export const FirstNameHandler = (e, setFirstТame, setFirstТameError) => {
		setFirstТame(e.target.value)
		if  (!e.target.value) {
			setFirstТameError("First name cannot be empty")
		} else if (e.target.value.length < 2 || e.target.value.length > 15) {
			setFirstТameError("First name must be longer than 2 and no more than 15 characters")
		} else {
			setFirstТameError("")
		}
	}

export const LastNameHandler = (e, setLastName, setLastNameError) => {
		setLastName(e.target.value)
		if  (!e.target.value) {
			setLastNameError("Last name cannot be empty")
		} else if (e.target.value.length < 2 || e.target.value.length > 15) {
			setLastNameError("Last name must be longer than 2 and no more than 15 characters")
		} else {
			setLastNameError("")
		}
	}

export const PasswordHandler = (e, setPassword, setPasswordError) => {
		setPassword(e.target.value)
		if  (!e.target.value) {
			setPasswordError("Password cannot be empty")
		} else if (e.target.value.length < 3 || e.target.value.length > 20) {
			setPasswordError("Password must be longer than 3 and no more than 20 characters")
		} else {
			setPasswordError("")
		}
	}

export const PasswordConfirmationHandler = (e, setpasswordConfirmation, setPasswordConfirmationError) => {
		setpasswordConfirmation(e.target.value)
		if  (!e.target.value) {
			setPasswordConfirmationError("Password confirmation cannot be empty")
		} else if (e.target.value.length < 3 || e.target.value.length > 20) {
			setPasswordConfirmationError("Password must be longer than 3 and no more than 20 characters")
		} else {
			setPasswordConfirmationError("")
		}
	}

export const EmailHandler = (e, setEmail, setEmailError) => {
		setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		if (!re.test(String(e.target.value).toLowerCase())) {
			setEmailError("invalid email")
		} else {
			setEmailError("")
		}
	}