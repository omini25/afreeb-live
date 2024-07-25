import React, {useEffect, useState} from "react";
import axios from "axios";
import {server} from "../../mainServer";
import StarRatings from "react-star-ratings/build/star-ratings";
import {useRouter} from "next/router";
import {toast} from "react-toastify";
import { createChat } from "../../api";

const ProductTab = ({product}) => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const savedIsLoggedIn = localStorage.getItem('isLoggedIn');
        return savedIsLoggedIn ? JSON.parse(savedIsLoggedIn) : false;
    });
    const router = useRouter();

    const [userInfo, setUserInfo] = useState({});
    const userId = userInfo.user ? userInfo.user.id : null;

    useEffect(() => {
        const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (storedUserInfo) {
            setUserInfo(storedUserInfo);
        }
    }, []);


    // const [averageRating, setAverageRating] = useState(0);

    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    const [averageRatings, setAverageRatings] = useState(0);

    const [commentData, setCommentData] = useState(null);

    let averageRating = 0;
    if (commentData) {
        averageRating = commentData.reduce((acc, comment) => acc + comment.rating, 0) / commentData.length;
    } else {
        console.log('commentData is null');
    }

    const [singleRating, setSingleRating] = useState(0);

    useEffect(() => {
        const fetchCommentData = async () => {
            try {
                const response = await axios.get(`${server}/review/${product.id}`);
                const data = response.data.reviews;
                setCommentData(data);

                // Calculate average rating
                const totalRating = data.reduce((acc, comment) => acc + comment.rating, 0);
                const averageRating = totalRating / data.length;
                const singleRating = data.map((comment) => comment.rating);

                // Update averageRatings state
                setAverageRatings(averageRating);
            } catch (error) {
                console.error('Error fetching comment data:', error);
            }
        };

        fetchCommentData();
    }, []);

    let ratingCounts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
    let totalReviews = 0;

    if (commentData) {
        commentData.forEach(comment => {
            ratingCounts[comment.rating]++;
            totalReviews++;
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const comment = event.target.elements.comment.value;
        const rating = averageRatings.toString();

        setAverageRatings(averageRating); // Use averageRating instead of newRating


        // Retrieve product_id and vendor_id from the product object
        const product_id = product.id;
        const vendor_id = product.vendor_id;

        const formData = {
            comment,
            rating,
            product_id,
            vendor_id
        };

        try {
            const response = await axios.post(`${server}/users/reviews/${userId}`, formData);

            toast('Reviews submitted successfully')
            // Clear the form
            event.target.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };


    const handleSendMessageToVendor = async () => {
        const subject = `Inquiry about ${product.product_name}`;
        const message = "I'm interested in this product.";
        const participants = [product.vendor_id]; // Assuming product.vendor_id is the vendor's ID

        try {
            const response = await createChat(subject, message, participants);
            console.log("Message sent successfully:", response)
            toast('Message sent successfully, you would be able to chat when the vendor accepts your message')
            // Optionally, show a success message to the user
        } catch (error) {
            console.error("Error sending message to vendor:", error);
            // Optionally, show an error message to the user
        }
    };

    return (
        <div className="product-info">
            <div className="tab-style3">
                <ul className="nav nav-tabs text-uppercase">
                    <li className="nav-item">
                        <a className={activeIndex === 1 ? "nav-link active" : "nav-link"} id="Description-tab" data-bs-toggle="tab" onClick={() => handleOnClick(1)}>
                            Description
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={activeIndex === 2 ? "nav-link active" : "nav-link"} id="Additional-info-tab" data-bs-toggle="tab" onClick={() => handleOnClick(2)}>
                            Additional info
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={activeIndex === 3 ? "nav-link active" : "nav-link"} id="Reviews-tab" data-bs-toggle="tab" onClick={() => handleOnClick(3)}>
                            Vendor
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={activeIndex === 4 ? "nav-link active" : "nav-link"} id="Reviews-tab" data-bs-toggle="tab" onClick={() => handleOnClick(4)}>
                            Reviews ({commentData ? commentData.length : 0})
                        </a>
                    </li>
                </ul>
                <div className="tab-content shop_info_tab entry-main-content">
                    <div className={activeIndex === 1 ? "tab-pane fade show active" : "tab-pane fade"} id="Description">
                        <div className="">
                            <p>{product.description}</p>
                            {/*<ul className="product-more-infor mt-30">*/}
                            {/*    <li>*/}
                            {/*        <span>Type Of Packing</span> Bottle*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <span>Color</span> Green, Pink, Powder Blue, Purple*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <span>Quantity Per Case</span> 100ml*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <span>Ethyl Alcohol</span> 70%*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <span>Piece In One</span> Carton*/}
                            {/*    </li>*/}
                            {/*</ul>*/}
                            <hr className="wp-block-separator is-style-dots" />
                            <h4 className="mt-30">Packaging & Delivery</h4>
                            <hr className="wp-block-separator is-style-wide" />
                            <p>We ensure your fresh food items arrive in perfect condition using eco-friendly packaging materials:</p>
                            <p>* Temperature Control: Insulated boxes and ice packs keep perishables fresh.
                                <br />* Secure Wrapping: Items are carefully wrapped to prevent damage.
                                <br />* Sustainable Materials: Our packaging is recyclable and biodegradable.
                            </p>
                            <p>Learn more about our delivery options <a>here</a></p>
                        </div>
                    </div>
                    <div className={activeIndex === 2 ? "tab-pane fade show active" : "tab-pane fade"} id="Additional-info">
                        <table className="font-md">
                            <tbody>
                                <tr className="stand-up">
                                    <th>SKU</th>
                                    <td>
                                        <p>{product.sku}</p>
                                    </td>
                                </tr>
                                <tr className="folded-wo-wheels">
                                    <th>Category</th>
                                    <td>
                                        <p>{product.category}</p>
                                    </td>
                                </tr>
                                <tr className="folded-w-wheels">
                                    <th>Sub-Category</th>
                                    <td>
                                        <p>{product.subcategory}</p>
                                    </td>
                                </tr>
                                <tr className="door-pass-through">
                                    <th>Tags</th>
                                    <td>
                                        <p>{product.tags}</p>
                                    </td>
                                </tr>
                                <tr className="frame">
                                    <th>Unit</th>
                                    <td>
                                        <p>{product.unit}</p>
                                    </td>
                                </tr>
                                <tr className="weight-wo-wheels">
                                    <th>Weight</th>
                                    <td>
                                        <p>{product.shipping_weight}</p>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className={activeIndex === 3 ? "tab-pane fade show active" : "tab-pane fade"} id="Reviews">
                        <div className="vendor-logo d-flex mb-30">
                            {/*<img src="/assets/imgs/vendor/vendor-18.svg" alt="" />*/}
                            <div className="vendor-name ml-15">
                                <h6>
                                    <a href={`/vendor/${product.vendor_id}`}>{product.store_name}</a>
                                </h6>
                                {/*<div className=" text-end">*/}
                                {/*    <div className="product-rate d-inline-block">*/}
                                {/*        <StarRatings*/}
                                {/*            rating={averageRating}*/}
                                {/*            numberOfStars={5}*/}
                                {/*            starDimension="20px"*/}
                                {/*            starSpacing="2px"*/}
                                {/*            starRatedColor="gold"*/}
                                {/*        />*/}
                                {/*    </div>*/}
                                {/*    /!*<span className="font-small ml-5 text-muted"> (32 reviews)</span>*!/*/}
                                {/*</div>*/}

                                <div className="form-group">
                                    <button className="button button-contactForm" onClick={handleSendMessageToVendor}>
                                        Message Vendor
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/*<ul className="contact-infor mb-50">*/}
                        {/*    <li>*/}
                        {/*        <img src="/assets/imgs/theme/icons/icon-location.svg" alt="" />*/}
                        {/*        <strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span>*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        <img src="/assets/imgs/theme/icons/icon-contact.svg" alt="" />*/}
                        {/*        <strong>Contact Seller:</strong>*/}
                        {/*        <span>(+91) - 540-025-553</span>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                        {/*<div className="d-flex mb-55">*/}
                        {/*    <div className="mr-30">*/}
                        {/*        <p className="text-brand font-xs">Rating</p>*/}
                        {/*        <h4 className="mb-0">92%</h4>*/}
                        {/*    </div>*/}
                        {/*    <div className="mr-30">*/}
                        {/*        <p className="text-brand font-xs">Ship on time</p>*/}
                        {/*        <h4 className="mb-0">100%</h4>*/}
                        {/*    </div>*/}
                        {/*    <div>*/}
                        {/*        <p className="text-brand font-xs">Chat response</p>*/}
                        {/*        <h4 className="mb-0">89%</h4>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<p>Noodles & Company is an American fast-casual restaurant that offers international and American noodle dishes and pasta in addition to soups and salads. Noodles & Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield, Colorado. The company went public in 2013 and recorded a $457 million revenue in 2017.In late 2018, there were 460 Noodles & Company locations across 29 states and Washington, D.C.</p>*/}
                    </div>
                    <div className={activeIndex === 4 ? "tab-pane fade show active" : "tab-pane fade"} id="Reviews">
                        <div className="comments-area">
                            <div className="row">
                                <div className="comment-form col-lg-8">
                                    <h4 className="mb-15">Add a review</h4>

                                    <div className="row">
                                        <div className="comment-form col-lg-8">
                                            {isLoggedIn ? (
                                                <form className="form-contact comment_form" onSubmit={handleSubmit}
                                                      id="commentForm">
                                                    <StarRatings
                                                        rating={averageRatings} // Use averageRatings instead of averageRating
                                                        changeRating={(newRating) => {
                                                            setAverageRatings(newRating);
                                                        }}
                                                        numberOfStars={5}
                                                        starDimension="20px"
                                                        starSpacing="2px"
                                                        starRatedColor="gold"
                                                    />
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                            <textarea className="form-control w-100" name="comment"
                                                                      id="comment" cols="30" rows="9"
                                                                      placeholder="Write Comment">
                                                            </textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <button type="submit" className="button button-contactForm">
                                                            Submit Review
                                                        </button>
                                                    </div>
                                                </form>
                                            ) : (
                                                <div className="overlay">
                                                    <button
                                                        className="button button-contactForm"
                                                        onClick={() => {
                                                            router.push('/login'); // replace '/login' with your actual login route
                                                        }}
                                                    >
                                                        Please login to leave a review
                                                    </button>
                                                </div>

                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <h4 className="mb-30">Customer reviews</h4>
                                    <div className="d-flex mb-30">
                                        <div className=" d-inline-block mr-15">
                                            <StarRatings
                                                rating={averageRating}
                                                numberOfStars={5}
                                                starDimension="20px"
                                                starSpacing="2px"
                                                starRatedColor="gold"
                                            />
                                        </div>
                                        <h6>{averageRating.toFixed(1)} out of 5</h6>
                                    </div>
                                    {[1, 2, 3, 4, 5].map(star => {
                                        const percentage = totalReviews ? (ratingCounts[star] / totalReviews) * 100 : 0;
                                        return (
                                            <div className="progress" key={star}>
                                                <span>{star} star</span>
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{
                                                        width: `${percentage}%`
                                                    }}
                                                    aria-valuenow={percentage}
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                >
                                                    {`${percentage.toFixed(1)}%`}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <h4 className="mb-30">Reviews</h4>
                            <div className="comment-list">
                                {commentData && commentData.map((comment, index) => (
                                    <div key={index} className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb text-center">
                                                <img src={comment.image} alt=""/>
                                                <h6>
                                                    <a href="#">{comment.user_name}</a>
                                                </h6>
                                                {/*<p className="font-xs mr-30">{new Date(comment.created_at).toLocaleDateString()}</p>*/}
                                            </div>
                                            <div className="desc ml-25">
                                            <div className="d-inline-block ml-5">
                                               <StarRatings
                                                    rating={comment.rating} // Use comment.rating instead of singleRating
                                                    numberOfStars={5}
                                                    starDimension="20px"
                                                    starSpacing="2px"
                                                    starRatedColor="gold"
                                                />
                                                </div>
                                                <p>{comment.comment}</p>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <p className="font-xs mr-30">{new Date(comment.created_at).toLocaleDateString()}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductTab;
