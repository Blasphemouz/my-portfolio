import React from "react";
import { StarIcon } from "@heroicons/react/solid"
import GoalsMenu from "./GoalsMenu"

export default function Goals() {
    return(
        <section id="goals">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <StarIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Goals
                    </h1>
                    <GoalsMenu />
                </div>
            </div>
        </section>
    )

}