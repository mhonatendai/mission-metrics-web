import React from 'react';

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Dashboard Header</h1>
        </header>
    );
};

const headerStyle = {
    background: '#4CAF50',
    color: 'white',
    padding: '10px',
    textAlign: 'center'
};

export default Header;