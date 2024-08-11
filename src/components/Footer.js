import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const location = useLocation();

    return (
        <footer className="footer">
            <div className="footer-section logo-section">
                <div className="logo">
                    <img src="/icons/logol.png" alt="Little Lemon Logo" />
                </div>
            </div>
            <div className="footer-section navigation">
                <h2>Doormat Navigation</h2>
                <ul>
                    <li>
                        {location.pathname === '/' ? (
                            <ScrollLink to="nav" smooth={true} duration={500}>Home</ScrollLink>
                        ) : (
                            <RouterLink to="/">Home</RouterLink>
                        )}
                    </li>
                    <li>
                        {location.pathname === '/' ? (
                            <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
                        ) : (
                            <RouterLink to="/">About</RouterLink>
                        )}
                    </li>
                    <li>
                        {location.pathname === '/' ? (
                            <RouterLink to="/menu">Menu</RouterLink>
                        ) : (
                            <ScrollLink to="menu" smooth={true} duration={500}>Menu</ScrollLink>
                        )}
                    </li>
                    <li>
                        {location.pathname === '/' ? (
                            <RouterLink to="/reservation">Reservation</RouterLink>
                        ) : (
                            <ScrollLink to="reservation" smooth={true} duration={500}>Reservation</ScrollLink>
                        )}
                    </li>
                    <li>
              {location.pathname === '/' ? (
                <RouterLink to="/login">Login</RouterLink>
              ) : (
                <ScrollLink to="login" smooth={true} duration={500}>Login</ScrollLink>
              )}
          </li>
                </ul>
            </div>
            <div className="footer-section contact">
                <h2>Contact</h2>
                <p>Phone Number</p>
                <p>Email</p>
            </div>
            <div className="footer-section social-media">
                <h2>Social Media</h2>
                <ul>
                    <li><a href="#"><img src="/icons/facebook.png" alt="Facebook" /> Facebook</a></li>
                    <li><a href="#"><img src="/icons/instagram.png" alt="Instagram" /> Instagram</a></li>
                    <li><a href="#"><img src="/icons/whatsapp.png" alt="WhatsApp"/> WhatsApp</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
