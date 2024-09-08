const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

const corsOptions = {
  origin: 'https://cahayabinaputra.github.io', // Ganti dengan URL frontend kamu
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
};

app.use(cors(corsOptions));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Add connection event handlers
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to', process.env.MONGODB_URL);
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

const feedbackRoutes = require('./routes/feedback');
const searchRoutes = require('./routes/search');
const chatbotRoutes = require('./routes/chatbot');

app.use('/api/feedback', feedbackRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api', searchRoutes);

// Ping server Railway setiap 25 menit
const cron = require('node-cron');
const axios = require('axios');

cron.schedule('*/25 * * * *', () => {
  axios.get('https://cbp-backend-production.up.railway.app') // Ganti URL dengan URL backend Railway Anda
    .then(() => console.log('Ping successful! Keeping Railway awake.'))
    .catch(err => console.error('Ping failed:', err));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

