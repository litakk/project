import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./Home";
import About from "./About";
import NotFound from "../components/NotFound/index";
import LogIn from "./LogIn";
import Signup from "./Registration";

import "../style/main.css"
function Nav() {
    return (
        <div className="main">
            <BrowserRouter>
                <nav>
                    <Link to="/" className="na">Home</Link>
                    <Link to="About" className="na">About</Link>
                    <Link to="/Signup" className="na">Sign up</Link>
                </nav>
                <br />
                <br />
                <br />
           
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/*" element={<NotFound />} />
                    <Route path="/Signup" element={<Signup />} />
                    <Route path="/LogIn" element={<LogIn />} />

                </Routes>
            </BrowserRouter>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
        
    )
}
export default Nav;