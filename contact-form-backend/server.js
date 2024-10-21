const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST route to send email
app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  // Create transporter object for Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mustafatahir14.mt@gmail.com',
      pass: 'vjbi jxpw dnnt guuz',
    },
  });

  const mailOptions = {
    from: email,
    to: 'mustafatahir14.mt@gmail.com', // Your Gmail address
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ error: 'Failed to send email' });
    }
    res.status(200).send({ success: 'Email sent successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
