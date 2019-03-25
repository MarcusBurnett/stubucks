import React from 'react';
import './shop.css';
import ShopSection from './shopSection';

const Shop = (props) => {

    return (
        <div className="shop">
            <img className="downArrowGreen" src={require('./Assets/Icons/icon-angle-arrow-down-green.png')}></img>
            {props.shop.map((shopSection) => {
            return (
                <ShopSection shopSection = {shopSection} key = {shopSection.title}/>
            )
        })}

        </div>
    )
}


export default Shop;