import React, { useMemo } from 'react'
import './Map.css'
import images from '../../constants/images';
// import dotenv from 'dotenv';
import { GoogleMap, MarkerF, useJsApiLoader, useLoadScript } from '@react-google-maps/api';
// dotenv.config();

// const [map, setMap]=React.useState(null)

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
        height: '600px'
    };

    const center={
        lat: -3.745,
        lng: -38.523
    };
    // const center=useMemo(() => ({ lat: -3.745, lng: -38.523 }), []);

    return <GoogleMap mapContainerStyle={containerStyle}
        center={center}
        zoom={10}>
        <MarkerF position={{ lat: -3.745, lng: -38.523 }} />
    </GoogleMap>
}

const Map=() => {
    return (
        <div className="app__wrapper section__padding" id="contact">
            <div className="app__wrapper_info">
                <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
                <div className="app__wrapper-content">
                    <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
                    <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
                    <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
                    <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
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