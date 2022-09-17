import Header from './Header'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            history.push("/add");
        }
    }, [])

    async function login() {
        let item = { email, password };
        let result = await fetch("http://localhost:8000/api/login",
            {
                method: 'post',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }
        )
        result = await result.json();
        //console.warn("failed",result.failed);
        if (result.failed == "1") {
            alert("Login Failed => User name and password do not match");
        }
        else {
            localStorage.setItem("user-info", JSON.stringify(result));
            history.push("/");
        }

    }
    return (
        <div>
            <Header />
            <h1>Login Page</h1>
            <div className="col-sm-6 offset-sm-3">
                <input type="email" className="form-control mb-2" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" className="form-control mb-2" placeholder="Enter Passowrd" onChange={(e) => setPassword(e.target.value)} />
                <button className="btn btn-primary" onClick={login}>Login</button>
            </div>
        </div>
    )
}

export default Login