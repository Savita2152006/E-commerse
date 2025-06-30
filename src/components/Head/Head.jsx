import React from 'react';
import './Head.css';
import bol from '../../assets/bol.png';

function Head() {
  return (
    <header className="header">
      <div className="logo-section">
        <img src={bol} alt="bol" className="bol" />
        <h1 className="site-title">Rendocolap</h1>
      </div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/notes">Notes</a>
        <a href="/contact">Contact</a>
        <button className="rainbow-button">signin</button>
      </nav>
    </header>
  );
}

export default Head;
