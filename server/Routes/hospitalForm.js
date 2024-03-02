import express from 'express';
import Hospital from '../models/Hospital.js';

const router = express.Router();

router.post('/hospitals/data', async (req, res) => {
  try {
    const newHospital = new Hospital(req.body);
    await newHospital.save();
    res.status(201).json({ message: 'Hospital data saved successfully' });
  } catch (error) {
    console.error('Error saving hospital data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
