const express = require('express');
const router = express.Router();

// Placeholder OAuth2 flow
router.post('/login', (req, res) => {
  const { discordUserId } = req.body;
  // Validate and respond with JWT or session
  res.json({ message: 'Logged in', userId: discordUserId });
});

module.exports = router;