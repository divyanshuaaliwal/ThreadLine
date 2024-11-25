import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarousalData';


// const responsive = {
//     0: { items: 1 },       // 1 item on very small screens (e.g., mobile phones)
//     480: { items: 1 },     // 2 items on small screens (e.g., larger mobile devices)
//     768: { items: 1 },     // 3 items on tablets and up
//     1024: { items: 1 },    // 4 items on desktops and larger screens
// };

const MainCarousal = () => {
    
    const coursalImages = MainCarouselData.map(  (item) => 
        <img className='cursor-pointer -z-10'  src={item.image} alt='' role='presentation'/>
    );

    
    return (
        
        <AliceCarousel
            
            items={coursalImages}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite

            // responsive={responsive}
            // controlsStrategy="alternate"
            // mouseTracking
            // disableDotsControls
        />
    )
    
};


export default MainCarousal;