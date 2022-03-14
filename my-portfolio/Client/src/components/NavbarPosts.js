import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom"

export default function NavbarHome() {
    const user = JSON.parse(sessionStorage.getItem('data'));
    let username = '';
    if (user != null){
        username = user.username;
    }    
    return (
        <header className="text-gray-400 bg-gray-900 top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <Link to="/#about" className="ml-3 text-xl">
                        Raul Adamson
                    </Link>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <Link to="/#competitions" className="mr-5 hover:text-white">
                        Competitions
                    </Link>
                    <Link to="/#skills" className="mr-5 hover:text-white">
                        Skills
                    </Link>
                    <Link to="/#inspirations" className="mr-5 hover:text-white">
                        Inspirations
                    </Link>
                    <Link to="/#hobbies" className="mr-5 hover:text-white" >
                        Hobbies
                    </Link>
                    <Link to="/#goals" className="mr-5 hover:text-white">
                        Goals
                    </Link>
                </nav>
                <div className="mr-3">
                    {username}
                </div>
                <Link to="/"
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                        Back
                        <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
            </div>
        </header>
    )
}