import React from "react";
import LoginForm from "../Components/LoginForm";
import './LoginPage.css'; 
import techLogo from '../Components/Images/tech_logo.png';

const LoginPage = ({setIsAuthenticated}) => {
    return (
        <div className="login-page">
            
            <div className="login-left">
                <div className="branding">
                    <img src= { techLogo } alt="Company Logo" className="branding-logo" />
                    <h2>Welcome to <span>TechLambdas<br />PVT Ltd</span></h2>
                </div>
            </div>

            <div className="login-right">
                <LoginForm setIsAuthenticated={setIsAuthenticated} />
            </div>
        </div>
    );
};

export default LoginPage;