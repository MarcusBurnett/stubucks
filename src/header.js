import React from 'react';
import './header.css';

const Header = () => {

    return (
        <div className="header">
            <h1 className="title"><span className="love">Love</span> your Stu</h1>
            <p className="subtitle">Look at our range and choose the Stu that suits you</p>
            <button className="selectCoffeeBtn">Choose your coffee</button>
        </div>
    )
}


export default Header;