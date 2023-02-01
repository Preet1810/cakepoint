import React, { useMemo } from 'react'
import './Map.css'
import images from '../../constants/images';
import { GoogleMap, MarkerF, useJsApiLoader, useLoadScript } from '@react-google-maps/api';


function Mapping() {
    const { isLoaded }=useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });
    if (!isLoaded) return <div>Loading ...</div>;
    return <Mapsetting />;
}

function Mapsetting() {
    const containerStyle={
        width: '600px',
        height: '400px',
    };

    const center={
        lat: 28.643566,
        lng: 77.081230
    };

    return <GoogleMap mapContainerStyle={containerStyle}
        center={center}
        zoom={20}>
        <MarkerF position={{ lat: 28.643566, lng: 77.081230 }} />
    </GoogleMap>
}

const Map=() => {
    return (
        <div className="app__wrapper section__padding" id="contact">
            <div className="app__wrapper_info">
                <h1 className="headtext__cormorant mainhead">Find Us</h1>
                <div className="app__wrapper-content">
                    <p className="p__opensans" style={{ color: '#AAAAAA' }}>481/Jg-2 J-Block, DDA Market, New Delhi, 110018</p>
                    <p className="p__cormorant mainhead" style={{ marginTop: '2rem', marginBottom: '1rem' }}>Opening Hours</p>
                    <p className="p__opensans" style={{ color: '#AAAAAA' }}>Monday - Friday: 10:00 am - 11:00 pm</p>
                    <p className="p__opensans" style={{ color: '#AAAAAA' }}>Saturday-Sunday: 11:00 am - 11:00 pm</p>
                </div>
                <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
            </div>

            <div className="app__wrapper_img">
                {/* <img src={images.shop} alt="finus_img" /> */}
                <Mapping />
            </div>
        </div>
    )
}

export default Map