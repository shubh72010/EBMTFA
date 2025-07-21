const express = require('express');
const router = express.Router();
const { db } = require('../utils/firebase');

// POST /api/keys/save
router.post('/save', async (req, res) => {
  const { userId, serverId, apiKey, model } = req.body;
  try {
    await db.collection('users').doc(userId).collection('servers').doc(serverId).set({
      apiKey,
      model,
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;