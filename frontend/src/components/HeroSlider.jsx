import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroSlider.css';


const HeroSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        fade: true,
        arrows: false,
        adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 768,
                settings: { dots: false }
            }
        ]
    };

    const slides = [
        {
            id: 1,
            image: 'https://www.mowglistreetfood.com/wp-content/uploads/2023/01/Mowgli_Food_Intro-600x600.jpg',
            title: 'Discover New Recipes',
            text: 'Explore thousands of delicious recipes from around the world'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
            title: 'Share Your Creations',
            text: 'Your Kitchen, Your Creations, Everyones Inspiration!'
        },
        {
            id: 3,
            image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Cook Like a Pro',
            text: 'Learn professional cooking techniques from our experts'
        }
    ];

    return (
        <div className="hero-slider">
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div key={slide.id} className="slider-item">
                        <div
                            className="slider-image"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                height: '80vh', // Set height to 80% of viewport
                                width: '100vw' // Full viewport width
                            }}
                        >
                            <div className="slider-content">
                                <h2 className="slider-title">{slide.title}</h2>
                                <p className="slider-text">{slide.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HeroSlider;
