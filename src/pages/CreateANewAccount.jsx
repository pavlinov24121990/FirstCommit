import { render } from "@testing-library/react";
import { useState } from "react"
import { useEffect } from "react"
import React from 'react';





let CreateNewAccount = (e) => {
    e.preventDefault ()
    const form = document.getElementById('CreateAccountMainContentForm')
    const formData = new FormData(form)
    console.log (formData)
    for (const key of formData) {
    console.log(key);
    }
    let user = fetch('https://study-rails-blog-api.herokuapp.com/api/v1/user', {
      method: 'POST',
      body: formData
    });
    console.log (user)

    let result = () => {

     user.json();
    console.log (result)
    alert(result.text);
        console.log(result)
        }
}   


    const CreateANewAccount = () => {

  
        return (
            <div className="CreateAccountMain">
                <div className="CreateAccountMainContent">
                    <h2 className="CreateAccountMainContentH1">NoT Only Flowers</h2>
                    <h2 className="CreateAccountMainContentH2">Create an account</h2>
                    <p className="CreateAccountMainContentH2">Quick and easy.</p>
                    <span className="CreateAccountMainContentSpan"></span>
                    <form className="CreateAccountMainContentForm" onSubmit= {e => { CreateNewAccount (e) }} id="CreateAccountMainContentForm">
                        <div>
                            <input className="CreateAccountMainContentInput" name="first_name" placeholder="Write an name" type="text" />
                            <input className="CreateAccountMainContentInput" name="last_name" placeholder="Write an surname" type="text" />
                        </div>
                        <div>
                            <input className="CreateAccountMainContentInput" name="password" placeholder="Write password" type="password" />
                            <input className="CreateAccountMainContentInput" name="password_confirmation" placeholder="Repeat password" type="password" />
                        </div>
                        <div>
                            <input className="CreateAccountMainContentInput" name="email" placeholder="Write email" type="email" />
                        </div>
                        <p className="CreateAccountMainContentH2">In Love</p>
                        <button id="CreateAccountMainContentButton" type="submit" className="CreateANewAccount">Registration</button>
                    </form>
                </div>
            </div>
            
        
        )
    }

export {CreateANewAccount}