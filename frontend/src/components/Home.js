import React, { useState, useEffect } from 'react';

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
            <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">My Blog</h1>
                <div>
                    {user ? (
                        <span className="mr-4">Hello, {user.username}!</span>
                    ) : (
                        <a href="/login" className="text-white hover:underline">Login</a>
                    )}
                </div>
            </header>
            <main className="flex-grow p-4">
                <h2 className="text-2xl font-bold mb-4">Welcome to My Blog</h2>
                <p>This is the home page where you can find the latest posts.</p>
            </main>
        </div>
    );
};

export default Home;
