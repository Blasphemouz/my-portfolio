import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { inspirations } from "../data";

export default function Inspirations() {
    return (
        <section id="inspirations">
            <div className="container px-5 py-10 mx-auto text-center">
                <UsersIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Inspirations
                </h1>
                <div className="flex flex-wrap m-4">
                    {inspirations.map((inspiration) => (
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                                <div className="test grid grid-rows-2">
                                    <div className="top">
                                        <p className="leading-relaxed mb-6">{inspiration.quote}</p>
                                    </div>
                                    <div className="inline-flex items-center">
                                        <div className="bottom">
                                            <img
                                                alt="inspiration"
                                                src={inspiration.image}
                                                className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                                            />
                                            <span className="flex-grow flex flex-col pl-4">
                                                <span className="title-font font-medium text-white">
                                                    {inspiration.name}
                                                </span>
                                                <span className="text-gray-500 text-sm uppercase">
                                                    {inspiration.company}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}