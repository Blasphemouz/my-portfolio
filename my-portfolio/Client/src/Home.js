import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import NavbarHome from "./components/NavbarHome";
import Competitions from "./components/Competitions";
import Skills from "./components/Skills";
import Inspirations from "./components/Inspirations";
import Hobbies from "./components/Hobbies";
import Goals from "./components/Goals";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { Link } from "react-router-dom"

export default function Home() {
    return (
      <main className= "text-gray-400 bg-gray-900 body-font">
        <NavbarHome />
        <div className="grid grid-cols-6">
          <div className=" bg-gradient-to-r from-indigo-800 to-blue-800 rounded-r-full animate-slide align-middle justify-center md:block hidden">
          <Link to="/posts" className="md:flex justify-center mt-96 ml-16 md:fixed hidden">
              <ChevronLeftIcon className="w-10 rounded-full bg-gray-50 bg-opacity-0 hover:bg-opacity-20"/>
            </Link>
          </div>
            <div className="center col-span-6 md:col-span-4 bg-gray-900">
              <About />
              <Competitions />
              <Skills />
              <Hobbies />
              <Goals />
              <Inspirations />
              <Contact />
            </div>
            <div className="bg-gradient-to-r from-blue-800 to-indigo-800 rounded-l-full animate-slide justify-items-end md:block hidden">
            <Link to="/login" className="md:flex mt-96 ml-80 md:fixed hidden justify-self-end">
              <ChevronRightIcon className="w-10 inline-block rounded-full bg-gray-50 bg-opacity-0 hover:bg-opacity-20"/>
            </Link>
            </div>
        </div>
      </main>
    );
  }