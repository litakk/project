import React , {useState} from "react";
import { Link } from 'react-router-dom'
function Main() {
    let [name, setname] = useState("")
    let [password, setpassword] = useState("")
    let [acceptpass, setacceptpass] = useState("")

    function Savee() {
        let savename = JSON.stringify(name)
        localStorage.setItem("name", savename)
        
        if ( password === acceptpass ) {
            let savepassword = JSON.stringify(password)
            localStorage.setItem("password", savepassword)
        } else {
            alert("Eror: 404")
        }
        
        


    }
        return (
            <div className="Sign up">
                <form>
                    <input type="text" placeholder="User_Name"  onChange={(e) => setname(e.target.value)}/>
                    <input type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)}/>
                    <input type="password" placeholder="Password" onChange={(e) => setacceptpass(e.target.value)}/>
                    <button onClick={Savee}>
                        Submite
                    </button>
                    <button>
                        <Link to="/LogIn">
                        Sign in
                        </Link>
                    </button>
                </form>
            </div>
        )
    }
    export default Main;