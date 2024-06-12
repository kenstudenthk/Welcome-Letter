const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Define the email details
const mailOptions = {
  from: 'your-email@example.com',
  to: 'recipient-email@example.com',
  subject: 'Email with PDF Attachment',
  text: 'Please find the attached PDF document.',
  attachments: [
    {
      filename: 'document.pdf',
      path: path.join(__dirname, 'document.pdf')
    }
  ]
};

// Create the email transporter
const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'your-email@example.com',
    pass: 'your-password'
  }
});

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});