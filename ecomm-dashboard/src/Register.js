import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from './Header';

function Register() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            history.push("/add");
        }
    }, [])

    async function signUp() {
        let item = { name, password, email }; // make object
        let result = await fetch("http://localhost:8000/api/register", {
            method: 'post',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result));
        history.push("/add");

        // console.warn("result",result);
    }
    return (
        <>
            <Header />
            <div className="col-sm-6 offset-3">
                <h1 className="text-primary m-2">Register Page</h1>
                <input type="text" className="form-control mb-2" placeholder="Enter User Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                <input type="password" className="form-control mb-2" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <input type="text" className="form-control mb-2" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <button className="btn btn-primary m-2" onClick={signUp}>SignUp</button>
            </div>
        </>
    )
}

export default Register