import React from 'react';
import './footer.css';

const Footer = () => {

    return (
        <div className="footer">
            <div className="footerMenu">
                <div className="help footerSubMenu">
                    <h1>Help</h1>
                    <ul>
                        <li>My Account</li>
                        <li>Stu Cards</li>
                        <li>Stu Rewards</li>
                        <li>Shipping & Returns</li>
                        <li>Current Offers</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="companyInfo footerSubMenu">
                    <h1>Company Info</h1>
                    <ul>
                        <li>Code Ethics</li>
                        <li>Responsible Sourcing</li>
                        <li>Supply Chain</li>
                        <li>Limited Partners</li>
                        <li>Office Coffee</li>
                    </ul>
                </div>
                <div className="aboutUs footerSubMenu">
                    <h1>About Us</h1>
                    <ul>
                        <li>Join Stu</li>
                        <li>Social Responsiblity</li>
                        <li>Our People</li>
                        <li>Newsroom</li>
                    </ul>
                </div>
            </div>
            <div className="share">
                <h1>Share</h1>
                <img className="facebook icon" src={require('./Assets/Icons/icon-facebook.png')}></img>
                <img className="instagram icon" src={require('./Assets/Icons/icon-instagram.png')}></img>
                <img className="linkedIn icon" src={require('./Assets/Icons/icon-linkedin.png')}></img>
                <img className="twitter icon" src={require('./Assets/Icons/icon-twitter.png')}></img>
                <img className="pinterest icon" src={require('./Assets/Icons/icon-pinterest.png')}></img>
            </div>

        </div>
    )
}


export default Footer;