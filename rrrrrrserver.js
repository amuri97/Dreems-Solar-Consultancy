// server.js

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data and handle CORS
app.use(bodyParser.json());
app.use(cors());

// Endpoint to handle contact form submission
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    // Configuring Nodemailer with SMTP transport settings
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // Replace with your Gmail address
            pass: 'your-email-password'   // Replace with your Gmail password or app password
        }
    });

    // Setting up email data
    let mailOptions = {
        from: email,
        to: 'website-owner@gmail.com', // Replace with the website owner's email address
        subject: `New Message from ${name}`,
        text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
        `
    };

    // Sending the email
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send({ message: 'Email sent successfully!' });
    } catch (error) {
        res.status(500).send({ message: 'Error sending email', error: error.toString() });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});