import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const CreateStudent = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [eId, setEId] = useState('');
    const [phone, setPhone] = useState('');
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [nextId, setNextId] = useState(1)

    const fetchStudentData = async () => {
        await axios.get("http://localhost:8000/api/fetchStudent")
            .then((response) => {
                console.log("response", response)
                setNextId(response.data.length+1)
            }).catch(error => { console.log("errr", error) })
    }
    useEffect(() => {
        fetchStudentData()
    }, [])


    const fetchBookData = async () => {

        const newData = {
            "id": nextId,
            "activeBorrows": [],
            "email": email,
            "enrollmentId": eId,
            "joinDate": new Date().toLocaleDateString('en-GB'),
            "name": name,
            "password": password,
            "phone": "+91 " + phone,
            "totalBorrowed": 0
        }
        await axios.post("http://localhost:8000/api/createStudent", newData)
            .then((response) => {
                navigate('/login')
            }).catch(error => { console.log("errr", error) })
    }



    const handleLogin = (e) => {
        e.preventDefault();

        // Add your authentication logic or API call here
        if (!email || !password || !name || !eId || !phone) {
            setLoginError('Please fill in all fields');
        }

        else {
            fetchBookData()
        }


    };

    return (
        <div style={{ display: "flex", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
            <div className="login-container">
                <div className="login-background">
                    <div className="login-blob login-blob-1"></div>
                    <div className="login-blob login-blob-2"></div>
                </div>

                <div className="login-wrapper">
                    <button
                        className="back-button"
                        onClick={() => navigate('/login')}
                    >
                        ← Back to Login
                    </button>

                    <div className="login-card">

                        <form className="login-form">

                            <div className="form-group">
                                <label htmlFor="name" style={{ color: "white" }}
                                    className="form-label">Name</label>
                                <div className="input-wrapper">
                                    <input
                                        id="name"
                                        type="name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter Your Name"
                                        className="form-input"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label" style={{ color: "white" }}
                                >Email Address</label>
                                <div className="input-wrapper">
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter Your Email"
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password" className="form-label" style={{ color: "white" }}
                                >Password</label>
                                <div className="input-wrapper">

                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="form-input"
                                    />
                                    <button
                                        type="button"
                                        className="password-toggle"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? '🙈' : '👁️'}
                                    </button>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="EnrollmentId" className="form-label" style={{ color: "white" }}
                                >EnrollmentId </label>
                                <div className="input-wrapper">
                                    <input
                                        id="EnrollmentId"
                                        type="EnrollmentId"
                                        name="EnrollmentId"
                                        value={eId}
                                        onChange={(e) => setEId(e.target.value)}
                                        placeholder="Enter Your EnrollmentId"
                                        className="form-input"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone" className="form-label" style={{ color: "white" }}
                                >Phone </label>
                                <div className="input-wrapper">
                                    <input
                                        id="phone"
                                        type="phone"
                                        name="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Enter Your Phone"
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            {loginError && (
                                <div className="error-message">
                                    <span className="error-icon">⚠️</span>
                                    {loginError}
                                </div>
                            )}

                            {/*  <div className="form-footer">
                            <label className="checkbox-label">
                                <input type="checkbox" defaultChecked className="checkbox-input" />
                                Remember me
                            </label>
                            <a href="/" className="forgot-link">Forgot password?</a>
                        </div>*/}

                            <button className="login-button" onClick={(e) => { handleLogin(e) }}>

                                Register

                            </button>
                        </form>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateStudent;