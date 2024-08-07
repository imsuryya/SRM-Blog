import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/Login';
import SignupPage from './components/Signup';  // Assuming you have a SignupPage component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
