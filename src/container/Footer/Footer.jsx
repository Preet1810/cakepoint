import React from 'react'
import './Footer.css'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import images from '../../constants/images';
const Footer=() => {
    return (
        <div className="app__footer section__padding" id="login">
            <div className="app__footer-links">
                <div className="app__footer-links_contact">
                    <h1 className="app__footer-headtext">Contact Us</h1>
                    <p className="p__opensans"> 481/Jg-2 J-Block, DDA Market, New Delhi, 110018</p>
                    <p className="p__opensans">+91 9319516582</p>
                    <p className="p__opensans">+91 8743980698</p>
                </div>

                <div className="app__footer-links_logo">
                    <img src={images.logo} alt="footer_logo" />
                    <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>

                </div>

                <div className="app__footer-links_work">
                    <h1 className="app__footer-headtext">Working Hours</h1>
                    <p className="p__opensans">Monday-Friday:</p>
                    <p className="p__opensans">10:00 am - 11:00 pm</p>
                    <p className="p__opensans">Saturday-Sunday:</p>
                    <p className="p__opensans">11:00 am - 11:00 pm</p>
                </div>
            </div>

            <div className="footer__copyright">
                <p className="p__opensans">2021 Gericht. All Rights reserved.</p>
                <p className="p__opensans crafter" >Web Page Crafted by <a href="https://preetpal.netlify.app" target="_blank">Preetpal Singh</a></p>
            </div>

        </div>

    )
}

export default Footer