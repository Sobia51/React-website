import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../../App.css';
import './signup.css';
import Navbar from '../Navbar';
function Signup() {
    const history = useHistory();
    // useEffect (()=>
    // {
    //     if (localStorage.getItem('user-info')){
    //         history.pushState('/')
    //     }
    // },[])


    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function Register() {
        let item = { first, last, email, password }
        console.log(item)
        let result = await fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
                "Content-type": "application/JSON ",
                "Accept": "application/JSON"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.log("result", result)
        localStorage.setItem("user-info", JSON.stringify(result));
        history.push("/")
    }

    return (
        <div>
            <Navbar />

            <div className='signup'>

                <div className="form">
                    <div className="form-body">
                        <div className="username">
                            <label className="form__label" for="firstName">First Name </label>
                            <input className="form_input" type="text" value={first} onChange={(e) => setFirst(e.target.value)} />
                        </div>
                        <div className="lastname">
                            <label className="form__label" for="lastName">Last Name </label>
                            <input className="form_input" type="text" value={last} onChange={(e) => setLast(e.target.value)} />
                        </div>
                        <div className="email">
                            <label className="form__label" for="email">Email </label>
                            <input className="form_input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="password">
                            <label className="form__label" for="password">Password </label>
                            <input className="form_input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                    </div>
                    <input type="submit" onClick={Register} value="Submit" />
                </div>
            </div>
        </div>
    )
}

export default Signup;
