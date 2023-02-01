import React from 'react'
import './About.css'
import images from '../../constants/images';

const About=() => {
    return (
        <div className="app__bg app__wrapper section__padding about-section" id='about'>
            <div className="app__wrapper_img app__wrapper_img-reverse owner-img">
                <img src={images.shop} alt="chef_image" />
            </div>
            <div className="app__wrapper_info">
                <h1 className="headtext__cormorant main-head">About Us</h1>

                <div className="app__chef-content">

                    <p className="p__opensans"> Cakepoint, established in 1990, is a family-owned confectionery shop that offers a wide range of delicious food items, including cakes, pastries, and other delectable treats. With over 30 years of experience, our commitment to quality and fresh ingredients is evident in every bite. We specialize in baking custom cakes for all occasions, from birthdays to weddings, using only the finest ingredients. Whether you're in the mood for a sweet snack or looking to make a special event even sweeter, Cakepoint has something for everyone. Come visit us and taste the difference that comes from years of passion and experience in the confectionery industry.</p>
                </div>

                <div className="app__chef-sign">
                    <p>Parvinder Singh & Umneet Kaur</p>
                    <p className="p__opensans">Shop Owner</p>
                    {/* <img src={images.sign} alt="sign_image" /> */}
                </div>
            </div>
        </div>
    )
}

export default About