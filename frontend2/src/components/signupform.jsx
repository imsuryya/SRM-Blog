import React, { useState } from 'react';

const SignupForm = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        onSubmit(username, password);
    };

    return (
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
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mb-4 p-2 border border-gray-300 rounded"
            />
            <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
                Sign Up
            </button>
        </form>
    );
};

export default SignupForm;
