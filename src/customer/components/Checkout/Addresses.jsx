import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import AddressCard from '../AddressCard/AddressCard';

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

const Addresses = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0); // Track current index
    const sliderRef = useRef();

    const items = [1, 1, 1, 1, 1, 1, 1, 1, 1].map((address, index) => (
        <div key={index} className="p-7 cursor-pointer hover:bg-gray-50 transition duration-200">
            <AddressCard index={index} />
        </div>
    ));

    const settings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        nextArrow: (
            <CustomNextArrow
                onClick={() => sliderRef.current.slickNext()}
                disabled={currentIndex >= items.length - 1}
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
        <Slider {...settings} ref={sliderRef}>
            {items}
        </Slider>
    );
};

export default Addresses;
