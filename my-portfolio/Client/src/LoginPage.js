import React from "react";
import NavbarLogin from "./components/NavbarLogin";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import useToggle from "./components/useToggle";

export default function LoginPage() {
  const [isOn, toggleIsOn] = useToggle();
  let show = isOn ? <SignUp /> : <Login /> 
  let btn = isOn ? 'Login' : 'Create Account'
  return (
    <main className= "text-gray-400 bg-gray-900 body-font">
      <section id="login">
        <NavbarLogin />
        
        <div className="grid grid-cols-6">
          <div className="md:flex flex-col bg-gradient-to-r from-indigo-800 to-blue-800 rounded-tr-full h-screen animate-slide col-span-2 justify-center hidden">
            <div className=" text-center">
              {show}
              <button className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-500" onClick={toggleIsOn}>
                {btn}
              </button>
            </div>
          </div>
            <div className="col-span-6 md:col-span-4 flex flex-col justify-center items-center text-center">
                    <div class="sm:container md:hidden">
                    {show}
                    <button className="inline-block align-baseline font-bold text-sm hover:text-blue-500 mb-10" onClick={toggleIsOn}>
                      {btn}
                    </button>
                    </div>
                    <img
                          className="object-cover object-center rounded animate-slide-fast w-1/2 ml-5 mr-0"
                          name="image"
                          alt="hero"
                          src="./authentication.svg"
                      />
                      <div className="text-xs animate-slide-fast">
                        <a className="underline hover:text-blue-500" href="https://iconscout.com/illustrations/authentication" target="image">Authentication Illustration</a> by <a className="underline hover:text-blue-500" href="https://iconscout.com/contributors/manypixels-gallery">Manypixels Gallery</a> on <a className="underline hover:text-blue-500" href="https://iconscout.com">Iconscout</a>
                      </div>
            </div>
        </div>
      </section>
    </main>
  );
}