// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import Header from '../components/header';

const Home = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Header user={user} />
            <main className="flex-grow p-4">
                <h2 className="text-2xl font-bold mb-4">Welcome to My Blog</h2>
                <p>This is the home page where you can find the latest posts.</p>
            </main>
        </div>
    );
};

export default Home;
 