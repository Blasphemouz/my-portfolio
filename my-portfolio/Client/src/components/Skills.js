import { ChipIcon} from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Skills and Technologies that I've obtained both through school and learning on my own free time. The ones used in this project were learned by me independently during its creation because I wanted to improve which is why it took more than it normally would.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-2/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center animate-slide hover:bg-gray-700">
                                <img
                                    alt="skills"
                                    className="w-20 flex-shrink-0 mr-4"
                                    src={skill.image}
                                />
                                <span className="title-font font-medium text-white cursor-default">
                                    {skill.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}