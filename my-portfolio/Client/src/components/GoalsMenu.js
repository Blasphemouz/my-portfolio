import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import React from 'react'

export default function GoalsMenu() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className=" hover:scale-x-150 justify-center animate-slide w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-gray-800 text-sm font-medium">
                    <ChevronDownIcon className="w-10 inline-block"/>
                </Menu.Button>
            </div>

            <Transition
          as={Fragment}
          enter="transition ease-out duration-500"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-500"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
                <Menu.Items className="origin-top rounded-3xl bg-gray-800">
                    <div className="py-1">
                        <Menu.Item>
                         <ul className="mx-20 my-16 list-disc">
                            <li>Improve my programming and design skills</li>
                            <li>Create an extensive portfolio with different projects</li>
                            <li>Graduate from my current place of education</li>
                            <li>Enroll at a university for a Computer Science degree</li>
                            <li>Find a job related to my profession</li>    
                         </ul>
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}