import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Raul.
                        <br className="" />I love writing code.
                    </h1>
                    <p className="mb-8 leading-relaxed animate-slide-fast">
                    I'm an 18-year-old Estonian third year programming student in the Ida-Virumaa Vocational Education Centre.
                    The purpose of this website is to introduce myself and learn, as well as display programming technologies
                    that are new to me.
                    </p>
                    <div className="flex justify-content-center animate-slide-fast">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Contact Me
                        </a>
                    </div>
                </div>
                <img
                        className="object-cover object-center rounded animate-slide-fast md:w-1/2"
                        alt="hero"
                        src="./coding.svg"
                    />
            </div>
        </section>
    );
}