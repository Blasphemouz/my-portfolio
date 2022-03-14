import React, { useState } from "react";
import Axios from 'axios';
import Login from './Login';
import validator from 'validator';
import { LoginIcon } from "@heroicons/react/solid";    
export default function SignUp() {

    const [username, setUsernameReg] = useState('');
    const [email, setEmailReg] = useState('');
    const [password, setPasswordReg] = useState('');
    const [error, setError] = useState('');
    const [signedUp, setSignedUp] = useState(false);
    const register = () => {
        if(email !== '' && username !== '' && password !== ''){
            if(validator.isEmail(email)){
                Axios.post('https://api.rauladamson.duckdns.org/api/register', {username: username, email:email, password: password, })
                .then((res) =>{
                    console.log(res);
                    console.log(res.data);
                    setSignedUp(true);
                    })
                    .catch((error) => {
                        console.log(error.message)
                        console.log(error.response.data.message)
                        if(error.response.data.message === `duplicate key value violates unique constraint "users_username_key"`){
                            setError('Username already exists')
                        } else if(error.response.data.message === `duplicate key value violates unique constraint "users_email_key"`){
                            setError('Email already exists')
                        }
                    });
            } else {
                setError('Email is invalid')
            };
        } else {
            setError('All fields are required')
        };
    };
    if(!signedUp){
    return(
        <main>
            <div className="container px-5 py-10 mt-0 text-center items-center">
                <LoginIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12 animate-slide-fast">
                    Sign Up
                </h1>
            </div>
            <div className="flex flex-col text-center items-center justify-center">
                <div className="text-red-500">
                    {error}
                </div>
                <div className="mb-4 animate-slide-fast">
                <label class="block text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black" id="username" type="text" placeholder="Username" onChange={(e) => {setUsernameReg(e.target.value);}} />
                </div>
                <div className="mb-4 animate-slide-fast">
                    <label class="block text-sm font-bold mb-2" for="email">
                        E-mail
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black" id="email" type="email" placeholder="E-Mail" onChange={(e) => {setEmailReg(e.target.value);}}/>
                </div>
                <div className="mb-3 animate-slide-fast">
                <label className="block text-sm font-bold mb-2 " for="password">
                    Password
                </label>
                <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-black mb-3" id="password" type="password" onChange={(e) => {setPasswordReg(e.target.value);}} placeholder="******************" />
                {/* <p className="text-red text-xs italic">Please choose a password.</p> */}
                </div>

                <div className="flex items-center">
                <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2 animate-slide" type="button" onClick={register}>
                    Sign Up
                </button>
                </div>
            </div>
    </main>
    )
    }
    else{
        return(
            <Login />
        )
    }
}