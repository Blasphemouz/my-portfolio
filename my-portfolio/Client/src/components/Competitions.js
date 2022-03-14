import { CodeIcon } from "@heroicons/react/solid"
import React from "react";
import { competitions } from "../data";

export default function Competitions() {
    return (
        <section id="competitions" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Competitions
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        This is a list of competitions in the IT-sphere I've previously participated in.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {competitions.map((competition) => (
                        <a
                            href={competition.link}
                            key={competition.image}
                            className="w-full md:w-1/2 p-4">
                            <div className="flex relative animate-slide">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-fill"
                                    src={competition.image}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-80 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {competition.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {competition.title}
                                    </h1>
                                    <p className="leading-relaxed">{competition.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}