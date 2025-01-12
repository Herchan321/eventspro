import React from 'react';
import './navbar.scss';
import Blog from '../blog/blog';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">EventsPro</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/list">Services</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/choix">Sign up</a></li>
      </ul>
      <button className="navbar-button">Login</button>
    </nav>
  );
}

export default Navbar;
