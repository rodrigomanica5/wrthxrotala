import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function TrendsCard() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/assets/data/data.json")
            .then((data) => data.json())
            .then((array) => setData(array.map((element, index) => {
                return <div className='card trendsCard' key={index}>
                    <img src={element.pictureURL} alt={element.name} />
                    <h4>{element.name}</h4>
                    <p>{element.description}</p>
                </div>
            })))
}, [])

const responsive = {
    0: {
        items: 1,
    },
    568: {
        items: 2,
    }
};

return (
    <AliceCarousel
        items={data}
        responsive={responsive}
        autoPlayInterval={15000}
        autoPlayDirection="rtl"
        autoPlay={true}
        fadeOutAnimation={true}
        mouseTrackingEnabled={true}
    />
);
}

export default TrendsCard;

