import React, { useState } from "react";
import './LogIn.css'
import { SuccessModal } from "../../components/Modal/SuccessModal";
import {ErrorModal} from "../../components/Modal/ErrorModal";
import { logIn, register } from "../../core/services/api/auth";
import { saveAccessToken } from "../../utils/token.utils";
import {  CartContext } from "../../providers/Context";


export const LogIn = (props) => {

    //for the bounce effect
    const [useroptionFormClass, setUserOptionFormClass] = useState('user_options-forms')

    const [email, setEmail] = useState('');
    const [password, setPassord] = useState('');
    const [fullName, setFullName] = useState('');
    const [successModalShow, setSuccessModalShow] = React.useState(false);
    const [successModalMessage, setSuccessModalMessage] = useState('');
    const [errorModalShow, setErrorModalShow] = React.useState(false);
    const [errorModalMessage, setErrorModalMessage] = useState('');

    const { loggedInDispatch}= CartContext();
    // console.log(loggedInState, loggedInDispatch);
    


    /**
     * post request to login route
     * @param {Event} e 
     */
    const logInBtnHandler = async (e) => {
        e.preventDefault();
        try {
            const logInObject = { email: email, password: password };
            const data = await logIn(logInObject);
            const { error, message,user_id } = data;
            if (error) {
                setErrorModalMessage(message);
                setErrorModalShow(true);
            } else {
              
                // console.log(response.data);
                const access_token = data.access_token;
                //save access token to local storage
                localStorage.setItem('login', true);
                localStorage.setItem('user_id', user_id);
                saveAccessToken(access_token);
                setEmail('');
                setPassord('');
                loggedInDispatch({type:'loggedIn',payload:{user_id:user_id}});

                setSuccessModalMessage(message);
                setSuccessModalShow(true);
            }
        } catch (error) {
            console.log('logIn handler error', error);
        }


    }

    const registerBtnHandler = async (e) => {
        e.preventDefault();
        try {
            const registerObject = { fullName: fullName, email: email, password: password }
            const data = await register(registerObject);
            const { error, message } = data;
            if (error) {
                setErrorModalMessage(message);
                setErrorModalShow(true);
            } else {
                setFullName('');
                setEmail('');
                setPassord('');
                setSuccessModalMessage(message);
                setSuccessModalShow(true);
            }
        } catch (error) {
            console.log('register handler error: ', error);
        }

    }





    const nameChangeHandler = (e) => {
        const { value } = e.target;
        setFullName(value);

    }
    const emailChangeHandler = (e) => {
        const { value } = e.target;
        setEmail(value);

    }
    const passwordChangeHandler = (e) => {
        const { value } = e.target;
        setPassord(value);
    }



    //To bounce the form lrft and right
    const bounceHandler = (e) => {
        const { value } = e.target;
        if (value === 'logIn') {
            setUserOptionFormClass('user_options-forms bounceRight');
        }
        else {
            setUserOptionFormClass('user_options-forms bounceLeft');
        }

    }

    return (
        <div className="main-container container-fluid">

            <section className="user">
                <div className="user_options-container">

                    <div className="user_options-text">
                        <div className="user_options-unregistered ">
                            <h2 className="user_unregistered-title">Not a member?</h2>

                            <button onClick={bounceHandler} className="user_unregistered-signup" id="signup-button" value="register">Register</button>
                        </div>

                        <div className="user_options-registered ">
                            <h2 className="user_registered-title">Already a member?</h2>

                            <button onClick={bounceHandler} className="user_registered-login" id="login-button" value="logIn">Login</button>
                        </div>
                    </div>

                    <div className={useroptionFormClass} id="user_options-forms">

                        <div className="user_forms-login">
                            <h2 className="forms_title">Login</h2>
                            <form className="forms_form">
                                <fieldset className="forms_fieldset">
                                    <div className="forms_field">
                                        <input onChange={emailChangeHandler} type="email" name="email" placeholder="Email" className="forms_field-input" required
                                            value={email} autoFocus />
                                    </div>
                                    <div className="forms_field">
                                        <input onChange={passwordChangeHandler} type="password" name="password" placeholder="Password" className="forms_field-input"
                                            value={password} required />
                                    </div>
                                </fieldset>
                                <div className="forms_buttons">
                                    <button type="button" className="forms_buttons-forgot">Forgot password?</button>
                                    <input onClick={logInBtnHandler} type="submit" value="Log In" className="forms_buttons-action" />
                                </div>
                            </form>
                        </div>
                        <div className="user_forms-signup">
                            <h2 className="forms_title">Register</h2>
                            <form className="forms_form">
                                <fieldset className="forms_fieldset">
                                    <div className="forms_field">
                                        <input onChange={nameChangeHandler} value={fullName} type="text" name="fullName" placeholder="Full Name" className="forms_field-input" required />
                                    </div>
                                    <div className="forms_field">
                                        <input onChange={emailChangeHandler} value={email} type="email" name="email" placeholder="Email" className="forms_field-input" required />
                                    </div>
                                    <div className="forms_field">
                                        <input onChange={passwordChangeHandler} value={password} type="password" name="password" placeholder="Password" className="forms_field-input" required />
                                    </div>
                                </fieldset>
                                <div className="forms_buttons">
                                    <input onClick={registerBtnHandler} type="submit" value="Sign up" className="forms_buttons-action" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            <SuccessModal show={successModalShow} onHide={() => {setSuccessModalShow(false); props.history.push('/');  }}
                modalmessage={successModalMessage}/>
            <ErrorModal show={errorModalShow} onHide={() => setErrorModalShow(false)}
                modalmessage={errorModalMessage}/>
        </div>

    )
}