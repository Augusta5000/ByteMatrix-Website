const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');

// Get all portfolio items
router.get('/', async (req, res) => {
    try {
        const portfolioItems = await Portfolio.find().sort({ createdAt: -1 });
        res.json(portfolioItems);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching portfolio items' });
    }
});

// Get portfolio items by category
router.get('/category/:category', async (req, res) => {
    try {
        const portfolioItems = await Portfolio.find({ 
            category: req.params.category 
        }).sort({ createdAt: -1 });
        res.json(portfolioItems);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching portfolio items' });
    }
});

// Create a new portfolio item (protected route - would need authentication in production)
router.post('/', async (req, res) => {
    try {
        const portfolioItem = new Portfolio(req.body);
        await portfolioItem.save();
        res.status(201).json(portfolioItem);
    } catch (error) {
        res.status(500).json({ message: 'Error creating portfolio item' });
    }
});

module.exports = router; 