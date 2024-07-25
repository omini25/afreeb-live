import Layout from "../components/layout/Layout";
import Link from "next/link"
import React, { useState, useEffect } from "react";
import {useDispatch} from "react-redux";
import {server} from "../mainServer";
import axios from "axios";
import {toast} from "react-toastify";
import { useRouter } from "next/router";
import {Modal} from "react-responsive-modal";
import AddAddress from "../components/ecommerce/AddAddress";
import CreateGroup from "../components/ecommerce/CreateGroup";
import JoinGroup from "../components/ecommerce/JoinGroup";
import EditAddress from "../components/ecommerce/EditAddress";
import {useMediaQuery} from "react-responsive";
import { jsPDF } from "jspdf";
import { getChats, getMessages, sendMessage } from "../api";

function Account() {
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(1);
    const [userInfo, setUserInfo] = useState({});
    const dispatch = useDispatch();
    const userId = userInfo.user ? userInfo.user.id : null;
    const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);
    const [showJoinGroupModal, setShowJoinGroupModal] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const [payments, setPayments] = useState([]);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentAddress, setCurrentAddress] = useState(null);

    const [isNavVisible, setIsNavVisible] = useState(false);
    const [navClicked, setNavClicked] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
        setNavClicked(false); // Reset navClicked state
    };

    const handleNavClick = (index) => {
        setNavClicked(true);
        handleOnClick(index);
    };

    const openModal = (addr) => {
        setCurrentAddress(addr);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');

        if (!isLoggedIn) {
            router.push('/login');
            toast('You need to login to access this page!')
        }
    }, []);

    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            // Remove userInfo and isLoggedIn from localStorage
            localStorage.removeItem('userInfo');
            localStorage.removeItem('isLoggedIn');
        }

        // Dispatch logout action to update the state
        dispatch({ type: 'USER_LOGOUT' });

        // Set shouldRedirect to true
        setShouldRedirect(true);
        toast('Logout successful!')
    };


    useEffect(() => {
        if (shouldRedirect) {
            // Redirect to home page
            router.push('/');
            // Reset shouldRedirect
            setShouldRedirect(false);
        }
    }, [shouldRedirect]);

    useEffect(() => {
        const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (storedUserInfo) {
            setUserInfo(storedUserInfo);
        }
    }, []);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (storedUserInfo) {
            setUserInfo(storedUserInfo);
            fetchOrders(storedUserInfo.user.id);
        }
    }, []);


    const fetchOrders = async (userId) => {
        try {
            const response = await axios.get(`${server}/order/${userId}`);
            setOrders(response.data);
        } catch (error) {
            console.error('Failed to fetch orders:', error);
        }
    };

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };

    //recipt dowmloading
    const generateReceipt = (paymentDetails) => {
        const doc = new jsPDF();

        // Set up document
        doc.setFontSize(16);
        doc.setFont("helvetica", "bold");
        doc.text("Afreebmart Payment Receipt", 105, 20, null, null, "center");

        // Add logo (if available)
        // doc.addImage(logoData, 'PNG', 10, 10, 50, 20);

        // Reset font for the content
        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");

        // Add company details
        doc.text("Afreebmart Inc.", 10, 40);
        // doc.text("123 E-commerce Street", 10, 45);
        // doc.text("Online City, Web 12345", 10, 50);
        doc.text("support@afreebmart.com", 10, 55);

        // Add customer details
        doc.text(`Customer: ${userInfo.user ? userInfo.user.name : ''}`, 10, 70);
        doc.text(`Email: ${userInfo.user ? userInfo.user.email : ''}`, 10, 75);

        // Create table
        const tableStart = 90;
        const lineHeight = 10;
        doc.line(10, tableStart, 200, tableStart); // Top line

        // Table headers
        doc.setFont("helvetica", "bold");
        doc.text("Products", 15, tableStart + 7);
        doc.text("Quantity", 100, tableStart + 7);
        doc.text("Unit Price", 130, tableStart + 7);
        doc.text("Total", 170, tableStart + 7);

        doc.line(10, tableStart + lineHeight, 200, tableStart + lineHeight);

        // Reset font
        doc.setFont("helvetica", "normal");

        // Table content
        let yPos = tableStart + lineHeight + 7;
        doc.text(paymentDetails.product.product_name, 15, yPos);
        doc.text(paymentDetails.product.quantity?.toString() ?? '1', 105, yPos);
        doc.text(`$${(Number(paymentDetails.product.price) || 0).toFixed(2)}`, 135, yPos);
        doc.text(`$${(Number(paymentDetails.total_cost) || 0).toFixed(2)}`, 175, yPos);

        yPos += lineHeight;
        doc.line(10, yPos, 200, yPos);

        // Totals
        yPos += lineHeight;
        doc.text("Subtotal:", 130, yPos);
        doc.text(`$${(Number(paymentDetails.total_cost) || 0).toFixed(2)}`, 175, yPos);

        yPos += lineHeight;
        doc.text("Tax:", 130, yPos);
        doc.text(`$${(paymentDetails.tax || 0).toFixed(2)}`, 175, yPos);

        yPos += lineHeight;
        doc.setFont("helvetica", "bold");
        doc.text("Total:", 130, yPos);
        doc.text(`$${(Number(paymentDetails.total_cost) + Number(paymentDetails.tax || 0)).toFixed(2)}`, 175, yPos);

        // Additional details
        yPos += lineHeight * 2;
        doc.setFont("helvetica", "normal");
        doc.text(`Payment ID: ${paymentDetails.id}`, 15, yPos);
        yPos += lineHeight;
        doc.text(`Store: ${paymentDetails.store_name}`, 15, yPos);
        yPos += lineHeight;
        doc.text(`Date: ${new Date(paymentDetails.created_at).toLocaleString()}`, 15, yPos);
        yPos += lineHeight;
        doc.text(`Status: ${paymentDetails.payment_status}`, 15, yPos);

        // Footer
        doc.setFontSize(8);
        doc.text("Thank you for your purchase!", 105, 280, null, null, "center");

        // Save the PDF
        const fileName = `afreebmart_receipt_${paymentDetails.id}.pdf`;
        doc.save(fileName);
    };

    const [address, setAddress] = useState('');


    useEffect(() => {
        const fetchAddress = async () => {
            if (userInfo.user) {
                try {
                    const response = await axios.get(`${server}/address/${userInfo.user.id}`);
                    setAddress(response.data.address);
                } catch (error) {
                    console.error('Failed to fetch address:', error);
                }
            }
        };
        fetchAddress();
    }, [userInfo]);

    const onAddressAdded = async () => {
        try {
            const response = await axios.get(`${server}/address/${userId}`);
            setAddress(response.data.address);
        } catch (error) {
            console.error('Failed to refresh addresses:', error);
        }
    };



    const handleSubmit = async (event) => {
        event.preventDefault();

        const name = event.target.elements.name.value;
        const phone = event.target.elements.phone.value;
        const email = event.target.elements.email.value;
        const newPassword = event.target.elements.npassword.value;
        const confirmPassword = event.target.elements.cpassword.value;

        // Create a new object
        const data = {};

        // Add only non-empty fields to the object
        if (name) data.name = name;
        if (phone) data.phone = phone;
        if (email) data.email = email;
        if (newPassword) data.newPassword = newPassword;
        if (confirmPassword) data.confirmPassword = confirmPassword;

        try {
            const response = await axios.put(`${server}/user/${userId}`, data);
            console.log(response.data);

            // Update userInfo state with the new data
            setUserInfo(prevState => ({
                ...prevState,
                user: {
                    ...prevState.user,
                    ...data
                }
            }));

            // Update userInfo in localStorage
            const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
            localStorage.setItem('userInfo', JSON.stringify({
                ...storedUserInfo,
                user: {
                    ...storedUserInfo.user,
                    ...data
                }
            }));

            // Show success toast
            toast.success('Profile updated successfully');

            // Refresh the page
            router.reload();

        } catch (error) {
            console.error('Failed to submit form:', error);
        }
    };

    const [currentMessage, setCurrentMessage] = useState('');
    const [chats, setChats] = useState(['Chat', 'Chat', 'Chat']); // Sample chat room names
    const [currentChat, setCurrentChat] = useState(''); // Current chat room

    const handleInputChange = (event) => {
        setCurrentMessage(event.target.value);
    };


    //payments use effect
    useEffect(() => {
        const fetchPayments = async () => {
            // Ensure userInfo and userInfo.user are defined before proceeding
            if (userInfo && userInfo.user && userInfo.user.id) {
                try {
                    const response = await axios.get(`${server}/user/payments/${userInfo.user.id}`);
                    setPayments(response.data.flat());
                } catch (error) {
                    console.error('Failed to fetch payments:', error);
                }
            } else {
                console.log('User info or user ID is undefined.');
            }
        };

        fetchPayments();
    }, [userInfo]); // Dependency array includes userInfo to re-run useEffect when userInfo changes



    const fetchAddress = async () => {
        if (userInfo.user) {
            try {
                const response = await axios.get(`${server}/address/${userInfo.user.id}`);
                setAddress(response.data.address);
            } catch (error) {
                console.error('Failed to fetch address:', error);
            }
        }
    };

    const refreshAddresses = async () => {
        try {
            const response = await axios.get(`${server}/address/${userInfo.user.id}`);
            setAddress(response.data.address);
        } catch (error) {
            console.error('Failed to refresh addresses:', error);
        }
    };

    const deleteAddress = async (addressId) => {
        try {
            await axios.delete(`${server}/user/${userInfo.user.id}/address/${addressId}`);
            toast.success('Address deleted successfully');
            // Refresh addresses after deletion
            fetchAddress();
        } catch (error) {
            console.error('Failed to delete address:', error);
        }
    };


    const [groupDetails, setGroupDetails] = useState([]);

    useEffect(() => {
        const fetchGroupDetails = async () => {
            if (userInfo.user) {
                try {
                    const response = await axios.get(`${server}/user/group/${userInfo.user.id}`);
                    setGroupDetails(response.data.groups);
                } catch (error) {
                    console.error('Failed to fetch group details:', error);
                }
            }
        };

        fetchGroupDetails();
    }, [userInfo]);

    const deleteGroup = async (groupId) => {
        try {
            await axios.delete(`${server}/user/group/${groupId}`);
            toast.success('Group deleted successfully');
            // Refresh group details after deletion
            fetchGroupDetails();
        } catch (error) {
            console.error('Failed to delete group:', error);
            toast.error('Failed to delete group');
        }
    };

    //Chats
    const [selectedChat, setSelectedChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [newChatUserId, setNewChatUserId] = useState('');


    useEffect(() => {
        fetchChats();
    }, []);

    const fetchChats = async () => {
        try {
            const response = await getChats();
            setChats(response.data.threads);
        } catch (error) {
            console.error('Error fetching chats:', error);
        }
    };

    const fetchMessages = async (threadId) => {
        try {
            const response = await getMessages(threadId);
            setMessages(response.data.messages);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    const handleChatSelect = (chat) => {
        setSelectedChat(chat);
        fetchMessages(chat.id);
    };

    const handleSendMessage = async () => {
        try {
            await sendMessage(selectedChat.id, newMessage);
            setNewMessage('');
            fetchMessages(selectedChat.id);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="Account">
                <div className="page-content pt-50 pb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 m-auto">
                                <div className="row">
                                    <div className="col-md-3">
                                        {isMobile ? (
                                            <>
                                                <button
                                                    className="btn btn-sm font-weight-bold text-white mt-5 border-radius-5 btn-shadow-brand hover-up"
                                                    onClick={toggleNav}>Account Menu
                                                </button>
                                                {isMobile && isNavVisible && !navClicked ? (
                                                    <div className="dashboard-menu">
                                                        <ul className="nav flex-column" role="tablist">
                                                            <li className="nav-item">
                                                                <a className={activeIndex === 1 ? "nav-link active" : "nav-link"}
                                                                   onClick={() => handleNavClick(1)}><i
                                                                    className="fi-rs-settings-sliders mr-10"></i>Dashboard</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className={activeIndex === 2 ? "nav-link active" : "nav-link"}
                                                                   onClick={() => handleNavClick(2)}><i
                                                                    className="fi-rs-shopping-bag mr-10"></i>Orders</a>
                                                            </li>

                                                            <li className="nav-item">
                                                                <a className={activeIndex === 6 ? "nav-link active" : "nav-link"}
                                                                   onClick={() => handleNavClick(6)}><i
                                                                    className="fi-rs-shopping-bag mr-10"></i>Bulk Groups</a>
                                                            </li>

                                                            <li className="nav-item">
                                                                <a className={activeIndex === 3 ? "nav-link active" : "nav-link"}
                                                                   onClick={() => handleNavClick(3)}><i
                                                                    className="fi-rs-shopping-cart-check mr-10"></i>Track
                                                                    Your Order</a>
                                                            </li>

                                                            <li className="nav-item">
                                                                <a className={activeIndex === 8 ? "nav-link active" : "nav-link"}
                                                                   onClick={() => handleNavClick(8)}><i
                                                                    className="fi-rs-shopping-cart-check mr-10"></i>Payments</a>
                                                            </li>

                                                            <li className="nav-item">
                                                                <a className={activeIndex === 7 ? "nav-link active" : "nav-link"}
                                                                   onClick={() => handleNavClick(7)}><i
                                                                    className="fi-rs-message-check mr-10"></i>Messages</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className={activeIndex === 4 ? "nav-link active" : "nav-link"}
                                                                   onClick={() => handleNavClick(4)}><i
                                                                    className="fi-rs-marker mr-10"></i>My Address</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className={activeIndex === 5 ? "nav-link active" : "nav-link"}
                                                                   onClick={() => handleNavClick(5)}><i
                                                                    className="fi-rs-user mr-10"></i>Account details</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a onClick={handleLogout} className="nav-link"><i
                                                                    className="fi-rs-sign-out mr-10"></i>Logout</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                ): null}
                                            </>
                                        ) : (
                                            <div className="dashboard-menu">
                                                <ul className="nav flex-column" role="tablist">
                                                    <li className="nav-item">
                                                        <a className={activeIndex === 1 ? "nav-link active" : "nav-link"}
                                                           onClick={() => handleOnClick(1)}><i
                                                            className="fi-rs-settings-sliders mr-10"></i>Dashboard</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className={activeIndex === 2 ? "nav-link active" : "nav-link"}
                                                           onClick={() => handleOnClick(2)}><i
                                                            className="fi-rs-shopping-bag mr-10"></i>Orders</a>
                                                    </li>

                                                    <li className="nav-item">
                                                        <a className={activeIndex === 6 ? "nav-link active" : "nav-link"}
                                                           onClick={() => handleOnClick(6)}><i
                                                            className="fi-rs-shopping-bag mr-10"></i>Bulk Groups</a>
                                                    </li>

                                                    <li className="nav-item">
                                                        <a className={activeIndex === 3 ? "nav-link active" : "nav-link"}
                                                           onClick={() => handleOnClick(3)}><i
                                                            className="fi-rs-shopping-cart-check mr-10"></i>Track Your
                                                            Order</a>
                                                    </li>

                                                    <li className="nav-item">
                                                        <a className={activeIndex === 8 ? "nav-link active" : "nav-link"}
                                                           onClick={() => handleOnClick(8)}><i
                                                            className="fi-rs-shopping-cart-check mr-10"></i>Payments</a>
                                                    </li>



                                                    <li className="nav-item">
                                                        <a className={activeIndex === 7 ? "nav-link active" : "nav-link"}
                                                           onClick={() => handleOnClick(7)}><i
                                                            className="fi-rs-chat mr-10"></i>Messages</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className={activeIndex === 4 ? "nav-link active" : "nav-link"}
                                                           onClick={() => handleOnClick(4)}><i
                                                            className="fi-rs-marker mr-10"></i>My Address</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className={activeIndex === 5 ? "nav-link active" : "nav-link"}
                                                           onClick={() => handleOnClick(5)}><i
                                                            className="fi-rs-user mr-10"></i>Account details</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a onClick={handleLogout} className="nav-link"><i
                                                            className="fi-rs-sign-out mr-10"></i>Logout</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="tab-content account dashboard-content">
                                            <div
                                                className={activeIndex === 1 ? "tab-pane fade active show" : "tab-pane fade "}>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="mb-0">Hello {userInfo.user ? userInfo.user.name : ''}!</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <p>
                                                            From your account dashboard. you can easily check &amp; view
                                                            your
                                                            <span
                                                                style={{color: '#69e265', cursor: 'pointer'}}
                                                                onClick={() => handleOnClick(2)}
                                                            >
                                                                 {" recent orders"}
                                                            </span>,
                                                            <br/>
                                                            manage your,
                                                            <span
                                                                style={{color: '#69e265', cursor: 'pointer'}}
                                                                onClick={() => handleOnClick(4)}
                                                            >
                                                                {" addresses"}
                                                            </span> and <span
                                                            style={{color: '#69e265', cursor: 'pointer'}}
                                                            onClick={() => handleOnClick(5)}
                                                        >
                                                            edit your password and account details.
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade "}>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="mb-0">Your Orders</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                <tr>
                                                                    <th>Order</th>
                                                                    <th>Date</th>
                                                                    <th>Status</th>
                                                                    <th>Total</th>
                                                                    {/*<th>Actions</th>*/}
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                {orders && orders.orders && Array.isArray(orders.orders) && orders.orders.map((order) => (
                                                                    <tr
                                                                        key={order.id}
                                                                        style={
                                                                            isMobile
                                                                                ? {
                                                                                    display: 'flex',
                                                                                    flexDirection: 'row',
                                                                                    borderTop: '1px solid #000',
                                                                                    borderBottom: '1px solid #000'
                                                                                }
                                                                                : {
                                                                                    borderTop: '1px solid #000',
                                                                                    borderBottom: '1px solid #000'
                                                                                }
                                                                        }
                                                                    >
                                                                        <td>#{order.id}</td>
                                                                        <td>{new Date(order.created_at).toLocaleDateString()}</td>
                                                                        <td>{order.status}</td>
                                                                        <td>${order.total_price} for {order.quantity} item(s)</td>
                                                                        {/*<td><a href="#"*/}
                                                                        {/*       className="btn-small d-block">View</a>*/}
                                                                        {/*</td>*/}
                                                                    </tr>
                                                                ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div
                                                className={activeIndex === 6 ? "tab-pane fade active show" : "tab-pane fade "}>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <div
                                                            className="card-header d-flex justify-content-between align-items-center">
                                                            <h3 className="mb-0">Your Bulk Orders</h3>
                                                            <div>
                                                                <button
                                                                    className="btn btn-sm font-weight-bold text-white mt-5 border-radius-5 btn-shadow-brand hover-up"
                                                                    onClick={() => setShowCreateGroupModal(true)}>Create
                                                                    a group
                                                                </button>
                                                                <CreateGroup show={showCreateGroupModal}
                                                                             onClose={() => setShowCreateGroupModal(false)}/>
                                                                <button
                                                                    className="btn btn-sm font-weight-bold text-white mt-5 border-radius-5 btn-shadow-brand hover-up"
                                                                    onClick={() => setShowJoinGroupModal(true)}>Join
                                                                    a group
                                                                </button>
                                                                <JoinGroup show={showJoinGroupModal}
                                                                           onClose={() => setShowJoinGroupModal(false)}/>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="card-body">
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                <tr>
                                                                    <th>Group Name</th>
                                                                    <th>Group Id</th>
                                                                    <th>Product</th>
                                                                    <th>Role</th>
                                                                    <th>Status</th>
                                                                    <th>Users</th>
                                                                    <th>Actions</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                {groupDetails && Array.isArray(groupDetails) && groupDetails.map((group, index) => (
                                                                    <tr key={index}
                                                                        style={
                                                                            isMobile
                                                                                ? {
                                                                                    display: 'flex',
                                                                                    flexDirection: 'row',
                                                                                    borderTop: '1px solid #000',
                                                                                    borderBottom: '1px solid #000'
                                                                                }
                                                                                : {
                                                                                    borderTop: '1px solid #000',
                                                                                    borderBottom: '1px solid #000'
                                                                                }
                                                                        }
                                                                    >

                                                                        <td>{group.name}</td>
                                                                        <td>#{group.group_id}</td>
                                                                        <td>{group.product_name}</td>
                                                                        <td>{group.role}</td>
                                                                        <td>{group.status}</td>
                                                                        <td>{group.users_count}</td>
                                                                        <td>
                                                                            <button
                                                                                className="btn btn-sm font-weight-bold mt-5 border-radius-5 btn-shadow-brand hover-up text-danger"
                                                                                onClick={() => deleteGroup(group.group_id)}
                                                                            >
                                                                                Delete
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div
                                                className={activeIndex === 3 ? "tab-pane fade active show" : "tab-pane fade "}>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="mb-0">Orders tracking</h3>
                                                    </div>
                                                    <div className="card-body contact-from-area">
                                                        <p>To track your order please enter your OrderID in the box
                                                            below and press "Track" button. You can find the OrderId in
                                                            the orders of account menu and in the confirmation email you
                                                            received.</p>
                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <form className="contact-form-style mt-30 mb-50"
                                                                      action="#" method="post">
                                                                    <div className="input-style mb-20">
                                                                        <label>Order ID</label>
                                                                        <input name="order-id"
                                                                               placeholder="Found in your order confirmation email"
                                                                               type="text"/>
                                                                    </div>
                                                                    <div className="input-style mb-20">
                                                                        <label>Billing email</label>
                                                                        <input name="billing-email"
                                                                               placeholder="Email you used during checkout"
                                                                               type="email"/>
                                                                    </div>
                                                                    <button className="submit submit-auto-width"
                                                                            type="submit">Track
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div
                                                className={activeIndex === 8 ? "tab-pane fade active show" : "tab-pane fade "}>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="mb-0">Your Payments</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                <tr>
                                                                    <th>Id</th>
                                                                    <th>Product</th>
                                                                    <th>Date</th>
                                                                    <th>Status</th>
                                                                    <th>Total</th>
                                                                    <th>Actions</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                {payments.map((payment) => (
                                                                    <tr
                                                                        key={String(payment.id)}
                                                                        style={
                                                                            isMobile
                                                                                ? {
                                                                                    display: 'flex',
                                                                                    flexDirection: 'row',
                                                                                    borderTop: '1px solid #000',
                                                                                    borderBottom: '1px solid #000'
                                                                                }
                                                                                : {
                                                                                    borderTop: '1px solid #000',
                                                                                    borderBottom: '1px solid #000'
                                                                                }
                                                                        }
                                                                    >
                                                                        <td>#{String(payment.id)}</td>
                                                                        <td>{String(payment.product.product_name)}</td>
                                                                        <td>{new Date(payment.created_at).toLocaleDateString()}</td>
                                                                        <td style={{
                                                                            backgroundColor: payment.payment_status === 'paid' ? 'green' : payment.payment_status === 'failed' ? 'red' : 'transparent',
                                                                            color: 'white'
                                                                        }}>
                                                                            {payment.payment_status === 'paid' ? 'Paid' : payment.payment_status === 'failed' ? 'Failed' : payment.payment_status}
                                                                        </td>
                                                                        <td>${String(payment.total_cost)}</td>
                                                                        <td>
                                                                            <button
                                                                                onClick={() => generateReceipt(payment)}
                                                                                className="btn-small d-block">Download
                                                                                Receipt
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div
                                                className={activeIndex === 7 ? "tab-pane fade active show" : "tab-pane fade "}>
                                                <div className="card">
                                                    <div className="container-fluid h-100">
                                                        <div className="row h-100">

                                                            <div className="col-md-4 col-lg-3 overflow-auto">
                                                                <div className="list-group">
                                                                    {chats.map((chat) => (
                                                                        <a href="#"
                                                                           className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                                                                           key={chat.id}
                                                                           onClick={() => handleChatSelect(chat)}>
                                                                            <div>
                                                                                <h5 className="mb-1">{chat.subject}</h5>
                                                                                <small>{new Date(chat.updated_at).toLocaleString()}</small>
                                                                            </div>
                                                                            <small
                                                                                className="text-muted">{chat.latest_message ? chat.latest_message.body : 'No messages yet'}</small>
                                                                        </a>
                                                                    ))}
                                                                </div>
                                                            </div>


                                                            <div className="col-md-8 col-lg-9 d-flex flex-column">

                                                                <div className="flex-grow-1 overflow-auto">
                                                                    {selectedChat ? (
                                                                        <div>
                                                                            {messages.map((message) => (
                                                                                <div
                                                                                    className={`d-flex flex-column ${message.user.id === userId ? 'align-items-end' : ''}`}
                                                                                    key={message.id}>
                                                                                    <div
                                                                                        className="bg-light rounded px-2 py-1 mb-2">
                                                                                        <strong>{message.user.name}</strong>
                                                                                        <p>{message.body}</p>
                                                                                    </div>
                                                                                    <small
                                                                                        className="text-muted">{new Date(message.created_at).toLocaleTimeString()}</small>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    ) : (
                                                                        <div
                                                                            className="d-flex justify-content-center align-items-center h-100">
                                                                            <p className="text-muted">Select a chat to
                                                                                view messages</p>
                                                                        </div>
                                                                    )}
                                                                </div>


                                                                {selectedChat && (
                                                                    <div className="mt-auto">
                                                                        <form
                                                                            className="d-flex align-items-center p-3 border-top">
                                                                            <textarea className="form-control me-2"
                                                                                      placeholder="Type your reply here..."
                                                                                      rows="1" value={newMessage}
                                                                                      onChange={(e) => setNewMessage(e.target.value)}></textarea>
                                                                            <button type="button"
                                                                                    className="btn btn-primary"
                                                                                    onClick={handleSendMessage}>Send
                                                                            </button>
                                                                        </form>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div
                                                className={activeIndex === 4 ? "tab-pane fade active show" : "tab-pane fade "}>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="card mb-3 mb-lg-0">
                                                            <div className="card-header d-flex justify-content-between">
                                                                <h3 className="mb-0 mr-5">Address</h3>
                                                                <AddAddress userId={userId}
                                                                            onAddressAdded={onAddressAdded}/>
                                                            </div>
                                                            <div className="card-body">
                                                                <table>
                                                                    <thead>
                                                                    <tr>
                                                                        <th>Street</th>
                                                                        <th>City</th>
                                                                        <th>State</th>
                                                                        <th>Country</th>
                                                                        <th>Zip Code</th>
                                                                        <th>Actions</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    {address && address.map((addr, index) => (
                                                                        <tr key={index}>
                                                                            <td>{addr.street}</td>
                                                                            <td>{addr.city}</td>
                                                                            <td>{addr.state}</td>
                                                                            <td>{addr.country}</td>
                                                                            <td>{addr.zip_code}</td>
                                                                            <td>
                                                                                <EditAddress address={addr}/>
                                                                            </td>
                                                                            <td>
                                                                                <button
                                                                                    className="btn btn-sm font-weight-bold mt-5 border-radius-5 btn-shadow-brand hover-up text-danger"
                                                                                    onClick={() => deleteAddress(addr.id)}
                                                                                >
                                                                                    Delete
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div
                                                className={activeIndex === 5 ? "tab-pane fade active show" : "tab-pane fade "}>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h5>Account Details</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <p>Already have an account? <Link legacyBehavior
                                                                                          href="/login"><a>Log
                                                            in instead!</a></Link></p>
                                                        <form onSubmit={handleSubmit} name="enq">
                                                            <div className="row">
                                                                <div className="form-group col-md-6">
                                                                    <label>Name <span
                                                                        className="required">*</span></label>
                                                                    <input
                                                                        required=""
                                                                        className="form-control"
                                                                        name="name"
                                                                        type="text"
                                                                        placeholder={userInfo.user ? userInfo.user.name : ''}
                                                                    />
                                                                </div>
                                                                <div className="form-group col-md-6">
                                                                    <label>Phone Number <span
                                                                        className="required">*</span></label>
                                                                    <input required=""
                                                                           className="form-control"
                                                                           name="phone"
                                                                           placeholder={userInfo.user ? userInfo.user.phone : ''}
                                                                    />
                                                                </div>

                                                                <div className="form-group col-md-12">
                                                                    <label>Email Address <span
                                                                        className="required">*</span></label>
                                                                    <input required=""
                                                                           className="form-control"
                                                                           name="email"
                                                                           type="email"
                                                                           placeholder={userInfo.user ? userInfo.user.email : ''}
                                                                    />
                                                                </div>
                                                                {/*<div className="form-group col-md-12">*/}
                                                                {/*    <label>Current Password <span className="required">*</span></label>*/}
                                                                {/*    <input required="" className="form-control" name="password" type="password" />*/}
                                                                {/*</div>*/}
                                                                <div className="form-group col-md-12">
                                                                    <label>New Password <span
                                                                        className="required">*</span></label>
                                                                    <input required="" className="form-control"
                                                                           name="npassword" type="password"/>
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>Confirm Password <span
                                                                        className="required">*</span></label>
                                                                    <input required="" className="form-control"
                                                                           name="cpassword" type="password"/>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <button type="submit"
                                                                            className="btn btn-fill-out submit font-weight-bold"
                                                                            name="submit" value="Submit">Save Change
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}


export default Account;
