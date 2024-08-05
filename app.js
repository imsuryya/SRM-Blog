const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/auth');
const app = express();
require('dotenv').config(); // Ensure to load .env file

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './src/views'); // Set views directory

// MongoDB connection
const mongoURI = process.env.MONGODB_URI; // Use environment variable
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Routes
app.use('/auth', authRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the SRM Project! Go to <a href="/auth/signup">Sign Up</a> or <a href="/auth/login">Login</a>');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
