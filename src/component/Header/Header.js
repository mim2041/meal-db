import React from 'react';
import logo from '../../logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='title'>
                {/* <img src={logo} alt="" /> */}
                <h2>Testy Here</h2>
            </div>
            <div className='nav'>
                <a href="/home">Home</a>
                <a href="/category">Category</a>
                <a href="/item">Item</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;