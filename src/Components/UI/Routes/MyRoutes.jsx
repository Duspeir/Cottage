import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../../Pages/Home";
import Notfound from "../../../Pages/Notfound";
import News from "../../../Pages/News";
import Authorisation from "../../../Pages/Authorisation";
import Post from "../../../Pages/Post";
import Catalog from "../../../Pages/Catalog";
import Profile from "../../../Pages/Profile";

const MyRoutes = () => {
    return(
        <Routes>
            <Route path="/authorisation" element={<Authorisation/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/news/:id" element={<Post/>}/>
            <Route path="/garden" element={<Catalog/>}/>
            <Route path="" element={<Home/>}/>
            <Route path="*" element={<Notfound/>}/>
        </Routes>
    )
}

export default MyRoutes;