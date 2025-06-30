// src/components/Sidebar/Sidebar.jsx

import React, { useState } from 'react';
import './Sidebar.css';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
              <div className={`bar ${isOpen ? 'open' : ''}`}></div>
              <div className={`bar ${isOpen ? 'open' : ''}`}></div>
              <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </button>

      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        
        <a href="/"> Dashboard</a>
        <a href="/notes">Orders</a>
        <a href="/about"> Products</a>
        <a href="/contact"> Customers</a>
        <a href="/contact"> Settings</a>

      </div>
    </>
  );
}
