import { ClockIcon } from "@heroicons/react/solid"
import React from "react";
import { hobbies } from "../data";

export default function Hobbies() {
    return (
        <section id="hobbies" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <ClockIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Hobbies
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        This is a list of my hobbies and interests
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {hobbies.map((hobby) => (
                        <a
                            key={hobby.image}
                            className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative animate-slide ">
                                <img
                                    alt="gallery"
                                    className=" opacity-20 absolute inset-0 w-full h-full object-cover object-center rounded-full"
                                    src={hobby.image}
                                />  
                                <div className="px-8 py-10 relative z-10 w-full opacity-100 ">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1 cursor-default">
                                        {hobby.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3 cursor-default">
                                        {hobby.title}
                                    </h1>
                                    <p className="leading-relaxed cursor-default">{hobby.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}