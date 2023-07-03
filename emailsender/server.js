import { createTransport } from 'nodemailer';

// Create a transporter object with your email service provider details
const transporter = createTransport({
  service: 'ethereal.email',
  auth: {
    user: 'leora69@ethereal.email',
    pass: 'UgbXzCtrTkJSs7rvK9'
  }
});

// Define the email options
const mailOptions = {
  from: 'leora69@ethereal.email',
  to: 'sevilmirzyeva010@gmail.com',
  subject: 'Hello from Nodemailer',
  text: 'This is a test email sent using Nodemailer.'
};

// Send the email
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log('Error occurred:', error.message);
  } else {
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
  }
});
