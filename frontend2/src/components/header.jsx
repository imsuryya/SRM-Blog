// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user }) => {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">My Blog</h1>
            <div>
                {user ? (
                    <span className="mr-4">Hello, {user.username}!</span>
                ) : (
                    <Link to="/login" className="text-white hover:underline">Login</Link>
                )}
            </div>
        </header>
    );
};

export default Header;
