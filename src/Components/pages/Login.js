
import Navbar from '../Navbar';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './signup.css';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  useEffect (()=>
  {
      if (localStorage.getItem('user-info')){
          history.push('/')
      }
  },[])

 async function login (){
   
      let item = { email, password }
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
       
        <div className="email">
            <label className="form__label" for="email">Email </label>
            <input className="form_input" type="email"  onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="password">
            <label className="form__label" for="password">Password </label>
            <input className="form_input" type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>

    </div>
    <input type="submit" onClick={login} value="Submit" />
    </div>
    </div>
    </div>
  )
}

export default Login;