import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from "../components/layout/Layout";
import { connect } from 'react-redux';
import { clearCart } from '../redux/action/cart';
import { FaRegSmileBeam } from 'react-icons/fa';
import {useNavigate} from "react-router-dom";

const OrderSuccessful = ({ clearCart }) => {
    const router = useRouter();
    const { order_id, session_id: sessionId } = router.query;

    // const navigate = useNavigate();
    //
    // useEffect(() => {
    //     const urlParams = new URLSearchParams(window.location.search);
    //     const sessionId = urlParams.get('session_id');
    //
    //     if (!sessionId) {
    //         // Redirect to home if accessed directly without a session ID
    //         navigate('/');
    //     }
    // }, [navigate]);

    useEffect(() => {
        if (sessionId) {
            clearCart(); // Clear the cart if sessionId exists
        }
    }, [sessionId, clearCart]);

    return (
        <Layout>
            <div style={{textAlign: 'center', marginTop: '50px', marginBottom: '50px'}}>
                <h1>Order Successful <FaRegSmileBeam /></h1>
                <p>Thank you for your purchase! <FaRegSmileBeam /></p>
                <p>Your order ID is: {order_id}</p>
                {sessionId && <p>Your session ID is: {sessionId}</p>}
            </div>
        </Layout>
    );
};

const mapDispatchToProps = {
    clearCart,
};

export default connect(null, mapDispatchToProps)(OrderSuccessful);