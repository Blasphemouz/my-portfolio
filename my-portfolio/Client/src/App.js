import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import LoginPage from './LoginPage';
import PostsPage from './PostsPage';
import Error404 from './components/Error404';
export default function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
    </BrowserRouter>
  );
}
