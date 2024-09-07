const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

const corsOptions = {
  origin: 'https://CahayaBinaPutra.github.io', // Ganti dengan URL frontend kamu
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
};

app.use(cors(corsOptions));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Define your routes
const feedbackRoutes = require('./routes/feedback');
const searchRoutes = require('./routes/search');
const chatbotRoutes = require('./routes/chatbot');

app.use('/api/feedback', feedbackRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api', searchRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
