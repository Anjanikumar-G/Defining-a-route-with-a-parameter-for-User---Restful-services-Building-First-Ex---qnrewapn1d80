const express = require('express');
const app = express();

app.get('/user/:userId', (req, res) => {
  const { userId } = req.params;

  // Basic validation for userId, you can add more complex validation if needed
  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  // Return the userId in the response
  res.status(200).json({ userId });
});

module.exports = app;
