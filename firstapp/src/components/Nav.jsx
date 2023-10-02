import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./Home";
import About from "./About";
import NotFound from "../components/NotFound/index";
import "../style/main.css"
function Nav() {
    return (
        <div className="main">
            <BrowserRouter>
            <br />
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="About">About</Link>
                </nav>
                <br />
                <br />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Nav;