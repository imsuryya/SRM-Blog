import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/login', { username, password });
            alert('Login successful!');
        } catch (error) {
            console.error('There was an error logging in!', error);
            alert('Login failed. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-80">
                <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="mb-4 p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mb-4 p-2 border border-gray-300 rounded"
                    />
                    <button
                        type="submit"
                        className="py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                    >
                        Log In
                    </button>
                </form>
                <p className="text-center mt-4 text-blue-500 cursor-pointer hover:underline">
                    <a href="/signup">Don't have an account? Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
