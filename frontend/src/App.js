import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './components/Signup';
import LoginPage from './components/Login';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<SignupPage />} />
            </Routes>
        </Router>
    );
};

export default App;
