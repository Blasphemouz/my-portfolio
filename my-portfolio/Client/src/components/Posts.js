import React, { useEffect, useState } from "react";
import { ThumbUpIcon, AnnotationIcon } from "@heroicons/react/solid";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Posts({newPost, setNewPost}) {
    const user = JSON.parse(sessionStorage.getItem('data'));
    const [data,setData] = useState([])
    useNavigate();
    const putLike = async(pid) => {
                if (user != null) {
                await Axios.put('https://api.rauladamson.duckdns.org/api/put/likes', {uid: user.id, post_id: pid})
                .then (res => {
                Axios.get('https://api.rauladamson.duckdns.org/api/get/allposts').then(response => {
                        console.log(response)
                        setData(response.data)
                })
                    console.log(user.id)
                    console.log(res)
                    console.log(res.data)
                }).catch(err => {
                    console.log(err)
                })
            }
    }
    const allNewPosts= async() => {
    if(newPost === true){
            setNewPost(false);
            await Axios.get('https://api.rauladamson.duckdns.org/api/get/allposts')
            .then(res => {
                setData(res.data)
            })
    }
}
allNewPosts()
    const getPosts = () => {
        return Axios.get('https://api.rauladamson.duckdns.org/api/get/allposts').then(response => {
            return response.data
        });
    };
     useEffect(() => getPosts()
        .then((res) => {
            for (let i=0; i < res[0].pid;i++){
                setData(res)
            }
        })
        .catch((err) => console.log(err)), [])


    return(
        
        <main className=" mt-20 h-full">
            <div className="flex flex-col w-full mb-20 animate-slide">
                    <AnnotationIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="flex justify-center sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Posts
                    </h1>
            </div>
            <div className="md:overflow-auto h-screen">
            {data.map(((item) => (
                <div className="flex justify-center ">
                    <div key={item.pid} className=" bg-gray-800 mb-10 w-full md:w-1/2 flex flex-col rounded-3xl h-72 animate-slide-fast">
                        <div className=" flex flex-row mt-5 mb-4">
                            <div className=" w-1/4"></div>
                            <h1 className="flex flex-row title-font sm:text-4xl col-span-2 text-3xl font-medium text-white w-2/4 justify-center">{item.title}</h1>
                            <h3 className="flex justify-end pr-7 text-xl w-1/4">{item.author}</h3>
                        </div>
                        <div className="flex h-full justify-center text-white">
                            <p className="flex flex-col h-1/2 align-bottom justify-end">{item.body}</p>
                        </div>
                        <div className="flex justify-between mb-5">
                            <p className="ml-7">{(item.date_created).split('T')[0]}</p>
                            <p className="flex mr-7">
                                <button onClick={() => (putLike(item.pid))}><ThumbUpIcon className="w-5 mr-1 hover:text-white"/></button>
                                {item.likes}
                            </p>
                        </div>
                    </div>
                </div>
            )))}
            <div>

            </div>
            </div>
        </main>
    )
            }