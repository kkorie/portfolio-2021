import React from 'react';
import './Header.css';
import Navigation from './Navigation';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div class="logo">
        <Link to="/">
          <span>kkorie's</span> portfolio
        </Link>
      </div>
      <Navigation />
    </div>
  )
}

export default Header;