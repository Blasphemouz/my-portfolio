import React from "react";
import { Link } from "react-router-dom"
import NavbarLogin from "./NavbarLogin"

export default function Error404() {
    return (
        <section id="Error404">
            <NavbarLogin />
            <div className="container mx-auto w-full h-screen flex flex-col items-center align-middle justify-center">
                <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-20 items-center text-center align-middle justify-center">
                    <h1 className="title-font text-6xl mb-4 font-medium text-white">
                        Error 404
                        <br />Page not found!
                    </h1>
                    <div className="flex justify-content-center animate-slide-fast">
                        <Link
                            to="/"
                            className="inline-flex text-white bg-green-500 border-0 py-4 px-8 mt-1 focus:outline-none hover:bg-green-600 rounded text-xl">
                            Go back
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}