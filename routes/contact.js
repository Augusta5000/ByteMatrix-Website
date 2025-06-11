const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Create a contact form submission
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({ 
                message: 'All fields are required',
                error: 'Validation error'
            });
        }

        // Save to database
        const contact = new Contact({
            name,
            email,
            message
        });
        await contact.save();

        // Check if email credentials are configured
        if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
            console.error('Email credentials not configured:', {
                hasEmailUser: !!process.env.EMAIL_USER,
                hasAppPassword: !!process.env.EMAIL_APP_PASSWORD
            });
            return res.status(500).json({ 
                message: 'Email service not configured. Please contact support.',
                error: 'Configuration error'
            });
        }

        // Log email configuration (excluding password)
        console.log('Email configuration:', {
            user: process.env.EMAIL_USER,
            hasPassword: !!process.env.EMAIL_APP_PASSWORD
        });

        // Create reusable transporter object using SMTP transport
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD
            }
        });

        // Verify transporter configuration
        try {
            await transporter.verify();
            console.log('Email transporter verified successfully');
        } catch (verifyError) {
            console.error('Email transporter verification failed:', verifyError);
            if (verifyError.code === 'EAUTH') {
                console.error('Authentication failed. Please check your email and app password.');
            }
            return res.status(500).json({ 
                message: 'Email service configuration error. Please contact support.',
                error: 'Email verification failed'
            });
        }

        const mailOptions = {
            from: `"ByteMatrix Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // Send to the same email for testing
            subject: 'New Contact Form Submission',
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        console.error('Contact form error:', error);
        
        // Send a more specific error message
        if (error.code === 'EAUTH') {
            res.status(500).json({ 
                message: 'Email service configuration error. Please contact support.',
                error: 'Email configuration error'
            });
        } else {
            res.status(500).json({ 
                message: 'Error submitting contact form',
                error: error.message
            });
        }
    }
});

module.exports = router; 