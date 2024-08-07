// src/pages/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from '../components/form';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
            localStorage.setItem('user', JSON.stringify({ username }));
            alert('Login successful!');
            navigate('/');
        } catch (error) {
            console.error('There was an error logging in!', error);
            alert('Login failed. Please try again.');
        }
    };

    const inputs = [
        { type: 'text', placeholder: 'Username', value: username, onChange: e => setUsername(e.target.value) },
        { type: 'password', placeholder: 'Password', value: password, onChange: e => setPassword(e.target.value) }
    ];

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-80">
                <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>
                <Form onSubmit={handleSubmit} inputs={[...inputs, { type: 'submit', submitText: 'Log In' }]} />
                <p className="text-center mt-4 text-blue-500 cursor-pointer hover:underline">
                    <a href="/signup">Don't have an account? Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
