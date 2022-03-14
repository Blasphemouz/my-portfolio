import React, { useState } from "react";
import NavbarPosts from "./components/NavbarPosts";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import useToggle from "./components/useToggle";
import { PlusIcon, ChevronRightIcon} from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

export default function Home() {
    const user = JSON.parse(sessionStorage.getItem('data'));
    const [newPost, setNewPost] = useState(false);
    const [isOn, toggleIsOn] = useToggle();
    let btn = '';
    let show = isOn ? <AddPost newPost={newPost} setNewPost={setNewPost} toggleIsOn={toggleIsOn}/> : ''
    if (user != null){
      btn = isOn ? 'Back' : <PlusIcon className="w-10 rounded-full bg-green-700 hover:bg-green-600"/>
    }
    return (
      <main className= "text-gray-400  bg-gray-900 md:bg-gradient-to-r from-blue-800 to-indigo-800 body-font rounded-b-hf">
        <NavbarPosts/>
        <div className="grid grid-cols-6">
          <div className=" md:flex hidden bg-transparent rounded-tr-full animate-slide justify-items-center justify-center h-1/2 col-span-1">
                {show}
                <div className=" md:flex flex-col hidden justify-center ">
                  <div className=" md:flex hidden justify-center">
                  <button className="md:flex flex-col md:fixed hidden animate-slide md:mt-24" onClick={toggleIsOn}>{btn}</button>
                  </div>
                </div>
          </div>
          <div className=" flex-col justify-center center col-span-6 md:col-span-4 bg-gray-900 rounded-hf">
            <Posts newPost={newPost} setNewPost={setNewPost}/>
          </div>
          <div className="md:flex justify-center hidden">
              <Link to="/" className="flex flex-col mt-96">
                <ChevronRightIcon className=" fixed w-10 rounded-full bg-gray-50 bg-opacity-0 hover:bg-opacity-20"/>
              </Link>
          </div>
        </div>
      </main>
    );
  }