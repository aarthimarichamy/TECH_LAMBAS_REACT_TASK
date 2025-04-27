import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../data/users";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = ({setIsAuthenticated}) => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = formData;
        if (!username || !password) {
            toast.error("Please fill in all fields.");
            return;
        }
        const isValidUser = users.some(user => user.username === username && user.password === password);
        if (isValidUser) {
            setIsAuthenticated(true);
            toast.success("Login successful! Redirecting...");
            setTimeout(() => {
                navigate('/employees');
            }, 2000);
        } else {
            toast.error("Invalid Credentials. Please try again.");
        }
    };

return (
    <div className="login-form-wrapper">
            <h2 className="welcome-text">Welcome Back !</h2>
            <p className="signin-text">Sign in to <span>TechLambdas</span></p>
            <p className="description">Lorem Ipsum is simply</p>

            {error && <p className="error-message">{error}</p>}

            <form onSubmit={handleSubmit} className="login-form">
                <label className="login-form-label">User Name</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    placeholder="Enter your user name"
                    onChange={handleChange}
                    className="login-form-input"
                />
                <label className="login-form-label">Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Enter your Password"
                    onChange={handleChange}
                    className="login-form-input"
                />
                <button type="submit" className="login-form-button">Login</button>
            </form>
            <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            pauseOnHover
            draggable/>
        </div>
);
};

export default LoginForm;