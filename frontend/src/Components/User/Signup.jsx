import background from "./background.jpg"
import "./style.css"
import React, { useState } from 'react'
import axios from "axios"

function Login() {
    const [ username , setUsername ] = useState("")
    const [ password , setPassword ] = useState("")
    async function handleSubmit(e) {
        e.preventDefault()
        const result = await axios.post( "http://localhost:5000/user/signup" , { username , password } )
        alert(result.data.msg)
    }
  return (
    <>
        <form onSubmit={handleSubmit} className="back-login flex">
            <img src={background} className="back-image-login" />
            <div className="back-content-login flex">
                <h1>Login</h1>
                <div className="username-login flex">
                    <input 
                    placeholder="username" 
                    className="username-input-login"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="username-login flex">
                    <input 
                    placeholder="password" 
                    className="username-input-login"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="options-login flex">
                    <span className="forgot-password-login">
                        Forgot password?
                    </span>
                    <span className="new-user-login">
                        New user
                    </span>
                </div>
                <div className="extrainfo">
                    <div className="age">
                        <input type="number" />
                        <span>age</span>
                    </div>
                </div>
                <button type="submit" className="button-login">
                    Login
                </button>
            </div>
        </form>
    </>
  )
}

export default Login
