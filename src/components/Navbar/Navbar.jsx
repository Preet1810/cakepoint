import React from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
const Navbar=() => {
    const [toggleMenu, setToggleMenu]=React.useState(false);
    return (
        <nav className="app__navbar">

            <ul className="app__navbar-links">
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#cakes">Cakes</a></li>
                <div className="app__navbar-logo">
                    <img src={images.logo} alt="app__logo" />
                </div>
                <li className="p__opensans"><a href="#about">About</a></li>
                <li className="p__opensans"><a href="#contact">Contact</a></li>
            </ul>
            {/* <div className="app__navbar-login">
                <a href="#login" className="p__opensans">Log In / Registration</a>
                <div />
                <a href="/" className="p__opensans">Book Table</a>
            </div> */}
            <div className="app__navbar-smallscreen">
                <div className="app__navbar-logo">
                    <img src={images.logo} alt="app__logo" />
                </div>
                <GiHamburgerMenu className='overlay__open' color='#4A1D1F' fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu&&(
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className="app__navbar-smallscreen_links">
                            <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                            <li><a href="#cakes" onClick={() => setToggleMenu(false)}>Cakes</a></li>
                            <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                            <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact Us</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;