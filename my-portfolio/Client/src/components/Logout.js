import React from "react";
import { Link } from "react-router-dom";
export default function(Logout){
    return(
    <Link to="/"
        className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0" onClick={() => window.sessionStorage.removeItem('data')}>
            Log Out
    </Link>
    )
}