import React, {useState} from "react";
import Axios from "axios";
import { useNavigate } from "react-router";

export default function AddPost({setNewPost, newPost, toggleIsOn}) {
    const user = JSON.parse(sessionStorage.getItem('data'));
    const [title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");
    const [error, setError] = useState('')
    useNavigate();
    const postData = {
        title: title,
        body: body,
        username: user.username,
        user_id: user.id
    }

    const addPost = () => {
        if (title !== '' && body !== ''){
            Axios.post('https://api.rauladamson.duckdns.org/api/post/posttodb', postData)
            .then(response =>{
                console.log(response)
                console.log(response.data)
                setNewPost(true)
                
            }).then(toggleIsOn)
            .catch((err) => console.log(err))
        } else {
            setError('All fields are required.')
        }
    }
    return(
        <div
                    name="contact"
                    className="fixed col-span-2 h-2/6 w-1/10 mt-10 animate-slide-fast">
                        <div className="flex flex-col bg-gray-900 rounded-3xl">
                    <div className="flex-col justify-center mb-4 mt-4">
                        <label htmlFor="title" className="leading-7 text-sm text-gray-400 ml-8">
                            Title
                        </label>
                        <div className="flex justify-center">
                            <input
                                type="text"
                                id="title"
                                name="Title"
                                className="w-3/4 flex justify-center bg-gray-800 rounded border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="body"
                            className="leading-7 text-sm text-gray-400 ml-8">
                            Body
                        </label>
                        <div className="flex justify-center">
                            <textarea
                                id="body"
                                name="Body"
                                className="w-3/4 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                onChange={(e) => setBody(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mb-3">
                        <button
                            className="text-white w-3/4 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg rounded" type="button" onClick={()=>addPost()}>
                                Submit
                        </button>
                    </div>
                    <div className="flex flex-row justify-center">
                        {error}
                    </div>
                    </div>
                </div>
    )
}