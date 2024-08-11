import React, { useState } from 'react';
import './Login.css';
import { Element } from 'react-scroll';
import eyeOpen from '../assets/icons/visible.png';
import { Link } from 'react-router-dom'
import eyeClosed from '../assets/icons/hide.png';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <Element name='login'>
            <div className="login-form-container">
                <form className="login-form">
                    <h2>Log In</h2>

                    <div className="input-container">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required />
                    </div>

                    <div className="input-container">
                        <label htmlFor="password">Password:</label>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            id="password"
                            name="password"
                            required
                        />
                        <img
                            src={passwordVisible ? eyeOpen : eyeClosed}
                            alt="Toggle password visibility"
                            className="eye-icon"
                            onClick={togglePasswordVisibility}
                        />
                    </div>

                    <div className="button-container">
                        <button type="submit">Log In</button>
                    </div>

                    <div className="signup-container">
                        <p>Don't have an account?</p>
                        <button type="button" className="signup-button"><Link to="/login/signup">Sign Up</Link></button>
                    </div>
                </form>
            </div>
        </Element>
    );
}

export default Login;
