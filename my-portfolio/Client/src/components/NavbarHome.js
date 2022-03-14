import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom"
import Logout from "./Logout"
import { useNavigate } from "react-router";

export default function NavbarHome() {
    useNavigate();
    const user = JSON.parse(sessionStorage.getItem('data'));
    let username = '';
    let link = <Link to="/login"
    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 animate-slide-fast">
        Login
        <ArrowRightIcon className="w-4 h-4 ml-1" />
    </Link>
    if (user != null){
        username = user.username
         link = <Logout/>
    }
    const posts = <Link to="/posts"
    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mr-96 md:mt-0 animate-slide-fast">
        <ArrowLeftIcon className="w-4 h-4 mr-1" />
        Posts
    </Link>

    return (
        <header className="text-gray-400 bg-gray-900 top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="hidden md:flex">
                    {posts}
                </div>
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        Raul Adamson
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="#competitions" className="mr-5 hover:text-white">
                        Competitions
                    </a>
                    <a href="#skills" className="mr-5 hover:text-white">
                        Skills
                    </a>
                    <a href="#inspirations" className="mr-5 hover:text-white">
                        Inspirations
                    </a>
                    <a href="#hobbies" className="mr-5 hover:text-white" >
                        Hobbies
                    </a>
                    <a href="#goals" className="mr-5 hover:text-white">
                        Goals
                    </a>
                </nav>
                <div className="mr-3">
                    {username}
                </div>
                <div className="inline-flex">
                    <div className="md:hidden mr-4">
                        {posts}
                    </div>
                    <div className="ml-4">
                        {link}
                    </div>
                </div>
            </div>
        </header>
    )
}