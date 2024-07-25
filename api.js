import axios from 'axios';
import React, { useState } from 'react'; // Corrected import statement

const API_URL = 'https://api.afreebmart.com/api';

function getUserIdFromLocalStorage() {
    // Check if localStorage is defined
    if (typeof window === "undefined" || !window.localStorage) {
        console.error('localStorage is not available');
        return null;
    }


    const storedData = localStorage.getItem('userInfo');
    if (!storedData) return null; // Early return if no data is stored


    try {
        const parsedData = JSON.parse(storedData);
        return parsedData && parsedData.user ? parsedData.user.id : null;
    } catch (e) {
        console.error('Error parsing user data from localStorage:', e);
        return null;
    }
}

// Usage
const userId = getUserIdFromLocalStorage();


    // const storedData = JSON.parse(localStorage.getItem('user'));

    // Access the access_token object and then the actual token
    // const accessToken = storedData?.access_token?.id;

    const api = axios.create({
        baseURL: API_URL,
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${accessToken}`,// Assuming you store the auth token in localStorage
        }
    });

export const getChats = () => api.get(`/chats/${userId}`);
export const getMessages = (threadId) => api.get(`/chats/${threadId}/messages/${userId}`);
export const sendMessage = (threadId, message) => api.post(`/chats/${threadId}/messages/${userId}`, { message });
export const createChat = (subject, message, participants) => api.post(`/chats/${userId}`, { subject, message, participants });