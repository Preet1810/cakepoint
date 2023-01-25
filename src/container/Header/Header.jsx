import React from 'react'
// import { SubHeading } from '../../components';
import { BsWhatsapp } from 'react-icons/bs';
import images from '../../constants/images';
import './Header.css';
const Header=() =>
(
    <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
            {/* <SubHeading title="Chase the new flavour" /> */}
            <h1 className="app__header-h1">Custom cakes made with love</h1>
            <p className="p__opensans" style={{ margin: '2rem 0' }}>From birthdays to weddings, our shop offers a wide variety of pastries and cakes made with the freshest ingredients. Place your order now on Whatsapp for pickup.</p>
            <button type="button" className="custom__button">Order Now <BsWhatsapp /></button>
        </div>

        <div className="app__wrapper_img">
            <img src={images.maincake} alt="header_img" />
        </div>
    </div>
)


export default Header