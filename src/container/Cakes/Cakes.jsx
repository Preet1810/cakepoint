import React from 'react'
import './Cakes.css'
import data from '../../constants/data'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
const Cakes=() => {

    const scrollRef=React.useRef(null);

    const scroll=(direction) => {
        const { current }=scrollRef;

        if (direction==='left') {
            current.scrollLeft-=300;
        } else {
            current.scrollLeft+=300;
        }
    };
    return (
        <div className="app__gallery flex__center" id='cakes'>
            <div className="app__gallery-content">
                <h1 className="headtext__cormorant">Popular Choices</h1>
                <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Indulge in the heavenly taste of our freshly baked, handcrafted pastries and cakes, made with passion and love. Order now for any celebration.</p>
                <button type="button" className="custom__button">Order Now <BsWhatsapp /></button>
            </div>
            <div className="app__gallery-images">
                <div className="app__gallery-images_container" ref={scrollRef}>
                    {data.galary.map((image, index) => (
                        <div className="app__gallery-images_card flex__center" key={`gallery_image-${index+1}`}>
                            <img src={image.imgUrl} alt="gallery_image" />
                            <p className='gallery__image-icon'>{image.title}</p>
                        </div>
                    ))}
                </div>
                <div className="app__gallery-images_arrows">
                    <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
                    <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
                </div>
            </div>
        </div>
    )
}

export default Cakes