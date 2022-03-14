import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { LoginIcon } from "@heroicons/react/solid";    
export default function Login() {
    const [username, setUsernameLog] = useState('')
    const [password, setPasswordLog] = useState('')
    const [error, setError] = useState([])
    const navigate = useNavigate();

    const login = () => {
        if(username !== '' && password !== ''){
            axios.post('https://api.rauladamson.duckdns.org/api/login', {username: username, password: password })
            .then((res) =>{
            console.log(res);
            console.log(res.data);
            sessionStorage.setItem('data', JSON.stringify(res.data));
            navigate("/");
            })
            .catch((error) => {
                console.log(error.message)
                setError(error.response.data.message)
            });
        } else {
            setError('All fields are required')
        }
    };

    return(
        <main>
            <div className="container px-5 py-10 mt-0 text-center items-center">
                <LoginIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12 animate-slide-fast">
                    Login
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
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black" id="username" type="text" placeholder="Username" onChange={(e) => {setUsernameLog(e.target.value);}} />
                </div>
                <div className="mb-3 animate-slide-fast">
                <label className="block text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-black mb-3" id="password" type="password" placeholder="******************" onChange={(e) => {setPasswordLog(e.target.value);}} />
                {/* <p className="text-red text-xs italic">Please choose a password.</p> */}
                </div>
                <div className="flex items-center animate-slide">
                <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2" type="button" onClick={login}>
                    Sign In
                </button>
                </div>
            </div>
    </main>
    )
}