
import { useState } from "react"
import { useEffect } from "react"
import React from 'react';
import { MainRoute } from "../Routs/MainRoute";
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {ForgotAccount} from "./ForgotAccount"

   



const CreateANewAccount = ({setPasswordDigest, passwordDigest }) => {
    const [password, setPassword] = useState("Write password")
    const [passwordConfirmation, setpasswordConfirmation] = useState("Write password")
    const [firstТame, setfirstТame] = useState("Write name")
    const [lastName, setlastName] = useState("Write last name")
    const [email, setEmail] = useState("Write email")
    
    
    function PassSee(id) {
      const PassSee = document.getElementById(id)
        if (PassSee.type === "password") {
            PassSee.type = "text"
        } else {
            PassSee.type = "password"
        }
    }
   
    const navig = useNavigate();
    async function CreateNewAccount(e) {
        e.preventDefault();
        const form = document.getElementById('CreateAccountMainContentForm');
        const formData = new FormData(form);
        let request = await fetch('https://study-rails-blog-api.herokuapp.com/api/v1/user', {
            method: 'POST',
            body: formData
        });
        let result = await request.json();
        
        form.reset();
        
        console.log (result)
        if (request.ok) {
            setPasswordDigest(result.password_digest)
            navig("/")
        } else {
            if (result.password?.length) {
                let arrpass = result.password;
                arrpass.forEach(element => {
                }
                );
                if (arrpass == "can't be blank") {
                    setPassword("Empty password fields");

                }
            } else {
                setPassword("Write password");
            }
            if (result.password_confirmation?.length) {
                let arrerrorpassword_confir = result.password_confirmation;
                arrerrorpassword_confir.forEach(element => {
                });
                if (arrerrorpassword_confir == "doesn't match Password") {
                    setpasswordConfirmation("Passwords do not match");
                }
            } else {
                setpasswordConfirmation("Write password");
            }
            if (result.first_name?.length) {
                setfirstТame("Empty field name");
            } else {
                setfirstТame("Write name");
            }
            if (result.last_name?.length) {
                setlastName("Empty field last name");
            } else {
                setlastName("Write last name");
            }
            if (result.email?.length) {
                let arrEmail = result.email;
                arrEmail.forEach(element => {
                });
                if (arrEmail == 'has already been taken') {
                    setEmail("Email already exists");
                } else if (arrEmail[1] == "can't be blank") {
                    setEmail("Empty field email");
                }
            } else {
                setEmail("Write email");
            }
        }

    }
  
    return (
        
            <div className="CreateAccountMain">
                <div className="CreateAccountMainContent">
                    <h2 className="CreateAccountMainContentH1">NoT Only Flowers</h2>
                    <h2 className="CreateAccountMainContentH2">Create an account</h2>
                    <p className="CreateAccountMainContentH2">Quick and easy.</p>
                    <span className="CreateAccountMainContentSpan"></span>
                    <form className="CreateAccountMainContentForm" onSubmit= {e => { CreateNewAccount (e) }} id="CreateAccountMainContentForm">
                        <div className="CreateAccountMainContentFormDiv">
                          <input className="CreateAccountMainContentInput" name="user[first_name]" placeholder={firstТame} type="text" />
                          <input className="CreateAccountMainContentInput" name="user[last_name]" placeholder={lastName} type="text" />
                        </div>
                        <div className="CreateAccountMainContentFormDiv">
                          <input className="CreateAccountMainContentInput" id="passInput" name="user[password]" placeholder={password} type="password" />
                          <i className="CreateAccountMainContentFormDivImg" onMouseDown={() => { PassSee("passInput") }} onMouseUp={() => { PassSee("passInput") }}></i>
                          <input className="CreateAccountMainContentInput" id="passInputLast" name="user[password_confirmation]" placeholder={passwordConfirmation} type="password" />
                          <i className="CreateAccountMainContentFormDivImgg" onMouseDown={ () => { PassSee("passInputLast") }} onMouseUp={ () => { PassSee("passInputLast") }}></i>
                        </div>
                        <div className="CreateAccountMainContentFormDiv">
                            <input className="CreateAccountMainContentInput" name="user[email]" placeholder={email} type="email" />
                            <input value="asd" name="user[image_link]" type="hidden" />
                        </div>
                        <p className="CreateAccountMainContentH2">In Love</p>
                        <button id="clearButton" type="submit" className="CreateANewAccount">Registration</button>
                    </form>
                </div>
            </div>
            
        
        )
    }

export {CreateANewAccount}