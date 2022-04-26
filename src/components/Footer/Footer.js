import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        // <div>
        //     <h1>This is footer</h1>
        // </div>
        <footer className=" dark-back">
            <div className="center-position">
                <h1> <span class="vivid-color">I'm</span> <span id="shado-color">Photographer</span></h1>
                <p className="slogan">I'm dedicated to click your memories.</p>
            </div>
            <div className="d-flex justify-content-between">
                <div className="footer-menu-container slogan">
                    
                </div>
                <div className="slogan">
                    <p>Dhakingaon, Bashaboo, Dhaka</p>
                    <p>Phone: +88019432987</p>
                    <p>E-mail: info@ameturephoto.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;