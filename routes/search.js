const express = require('express');
const router = express.Router();
const Content = require('../models/Content');

router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({ message: 'Query parameter is required' });
    }

    const results = await Content.find({
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { content: { $regex: q, $options: 'i' } }
      ]
    });

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error performing search', error: error.message });
  }
});

module.exports = router;