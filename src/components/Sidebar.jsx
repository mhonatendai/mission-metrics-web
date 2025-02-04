// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav style={sidebarStyle}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>
                    <Link to="/" style={linkStyle}>Home</Link>
                </li>
                <li>
                    <Link to="/settings" style={linkStyle}>Settings</Link>
                </li>
            </ul>
        </nav>
    );
};

const sidebarStyle = {
    width: '200px',
    height: '100vh',
    background: '#f4f4f4',
    padding: '10px',
    position: 'fixed'
};

const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    padding: '8px',
    display: 'block'
};

export default Sidebar;