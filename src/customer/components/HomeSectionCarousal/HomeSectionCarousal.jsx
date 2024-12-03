import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import './HomeSectionCarousal.css';
import { Button } from '@mui/material';

const CustomNextArrow = ({ onClick, disabled }) => (
    <Button
        onClick={onClick}
        variant="contained"
        className="z-30 bg-white"
        sx={{
            position: 'absolute',
            top: '8rem',
            right: '-20px',
            transform: 'translate(50%, -50%) rotate(90deg)',
            bgcolor: 'white',
            display: disabled ? 'none' : 'block'
        }}
        aria-label="Next Slide"
    >
        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
    </Button>
);

const CustomPrevArrow = ({ onClick, disabled }) => (
    <Button
        onClick={onClick}
        variant="contained"
        className="z-30 bg-white"
        sx={{
            position: 'absolute',
            top: '8rem',
            left: '-20px',
            transform: 'translate(-50%, -50%) rotate(90deg)',
            bgcolor: 'white',
            display: disabled ? 'none' : 'block',
        }}
        aria-label="Previous Slide"
    >
        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
    </Button>
);

const HomeSectionCarousal = ({ data = [], sectionName }) => {
    
    const [visibleItems, setVisibleItems] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0); // Track current index
    const [sliderKey, setSliderKey] = useState(0);

    const sliderRef = useRef();

    const items = data?.slice(0, 10).map((item) => (
        <HomeSectionCard key={item?.id || Math.random()} product={item} />
    ));

    const updateVisibleItems = () => {
        const width = window.innerWidth;

        if (width <= 650) setVisibleItems(1);
        else if (width <= 900) setVisibleItems(2);
        else if (width <= 1150) setVisibleItems(3);
        else if (width <= 1400) setVisibleItems(4);
        else setVisibleItems(5.5);
    };
    
    
    
    const debounce = (func, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
        };
    };

    useEffect(() => {
        const debouncedUpdate = debounce(updateVisibleItems, 200);
        updateVisibleItems(); // Initial call
        window.addEventListener('resize', debouncedUpdate);
        

        return () => {
            window.removeEventListener('resize', debouncedUpdate);
        };
    }, []);

    useEffect(() => {
        setSliderKey((prevKey) => prevKey + 1); // Force reinitialization when visibleItems changes
    }, [visibleItems]);

    const settings = {
        key: sliderKey,
        speed: 500,
        slidesToShow: visibleItems,
        slidesToScroll: 1,
        infinite: false,
        nextArrow: (
            <CustomNextArrow
                onClick={() => sliderRef.current.slickNext()}
                disabled={currentIndex >= items.length - visibleItems}
            />
        ),
        prevArrow: (
            <CustomPrevArrow
                onClick={() => sliderRef.current.slickPrev()}
                disabled={currentIndex === 0}
            />
        ),
        beforeChange: (_, next) => setCurrentIndex(next),
    };

    return (
        <div className="border">
            <h2 className="text-2xl font-extrabold text-gray-800 text-center py-5">{sectionName}</h2>
            <div className="relative p-5">
                <Slider {...settings} ref={sliderRef}>
                    {items}
                </Slider>
            </div>
        </div>
    );
};

export default HomeSectionCarousal;
