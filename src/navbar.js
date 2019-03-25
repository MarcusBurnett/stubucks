import React from 'react';
import './navbar.css';

const Navbar = () => {

    return (
        <div>
        <nav className="navbar">
            <img className="logo" src={require('./Assets/Images/stubucks-logo.png')}></img>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Menu</li>
            <li>Rewards</li>
            <li>Want to join our team?</li>
            <li>Locations</li>
            <li>Specials</li>
        </nav>
            
        </div>
    )
}


export default Navbar;
