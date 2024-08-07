import React, { useState } from 'react';
import axios from 'axios';
import Form from '../components/signupform';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        try {
            await axios.post('http://localhost:5000/api/auth/signup', { username, password });
            alert('Signup successful!');
        } catch (error) {
            console.error('There was an error signing up!', error);
            alert('Signup failed. Please try again.');
        }
    };

    const inputs = [
        { type: 'text', placeholder: 'Username', value: username, onChange: e => setUsername(e.target.value) },
        { type: 'password', placeholder: 'Password', value: password, onChange: e => setPassword(e.target.value) },
        { type: 'password', placeholder: 'Confirm Password', value: confirmPassword, onChange: e => setConfirmPassword(e.target.value) }
    ];

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-80">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
                <Form onSubmit={handleSubmit} inputs={[...inputs, { type: 'submit', submitText: 'Sign Up' }]} />
                <p className="text-center mt-4 text-blue-500 cursor-pointer hover:underline">
                    <a href="/login">Already have an account? Log In</a>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
