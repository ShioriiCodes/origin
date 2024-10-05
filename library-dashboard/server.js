const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com', // Your Gmail address
        pass: 'your_email_password'     // Your Gmail password (or App Password)
    }
});

// Send alert email
app.post('/send-alert', (req, res) => {
    const { message } = req.body;

    const mailOptions = {
        from: 'your_email@gmail.com',
        to: 'recipient1@gmail.com, recipient2@gmail.com, recipient3@gmail.com', // List of recipient emails
        subject: 'Library System Alert',
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: 'Error sending email', error });
        }
        res.status(200).json({ message: 'Email sent: ' + info.response });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
