import { connect } from "react-redux";
import Layout from "../components/layout/Layout";
import {
    clearCart,
    closeCart,
    decreaseQuantity,
    deleteFromCart,
    increaseQuantity,
    openCart
} from "../redux/action/cart";
import {assetServer} from "../assetServer";
import React, { useState, useEffect } from 'react';
import {toast} from "react-toastify";
import {useRouter} from "next/router";
import {loadStripe} from "@stripe/stripe-js";
import axios from "axios";
import {server} from "../server";
import {mainServer} from "../mainServer";
import { Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import CheckoutForm from "../components/ecommerce/CheckoutForm";
import {useMediaQuery} from "react-responsive";
import AddAddress from "../components/ecommerce/AddAddress";




const Cart = ({
    openCart,
    cartItems,
    activeCart,
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    deleteFromCart,
    clearCart,
}) => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const [isNotMobile, setIsNotMobile] = useState(false);

    useEffect(() => {
        const isNotMobile = window.matchMedia('(min-width: 768px)').matches;
        setIsNotMobile(isNotMobile);
    }, []);

    const price = () => {
        let price = 0;
        cartItems.forEach((item) => {
            price += item.price * item.quantity;
        });

        // Round the price to two decimal places
        price = Math.round(price * 100) / 100;

        return price;
    };

    const router = useRouter();
    const [defaultAddress, setDefaultAddress] = useState(null);
    const [addresses, setAddresses] = useState([]);
    const userInfo = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('userInfo')) : null;
    const userId = userInfo ? userInfo.user.id : null;
    const [isAddAddressModalOpen, setIsAddAddressModalOpen] = useState(false);

    useEffect(() => {
        const fetchAddresses = async () => {
            try {
                const response = await axios.get(`${server}/address/${userInfo.user.id}`);
                setAddresses(response.data.address);
            } catch (error) {
                console.error('Failed to fetch addresses:', error);
            }
        };
        fetchAddresses();
    }, []);

    console.log('addresses', addresses);

    useEffect(() => {
        const fetchDefaultAddress = async () => {
            try {
                const userInfo = JSON.parse(localStorage.getItem('userInfo'));
                const response = await axios.get(`${server}/address/${userInfo.user.id}`);
                const defaultAddr = response.data.address.find(addr => addr.is_default === 1);
                setDefaultAddress(defaultAddr);
            } catch (error) {
                console.error('Failed to fetch address:', error);
            }
        };
        fetchDefaultAddress();
    }, []);

    const onAddressAdded = async () => {
        try {
            const response = await axios.get(`${server}/address/${userId}`);
            setAddresses(response.data.address);
        } catch (error) {
            console.error('Failed to refresh addresses:', error);
        }
    };

    const [selectedCountry, setSelectedCountry] = useState('');

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handleAddAddress = async (event) => {
        event.preventDefault();

        const newAddress = {
            country: selectedCountry,
            address: event.target.elements.address.value,
            street: event.target.elements.street.value,
            city: event.target.elements.city.value,
            state: event.target.elements.state.value,
            zip_code: event.target.elements.zip_code.value
        };

        try {
            const response = await axios.post(`${mainServer}/address/${userInfo.user.id}`, newAddress);

            // If the request is successful, display a success toast and reload the page
            if (response.status === 201) {
                toast.success('Address added successfully.');
                window.location.reload();
            }
        } catch (error) {
            console.error('Failed to add address:', error);
        }
    };

    const [useShippingForBilling, setUseShippingForBilling] = useState(false);

    const [tip, setTip] = useState(0);

    const totalPayment = (price() + 5.99 + tip).toFixed(2);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');

        if (!isLoggedIn) {
            router.push('/page-login');
            toast('You need to login to access this page!')
        }
    }, []);

    const stripePromise = loadStripe('pk_test_51K4bVzCT7v0Ax3ZCQUKpDk4gTPZ6UuWcJlMpNULOujrGRhsEL4IPAdeZ7KwDXIFEcJ5sLTxm3r2DMCUaQYWbLl2W00W13HDVPl');

    const handleCheckoutSession = async (event) => {
        try {
            event.preventDefault();

            const productDetails = cartItems.map((item) => ({
                name: item.product_name,
                totalPrice: item.price,
                quantity: item.quantity,
                image: item.image,
                tip: item.tip
            }));

            const userInfo = JSON.parse(localStorage.getItem('userInfo'));

            console.log(productDetails)

            const stripe = await stripePromise;

            const response = await axios.post(`${server}/create-checkout-session`, {
                productDetails,
                user_id: userInfo.user.id,
                total: totalPayment, // Pass the total payment to the server
                tip: tip, // Pass the tip to the server
            });

            const { id: sessionId } = response.data;

            if (sessionId) {
                const result = await stripe.redirectToCheckout({
                    sessionId,
                });
            } else {
                toast.error('Failed to create a checkout session.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            toast.error('An error occurred during the payment process.');
        }
    };

    const refreshAddresses = async () => {
        try {
            const response = await axios.get(`${server}/address/${userInfo.user.id}`);
            setAddresses(response.data.address);
        } catch (error) {
            console.error('Failed to refresh addresses:', error);
        }
    };

    return (
        <>
            <Layout parent="Home" sub="Shop" subChild="Checkout">
                <section
                    className={`mt-50 mb-50 ${isNotMobile ? 'style={{paddingLeft: "70px", paddingRight: "70px"}}' : ''}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mb-40">
                                <h1 className="heading-2 mb-10">Checkout</h1>
                                <div className="d-flex justify-content-between">
                                    <h6 className="text-body">
                                        There are{" "}
                                        <span className="text-brand">{cartItems.length}</span>{" "}
                                        products in your cart
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="row mb-50">

                                    <div className="col-lg-8">
                                        <form
                                            method="post"
                                            className="apply-coupon"
                                        >
                                            <input
                                                type="text"
                                                placeholder="Enter Coupon Code..."
                                            />
                                            <button
                                                className="btn  btn-md"
                                                name="login"
                                            >
                                                Apply Coupon
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="mb-25">
                                    <h4>Shipping Details</h4>
                                </div>
                                <select>
                                    <option value="">Select Address</option>
                                    {addresses.map((address, index) => (
                                        <option key={index} value={address.id}>
                                            {address.street}, {address.city}, {address.state}, {address.country}, {address.zip_code}
                                        </option>
                                    ))}
                                </select>
                                {/*<button onClick={() => setIsAddAddressModalOpen(true)}>Add Address</button>*/}
                                {/*{isAddAddressModalOpen && (*/}
                                {/*    <AddAddress onClose={() => setIsAddAddressModalOpen(false)} />*/}
                                {/*)}*/}
                                <AddAddress userId={userId} onAddressAdded={onAddressAdded} />

                                <div className="mb-25 mt-30">
                                    <h4>Billing Details</h4>
                                </div>
                                {addresses ? (
                                    <div>
                                        <div className="chek-form">
                                            <div className="custome-checkbox pb-15">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="checkbox"
                                                    id="differentaddress"
                                                    onChange={() => setUseShippingForBilling(!useShippingForBilling)}
                                                />
                                                <label
                                                    className="form-check-label label_info"
                                                    data-bs-toggle="collapse"
                                                    data-target="#collapseAddress"
                                                    href="#collapseAddress"
                                                    aria-controls="collapseAddress"
                                                    htmlFor="differentaddress"
                                                >
                                                <span>
                                                    Use Shipping Address for Billing
                                                </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                ) : null}

                                {!useShippingForBilling && (
                                    <form method="post">
                                        <div className="form-group">
                                            <div className="custom_select">
                                                <select className="form-control select-active">
                                                    <option value="">Select an option...</option>
                                                    <option value="US">USA (US)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="address" required="" placeholder="Address *"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="billing_address2" required=""
                                                   placeholder="Address line2"/>
                                        </div>
                                        <div className="form-group">
                                            <input required="" type="text" name="city" placeholder="City / Town *"/>
                                        </div>
                                        <div className="form-group">
                                            <input required="" type="text" name="state"
                                                   placeholder="State / County *"/>
                                        </div>
                                        <div className="form-group">
                                            <input required="" type="text" name="zipcode"
                                                   placeholder="Postcode / ZIP *"/>
                                        </div>
                                    </form>
                                )}
                            </div>
                            <div className="col-lg-5">
                                <div className="border p-40 cart-totals ml-30 mb-50">
                                    <div className="d-flex align-items-end justify-content-between mb-30">
                                        <h4>Your Order</h4>
                                        <h6 className="text-muted">Subtotal</h6>
                                    </div>
                                    <div className="divider-2 mb-30"></div>
                                    <div className="table-responsive order_table">
                                        {cartItems && cartItems.length <= 0 && "No Products"}
                                        <table
                                            className={
                                                cartItems && cartItems.length > 0
                                                    ? "table no-border"
                                                    : "d-none"
                                            }
                                        >
                                            <tbody>
                                            {cartItems && cartItems.map((item, i) => (
                                                <tr key={i}
                                                    style={isMobile ? {display: 'flex', flexDirection: 'row'} : {}}
                                                >
                                                    <td className="">
                                                        <img
                                                            src={`${assetServer}/images/products/${item.image}`}
                                                            alt="#"
                                                            style={
                                                                isMobile ?
                                                                    {
                                                                        width: '200%',
                                                                        height: 'auto'
                                                                    }
                                                                    : {}
                                                            }
                                                        />
                                                    </td>
                                                    <td>
                                                        <h6 className="w-160 mb-5">
                                                            <a>
                                                                {
                                                                    item.product_name
                                                                }
                                                            </a>
                                                        </h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="text-muted pl-20 pr-20">
                                                            x{" "}
                                                            {
                                                                item.quantity
                                                            }
                                                        </h6>
                                                    </td>
                                                    <td>
                                                        <h4 className="text-brand" style={{
                                                            display: 'none',
                                                            '@media (min-width: 768px)': {display: 'block'}
                                                        }}>
                                                            $
                                                            {(item.quantity * item.price).toFixed(2)}
                                                        </h4>
                                                        <h5 className="text-brand" style={{
                                                            display: 'block',
                                                            '@media (min-width: 768px)': {display: 'none'}
                                                        }}>
                                                            $
                                                            {(item.quantity * item.price).toFixed(2)}
                                                        </h5>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="bt-1 border-color-1 mt-30 mb-30"></div>

                                    <div className="form-group">
                                        <label htmlFor="tip">Delivery Tip:</label>
                                        <input
                                            type="number"
                                            id="tip"
                                            name="tip"
                                            min="0"
                                            step="0.01"
                                            value={tip}
                                            onChange={e => setTip(parseFloat(e.target.value))}
                                        />
                                    </div>

                                    <div className="payment_method">
                                        <div className="mb-25">
                                            <h5>Shipping: $5.99</h5>
                                        </div>
                                        <div className="mb-25">
                                            <h5>Total Payment: ${((price() + 5.99 + (isNaN(tip) ? 0 : tip)).toFixed(2))}</h5>
                                        </div>
                                    </div>
                                    <button
                                        className="btn btn-fill-out btn-block mt-30"
                                        onClick={handleCheckoutSession}
                                    >
                                        Place Order
                                    </button>

                                    {/*<Elements stripe={stripePromise}>*/}
                                    {/*    <CheckoutForm cartItems={cartItems} />*/}
                                    {/*</Elements>*/}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

const mapStateToProps = (state) => ({
    cartItems: state.cart,
    activeCart: state.counter,
});

const mapDispatchToProps = {
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    deleteFromCart,
    openCart,
    clearCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
