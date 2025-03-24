import background from "./background.jpg";
import "./style.css";
import React, { useState } from "react";
import axios from "axios";

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [dob, setDOB] = useState("");
    const [gender, setGender] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        const result = await axios.post("http://localhost:5000/user/signup", { username, password, name, age, dob, gender });
        alert(result.data.msg);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="back-login flex">
                <img src={background} className="back-image-login" alt="background" />
                <div className="back-content-login flex">
                    <h1>Signup</h1>
                    <div className="input-group flex">
                        <input 
                            placeholder="Full Name" 
                            className="input-signup"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input 
                            placeholder="Username" 
                            className="input-signup"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="input-signup"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input 
                            type="password" 
                            placeholder="Confirm Password" 
                            className="input-signup"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="extra-info-signup">
                        <div className="age-signup">
                            <span>Age</span>
                            <input 
                                type="number" 
                                value={age} 
                                onChange={(e) => setAge(e.target.value)} 
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
                            <option value="">--Select Gender--</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                            <option value="Rather not say">Rather not say</option>
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
                    <button type="submit" className="button-signup">
                        Signup
                    </button>
                </div>
            </form>
        </>
    );
}

export default Signup;
