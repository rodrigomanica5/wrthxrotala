import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselArray from '../data.json'

function TrendsCard() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        // <div className='card'>
            <Slider {...settings}>
                {/* <div className='card'>Hola</div> */}
                {/* <div className='card'>Chau</div> */}
                {/* <div className='card'>Chau</div> */}
            </Slider>
        // </div>
    )
}

export default TrendsCard

