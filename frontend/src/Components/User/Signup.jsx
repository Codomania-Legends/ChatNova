import background from "./background.jpg"
import "./style.css"
import React, { useState } from 'react'
import axios from "axios"

function Signup() {
    const [ username , setUsername ] = useState("")
    const [ password , setPassword ] = useState("")
    const [ name , setName ] = useState("")
    const [ age , setAge ] = useState("")
    const [ dob , setDOB ] = useState("")
    const [ gender , setGender ] = useState("")
    async function handleSubmit(e) {
        e.preventDefault()
        const result = await axios.post( "http://localhost:5000/user/signup" , { username , password , name , age , dob , gender } )
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
                    placeholder="name" 
                    className="username-input-login"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
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
                    <div className="age-signup">
                        <span>age</span>
                        <input 
                            value={age} 
                            onChange={(e) => setAge(e.target.value)} 
                            type="number" 
                            className="age-input-signup" 
                        />
                    </div>
                    <label htmlFor="gender">Gender</label>
                    <select
                        value={gender} 
                        onChange={(e) => setGender(e.target.value)} 
                        name="gender" 
                        className="gender-signup"
                    >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Rather not to say</option>
                        <option>Other</option>
                    </select>
                    <div className="dob-signup flex">
                        <span>Date of Birth</span>
                        <input 
                            type="date" 
                            className="dob-input-signup flex"
                            value={dob}
                            onChange={(e) => setDOB(e.target.value)}
                        />
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

export default Signup
