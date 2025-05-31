'use client';
import { useState, useEffect } from 'react';

const BackgroundSlider = ({images}) => {
    // const images = [
    //     '/Images/main-bg.jpg',
    //     '/Images/about-bg.png',
    // ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div
                className="absolute inset-0 bg-cover min-h-[100vh] bg-center transition-all duration-1000 ease-in-out z-0"
                style={{
                    backgroundImage: `url(${images[currentImageIndex]})`,
                    height: '100%',
                    objectFit:'cover',
                }}
            ></div>
            <div className="absolute inset-0 h-[100vh] bg-black/40 z-0"></div>
        </>
    );
};

export default BackgroundSlider;