import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import React, { useEffect, useState } from 'react';


SwiperCore.use([Navigation, Pagination]);

const Intro1 = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call the function initially to set the state based on the initial window size

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const bgImage1 = isMobile ? "url(assets/afreebmart-mobile-1.png)" : "url(assets/wb.png)";

    const bgImage2 = isMobile? "url(assets/afreebmart-mobile-2.png)" : "url(assets/afreebmart-slide2.png)";

    const bgImage3 = isMobile? "url(assets/afreebmart-mobile-3.png)" : "url(assets/afreebmart-slide3.png)";


    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                effect={"fade"}
                fadeEffect={{
                    crossFade: true,
                }}
                pagination={true}
                navigation={{
                    prevEl: ".custom_prev_i1",
                    nextEl: ".custom_next_i1",
                }}
                className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1"
            >
                <SwiperSlide>
                    <div
                        className="single-hero-slider rectangle single-animation-wrap"
                        style={{
                            backgroundImage: bgImage1,
                            position: 'relative' // Ensure the parent is positioned
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                width: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.3)' // Change the color and opacity as needed
                            }}
                        />
                        <div className="slider-content">
                            <h1 className="display-2 mb-40" style={{color: '#6de768'}}>
                                Your Go-To for Fast
                                <br/>
                                and Fresh Groceries
                            </h1>
                            <p className="mb-65 text-white">
                                Better ingredients, better food, and beverages, at low prices
                            </p>
                            <div className="form-subcriber d-flex justify-content-center">
                                <Link to="/products" href={`/products`} className="btn">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="single-hero-slider rectangle single-animation-wrap"
                        style={{
                            backgroundImage:
                                bgImage2,
                            position: 'relative'
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                width: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.3)' // Change the color and opacity as needed
                            }}
                        />
                        <div className="slider-content">
                            <h1 className="display-2 mb-40" style={{color: '#6de768'}}>
                                Discover the
                                <br/>
                                Best Deals
                            </h1>
                            <p className="mb-65 text-white">
                                Enjoy amazing deals on your favorite products
                            </p>
                            <div className="form-subcriber d-flex justify-content-center">
                                <Link legacyBehavior href="/products">
                                    <a style={{
                                        padding: '10px 20px',
                                        backgroundColor: '#6de669',
                                        color: '#fff',
                                        borderRadius: '5px',
                                        textDecoration: 'none'
                                    }}>
                                        Shop Now
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="single-hero-slider rectangle single-animation-wrap"
                        style={{
                            backgroundImage:
                                bgImage3,
                                position: 'relative'
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                width: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.3)' // Change the color and opacity as needed
                            }}
                        />
                        <div className="slider-content">
                            <h1 className="display-2 mb-40" style={{color: '#6de768'}}>
                                Dairy Delights
                                <br/>
                                Delivered Fast
                            </h1>
                            <p className="mb-65 text-white">
                                Enjoy amazing deals on your favorite products
                            </p>
                            <div className="form-subcriber d-flex justify-content-center">
                                <Link to="/products" href={`/products`} className="btn">
                                        Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="slider-arrow hero-slider-1-arrow">
                <span className="slider-btn slider-prev slick-arrow custom_prev_i1">
                    <i className="fi-rs-angle-left"></i>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_i1">
                    <i className="fi-rs-angle-right"></i>
                </span>
            </div>
        </>
    );
};

export default Intro1;
