import React from 'react';
import './shopSection.css';

const ShopSection = (props) => {

    return (
        <div className="shopSection">
            <div className="img">
                <img src={props.shopSection.image}></img>
            </div>
            <h1 className="sectionTitle">Shop {props.shopSection.title}</h1>
            <p className="sectionInfo">{props.shopSection.info}</p>
        </div>
    )
}


export default ShopSection;