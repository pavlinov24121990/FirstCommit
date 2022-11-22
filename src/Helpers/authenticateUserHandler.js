export const EmailHandler = (e, setEmail, setEmailErrors) => {
		setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		if (!e.target.value) {
			setEmailErrors("Write email")
		} else if (!re.test(String(e.target.value).toLowerCase())) {
			setEmailErrors("invalid email")
    } else {
      setEmailErrors("")
    }
	}

export const PasswordHandler = (e, setPasswords, setPasswordsErrors) => {
		setPasswords(e.target.value)
		if  (!e.target.value) {
			setPasswordsErrors("Password cannot be empty")
		} else if (e.target.value.length < 3 || e.target.value.length > 20) {
			setPasswordsErrors("Password must be longer than 3 and no more than 20 characters")
		} else {
			setPasswordsErrors("")
		}
	}