import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [students, setStudents] = useState([]);
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const fetchBookData = async () => {
        await axios.get("http://localhost:8800/api/fetchStudent").then((response) => {
            //setNextId(response.data.length)
            setStudents(response.data)
        }).catch(error => { console.log("errr", error) })
    }
    useEffect(() => {
        fetchBookData()
    }, [])


    const handleLogin = (e) => {
        e.preventDefault();


        // Add your authentication logic or API call here
        if (!email || !password) {
            setLoginError('Please fill in all fields');
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setLoginError('Please enter a valid email');
        }
        else if (password.length < 6) {
            setLoginError('Password must be at least 6 characters');
        }
        else if (email && password) {
            if (email === "adminHost@gmail.com" && password === "adminHost123") {
                localStorage.setItem("credentials", "admin")
                localStorage.removeItem("studentId")
                localStorage.removeItem("studentPersonalId")
                navigate('/home')
            }
            else {
                students.map((item) => (
                    email === item.email && password === item.password ?
                        (navigate('/home'),

                            localStorage.setItem("credentials", "student"),
                            localStorage.setItem("studentId", item._id),
                            localStorage.setItem("studentPersonalId", item.id)
                        )
                        :
                        setLoginError('Not Valid Details')

                ))
            }
        }
        else {
            setLoginError('Please enter a valid details');
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
                        onClick={() => navigate('/')}
                    >
                        ← Back to Home
                    </button>

                    <div className="login-card">
                        <div className="login-header">
                            <div className="login-logo">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M6 4h20v2H6V4zm0 6h20v14H6V10zm2 2v10h16V12H8z" fill="currentColor" />
                                </svg>
                            </div>
                            <h1 className="login-title">LibraryHub</h1>
                            <p className="login-subtitle">Your Digital Library Companion</p>
                        </div>

                        <form className="login-form">

                            <div className="form-group">
                                <label htmlFor="email" className="form-label" style={{ color: "white" }}>
                                    Email Address</label>
                                <div className="input-wrapper">
                                    <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <path d="m22 6-10 7L2 6" />
                                    </svg>&nbps
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
                                <label htmlFor="password" className="form-label" style={{ color: "white" }}>
                                    Password</label>
                                <div className="input-wrapper">
                                    <svg className="input-icon" width="18" height="18"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>&nbps
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

                                Sign In

                            </button>
                        </form>

                        <div className="login-divider">
                            <span>Don't have an account?</span>
                        </div>

                        <button className="signup-button" onClick={() => { navigate('/register') }}>
                            Create Account
                        </button>

                        {/* <div className="demo-credentials">
                        <p className="demo-label">Try Demo</p>
                        <p>Email: demo@library.com</p>
                        <p>Password: demo123</p>
                    </div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;