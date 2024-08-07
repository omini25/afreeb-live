import React, { useEffect, useState } from "react";
import Link from "next/link"

const Footer = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://api.afreebmart.com/api/categories') // replace with your API endpoint
            .then(response => response.json())
            .then(data => setCategories(data.categories)) // adjust according to the structure of your API response
            .catch(error => console.error('Error:', error));
    }, []);


    return (
        <>
            <footer className="main">
                {/*<section className="newsletter mb-15  wow animate__animated animate__fadeIn">*/}
                {/*    <div className="container">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-lg-12">*/}
                {/*                <div className="position-relative newsletter-inner">*/}
                {/*                    <div className="newsletter-content">*/}
                {/*                        <h2 className="mb-20">*/}
                {/*                            Stay home & get your daily <br />*/}
                {/*                            needs from our shop*/}
                {/*                        </h2>*/}
                {/*                        <p className="mb-45">*/}
                {/*                            Start You'r Daily Shopping with{" "}*/}
                {/*                            <span className="text-brand">*/}
                {/*                                Nest Mart*/}
                {/*                            </span>*/}
                {/*                        </p>*/}
                {/*                        <form className="form-subcriber d-flex">*/}
                {/*                            <input*/}
                {/*                                type="email"*/}
                {/*                                placeholder="Your emaill address"*/}
                {/*                            />*/}
                {/*                            <button className="btn" type="submit">*/}
                {/*                                Subscribe*/}
                {/*                            </button>*/}
                {/*                        </form>*/}
                {/*                    </div>*/}
                {/*                    <img*/}
                {/*                        src="/assets/imgs/banner/banner-9.png"*/}
                {/*                        alt="newsletter"*/}
                {/*                    />*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}

                <section className="featured  section-padding">
                    <div className="container">
                        <div className="row" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay="0"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-1.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Cost Effective
                                        </h3>
                                        {/*<p>Orders $50 or more</p>*/}
                                    </div>
                                </div>
                            </div>
                            {/*<div className="col-lg-1-5 col-md-4 col-12 col-sm-6">*/}
                            {/*    <div*/}
                            {/*        className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"*/}
                            {/*        data-wow-delay=".1s"*/}
                            {/*    >*/}
                            {/*        <div className="banner-icon">*/}
                            {/*            <img*/}
                            {/*                src="/assets/imgs/theme/icons/icon-2.svg"*/}
                            {/*                alt=""*/}
                            {/*            />*/}
                            {/*        </div>*/}
                            {/*        <div className="banner-text">*/}
                            {/*            <h3 className="icon-box-title">*/}
                            {/*                Free delivery*/}
                            {/*            </h3>*/}
                            {/*            <p>24/7 amazing services</p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".2s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-3.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Daily Mega Discounts
                                        </h3>
                                        {/*<p>When you sign up</p>*/}
                                    </div>
                                </div>
                            </div>
                            {/*<div className="col-lg-1-5 col-md-4 col-12 col-sm-6">*/}
                            {/*    <div*/}
                            {/*        className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"*/}
                            {/*        data-wow-delay=".3s"*/}
                            {/*    >*/}
                            {/*        <div className="banner-icon">*/}
                            {/*            <img*/}
                            {/*                src="/assets/imgs/theme/icons/icon-4.svg"*/}
                            {/*                alt=""*/}
                            {/*            />*/}
                            {/*        </div>*/}
                            {/*        <div className="banner-text">*/}
                            {/*            <h3 className="icon-box-title">*/}
                            {/*                Wide assortment*/}
                            {/*            </h3>*/}
                            {/*            <p>Mega Discounts</p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".4s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-5.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Affordable and Reliable Delivery Service
                                        </h3>
                                        {/*<p>Within 30 days</p>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".5s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-6.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Safe delivery
                                        </h3>
                                        <p>Within 30 days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding footer-mid" style={{backgroundColor: '#f4f6fa'}}>
                    <div className="container pt-15 pb-20">
                        <div className="row">
                            <div className="col">
                                <div
                                    className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0  wow animate__animated animate__fadeInUp"
                                    data-wow-delay="0"
                                >
                                    <div className="logo  mb-30">
                                        <Link legacyBehavior href="/"><a className="mb-15">
                                            <img
                                                src="assets/afreemart-logo.png"
                                                alt="logo"
                                            />
                                        </a>
                                        </Link>
                                        <p className="font-lg text-heading">
                                            Fresh,
                                            high-quality agricultural food items sourced directly
                                            from trusted vendors and suppliers.
                                        </p>
                                    </div>
                                    <ul className="contact-infor">
                                        {/*<li>*/}
                                        {/*    <img*/}
                                        {/*        src="/assets/imgs/theme/icons/icon-location.svg"*/}
                                        {/*        alt=""*/}
                                        {/*    />*/}
                                        {/*    <strong>Address: </strong>{" "}*/}
                                        {/*    <span>*/}
                                        {/*        5171 W Campbell Ave undefined*/}
                                        {/*        Kent, Utah 53127 United States*/}
                                        {/*    </span>*/}
                                        {/*</li>*/}
                                        {/*<li>*/}
                                        {/*    <img*/}
                                        {/*        src="/assets/imgs/theme/icons/icon-contact.svg"*/}
                                        {/*        alt=""*/}
                                        {/*    />*/}
                                        {/*    <strong>Call Us:</strong>*/}
                                        {/*    <span>(+91) - 540-025-124553</span>*/}
                                        {/*</li>*/}
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-email-2.svg"
                                                alt=""
                                            />
                                            <strong>Email:</strong>
                                            <a href="mailto:support@afreebmart.com">support@afreebmart.com</a>
                                        </li>
                                        {/*<li>*/}
                                        {/*    <img*/}
                                        {/*        src="/assets/imgs/theme/icons/icon-clock.svg"*/}
                                        {/*        alt=""*/}
                                        {/*    />*/}
                                        {/*    <strong>Hours:</strong>*/}
                                        {/*    <span>*/}
                                        {/*        10:00 - 18:00, Mon - Sat*/}
                                        {/*    </span>*/}
                                        {/*</li>*/}
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".1s"
                            >
                                <h4 className="widget-title">Company</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="/about">About Us</a>
                                    </li>
                                    <li>
                                        <a href="/delivery-options">Delivery Options</a>
                                    </li>
                                    <li>
                                        <a href="/privacy-policy">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="/terms">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="/careers">Careers</a>
                                    </li>
                                </ul>
                            </div>
                            {/*<div*/}
                            {/*    className="footer-link-widget col  wow animate__animated animate__fadeInUp"*/}
                            {/*    data-wow-delay=".2s"*/}
                            {/*>*/}
                            {/*    <h4 className="widget-title ">Categories</h4>*/}
                            {/*    <ul className="footer-list  mb-sm-5 mb-md-0">*/}
                            {/*        {categories.map((category, index) => (*/}
                            {/*            <li key={index}>*/}
                            {/*                <a href="#">{category.category_name}</a> /!* adjust according to the structure of your API response *!/*/}
                            {/*            </li>*/}
                            {/*        ))}*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".3s"
                            >
                                <h4 className="widget-title ">Support</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="/vendor-guide">Sell on Afreebmart</a>
                                    </li>
                                    <li>
                                        <a href="/logistics-partner">Logistics Partner</a>
                                    </li>
                                    <li>
                                        <a href="/compensation">Compensation</a>
                                    </li>
                                    <li>
                                        <a href="/return-policy">Return Policy</a>
                                    </li>
                                    <li>
                                        <a href="/freshness-policy">Freshness Policy</a>
                                    </li>
                                    <li>
                                        <a href="/make-a-report">Make a Report</a>
                                    </li>
                                    <li>
                                        <a href="/faq">FAQ</a>
                                    </li>
                                </ul>
                            </div>
                            {/*<div*/}
                            {/*    className="footer-link-widget col  wow animate__animated animate__fadeInUp"*/}
                            {/*    data-wow-delay=".4s"*/}
                            {/*>*/}
                            {/*    <h4 className="widget-title ">Popular</h4>*/}
                            {/*    <ul className="footer-list  mb-sm-5 mb-md-0">*/}
                            {/*        <li>*/}
                            {/*            <a href="#">Milk & Flavoured Milk</a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a href="#">Butter and Margarine</a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a href="#">Eggs Substitutes</a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a href="#">Marmalades</a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a href="#">Sour Cream and Dips</a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a href="#">Tea & Kombucha</a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a href="#">Cheese</a>*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
                            {/*<div*/}
                            {/*    className="footer-link-widget widget-install-app col  wow animate__animated animate__fadeInUp"*/}
                            {/*    data-wow-delay=".5s"*/}
                            {/*>*/}
                            {/*    <h4 className="widget-title ">Install App</h4>*/}
                            {/*    <p className="">From App Store or Google Play</p>*/}
                            {/*    <div className="download-app ">*/}
                            {/*        <a*/}
                            {/*            href="#"*/}
                            {/*            className="hover-up mb-sm-2 mb-lg-0"*/}
                            {/*        >*/}
                            {/*            <img*/}
                            {/*                className="active"*/}
                            {/*                src="/assets/imgs/theme/app-store.jpg"*/}
                            {/*                alt=""*/}
                            {/*            />*/}
                            {/*        </a>*/}
                            {/*        <a href="#" className="hover-up mb-sm-2">*/}
                            {/*            <img*/}
                            {/*                src="/assets/imgs/theme/google-play.jpg"*/}
                            {/*                alt=""*/}
                            {/*            />*/}
                            {/*        </a>*/}
                            {/*    </div>*/}
                            {/*    <p className="mb-20 ">Secured Payment Gateways</p>*/}
                            {/*    <img*/}
                            {/*        className=""*/}
                            {/*        src="/assets/imgs/theme/payment-method.png"*/}
                            {/*        alt=""*/}
                            {/*    />*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </section>
                <div
                    className="container pb-30  wow animate__animated animate__fadeInUp"
                    data-wow-delay="0" style={{backgroundColor: '#f4f6fa'}}
                >
                    <div className="row align-items-center">
                        <div className="col-12 mb-30">
                            <div className="footer-bottom"></div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <p className="font-sm mb-0">
                                &copy; 2024,{" "}
                                <strong className="text-brand">Afreebmart</strong> <br />
                                All rights reserved
                            </p>
                        </div>
                        <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
                            {/*<div className="hotline d-lg-inline-flex mr-30">*/}
                            {/*    <img*/}
                            {/*        src="/assets/imgs/theme/icons/phone-call.svg"*/}
                            {/*        alt="hotline"*/}
                            {/*    />*/}
                            {/*    <p>*/}
                            {/*        1900 - 6666<span>Working 8:00 - 22:00</span>*/}
                            {/*    </p>*/}
                            {/*</div>*/}
                            {/*<div className="hotline d-lg-inline-flex">*/}
                            {/*    <img*/}
                            {/*        src="/assets/imgs/theme/icons/phone-call.svg"*/}
                            {/*        alt="hotline"*/}
                            {/*    />*/}
                            {/*    <p>*/}
                            {/*        1900 - 8888<span>24/7 Support Center</span>*/}
                            {/*    </p>*/}
                            {/*</div>*/}
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
                            <div className="mobile-social-icon">
                                <h6>Follow Us</h6>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-facebook-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-twitter-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-instagram-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-pinterest-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-youtube-white.svg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            {/*<p className="font-sm">*/}
                            {/*    Up to 15% discount on your first subscribe*/}
                            {/*</p>*/}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
