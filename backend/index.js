const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/authDB')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

app.listen(5000, () => console.log('Server running on port 5000'));
