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


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


const feedbackRoutes = require('./routes/feedback');
const searchRoutes = require('./routes/search');
const chatbotRoutes = require('./routes/chatbot');


app.use('/api/feedback', feedbackRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/search', searchRoutes);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
