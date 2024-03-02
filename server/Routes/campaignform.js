import express from 'express';
import Campaign from '../Model/Campaign.js';

const router = express.Router();

router.post('/campaigns/form', async (req, res) => {
  try {
    const newCampaign = new Campaign(req.body);
    await newCampaign.save();
    res.status(201).json({ message: 'Campaign data saved successfully' });
  } catch (error) {
    console.error('Error saving campaign data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
