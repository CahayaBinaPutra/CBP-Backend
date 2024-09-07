router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    console.log('Search query:', q); // Logging query parameter

    if (!q) {
      return res.status(400).json({ message: 'Query parameter is required' });
    }

    const results = await Content.find({
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { content: { $regex: q, $options: 'i' } }
      ]
    });

    console.log('Search results:', results); // Logging search results
    res.json(results);
  } catch (error) {
    console.error('Error performing search:', error); // Improved error logging
    res.status(500).json({ message: 'Error performing search', error: error.message });
  }
});
