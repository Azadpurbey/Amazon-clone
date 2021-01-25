import React, {useState} from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import {auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const signIn = evnt=>{
        evnt.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch(error => alert(error.message))
    }
    const register = evnt=>{
        evnt.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth){
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                    src ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                />
            </Link>     

            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={evnt =>setEmail(evnt.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={evnt=>setPassword(evnt.target.value)}/>

                    <button 
                        type="submit"
                        onClick={signIn}
                        className='login__signInButton'
                    >
                        Sing In
                    </button>
                </form>

                <p>
                    By signing-in you agree to the amazon Fake Clone
                     condition and privacy policy. Happy Shoping.
                </p>

                <button
                    onClick={register}
                    className='login__registerButton'
                > 
                    Create your amazon Account
                </button>

            </div>
            
            
        </div>
    )
}

export default Login
