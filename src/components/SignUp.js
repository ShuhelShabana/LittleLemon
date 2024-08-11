import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './SignUp.css';
import { Element } from 'react-scroll';
import eyeOpen from '../assets/icons/visible.png'; 
import eyeClosed from '../assets/icons/hide.png';  

const SignUp = () => {
    const [passwordVisible, setPasswordVisible] = useState({
        password: false,
        confirmPassword: false
    });

    const togglePasswordVisibility = (field) => {
        setPasswordVisible(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    return (
        <Element name='signup'>
            <div className="signup-form-container">
                <form className="signup-form">
                    <h2>Sign up</h2>

                    <div className="input-container">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required />
                    </div>

                    <div className="input-container">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="input-container">
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>

                    <div className="input-container">
                        <label htmlFor="password">Password:</label>
                        <input
                            type={passwordVisible.password ? 'text' : 'password'}
                            id="password"
                            name="password"
                            required
                        />
                        <img
                            src={passwordVisible.password ? eyeOpen : eyeClosed}
                            alt="Toggle password visibility"
                            className="eye-icon"
                            onClick={() => togglePasswordVisibility('password')}
                        />
                    </div>

                    <div className="input-container">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type={passwordVisible.confirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            name="confirmPassword"
                            required
                        />
                        <img
                            src={passwordVisible.confirmPassword ? eyeOpen : eyeClosed}
                            alt="Toggle password visibility"
                            className="eye-icon"
                            onClick={() => togglePasswordVisibility('confirmPassword')}
                        />
                    </div>

                    <div className="checkbox-container">
                        <label>
                            <input type="checkbox" required />
                            <Link to="/terms">Agree to Terms and Conditions</Link>
                        </label>
                        <label>
                            <input type="checkbox" required />
                            <Link to="/privacy">Agree to Privacy Policy</Link>
                        </label>
                    </div>

                    <div className="button-container">
                        <button type="submit">Sign up</button>
                    </div>
                </form>
            </div>
        </Element>
    );
}

export default SignUp;
