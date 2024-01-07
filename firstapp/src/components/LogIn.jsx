import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "../style/LoginUp.css"
function Log() {
    let [name, setname] = useState("")
    let [password, setpassword] = useState("")
    function Savee() {
        let getname = localStorage.getItem("name")
        let getpass = localStorage.getItem("password")
        if (JSON.parse(getname) === name && password === JSON.parse(getpass)) {
            alert("Welcome to Your Account")
        } else {
            alert("Error: 404")
        }
    }

    return (
        <div className="LogIn">
            <form>
                <input type="text" placeholder="User_Name" onChange={(e) => setname(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
                <button onClick={Savee}>
                    submit
                </button>
                <button >
                    <Link to="/Signup">
                        Sign Up
                    </Link>
                </button>
            </form>
        </div>
    )
}
export default Log;