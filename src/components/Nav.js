import React from "react";
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Element } from 'react-scroll';
import "./Nav.css";

const Nav = () => {
  const location = useLocation();

  return (
    <Element name="nav">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/icons/logo.jpg" alt="Little Lemon Logo" />
        </div>
        <ul className="navbar-links">
          <li>
            {location.pathname === '/' ? (
              <Link to="home" smooth={true} duration={500}>HOME</Link>
            ) : (
              <RouterLink to="/">HOME</RouterLink>
            )}
          </li>
          <li>
            {location.pathname === '/' ? (
              <Link to="about" smooth={true} duration={500}>ABOUT</Link>
            ) : (
              <RouterLink to="/">ABOUT</RouterLink>
            )}
          </li>
          <li>
              {location.pathname === '/' ? (
                <RouterLink to="/menu">MENU</RouterLink>
              ) : (
                <Link to="menu" smooth={true} duration={500}>MENU</Link>
              )}
          </li>
          <li>
              {location.pathname === '/' ? (
                <RouterLink to="/reservation">RESERVATION</RouterLink>
              ) : (
                <Link to="reservation" smooth={true} duration={500}>RESERVATION</Link>
              )}
          </li>
          <li>
              {location.pathname === '/' ? (
                <RouterLink to="/login">LOGIN</RouterLink>
              ) : (
                <Link to="login" smooth={true} duration={500}>LOGIN</Link>
              )}
          </li>
        </ul>
      </nav>
    </Element>
  );
};

export default Nav;
