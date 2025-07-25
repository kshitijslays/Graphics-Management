require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const helmet = require('helmet');
const connectDB = require('./config/db');

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173']
}));
// app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/auth', require('./routes/authRoutes'));

// Handle production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public'));
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ status: 'error', message: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});