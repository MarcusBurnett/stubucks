import React from 'react';
import './ad.css';

const Ad = () => {

    return (
        <div className="ad">
            <img className="downArrowWhite" src={require('./Assets/Icons/icon-angle-arrow-down-white.png')}></img>
            <img className="stubrewIcedCoffeeImg" src={require('./Assets/Images/StubrewIcedCoffee.png')}></img>
            <div className="textContainer">
                <h1 className="stubrewIcedCoffeeTitle">The new <span className="green">StuBrew</span></h1>
                <p>A delicious new <span className="green">nitro brew</span> developed carefully on the darkside of the moon, instilled with the freshness of Stu himself.</p>
            </div>
        </div>
    )
}


export default Ad;