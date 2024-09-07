const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');
const { body, validationResult } = require('express-validator');

// Middleware validasi
const validateFeedback = [
  body('email').isEmail().withMessage('Email tidak valid'),
  body('message').trim().isLength({ min: 10, max: 1000 }).withMessage('Pesan harus antara 10 dan 1000 karakter')
];

router.post('/', validateFeedback, async (req, res) => {
  // Validasi input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, message } = req.body;

    // Cek jumlah feedback dari email ini dalam 30 hari terakhir
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const feedbackCount = await Feedback.countDocuments({
      email: email,
      createdAt: { $gte: thirtyDaysAgo }
    });

    if (feedbackCount >= 3) {
      return res.status(429).json({ 
        success: false, 
        message: 'Anda telah mencapai batas maksimum pengiriman feedback (3 kali) untuk bulan ini.'
      });
    }

    // Simpan feedback
    const newFeedback = new Feedback({
      email,
      message
    });

    const savedFeedback = await newFeedback.save();
    console.log('Feedback disimpan:', savedFeedback);


    res.json({ 
      success: true, 
      data: savedFeedback, 
      message: 'Feedback berhasil dikirim.'
    });
  } catch (err) {
    console.error('Error menyimpan feedback:', err);
    res.status(500).json({ success: false, message: 'Terjadi kesalahan saat menyimpan feedback' });
  }
});

module.exports = router;
