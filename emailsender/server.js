import express, { json } from 'express';
import { createTransport } from 'nodemailer';

const app = express();
app.use(json());

app.post('/send-email', async (req, res) => {
  const { email, subject, message } = req.body;

  try {
    // Create a transporter using your email server configuration
    const transporter = createTransport({
      host: 'gmail',
      port: 587,
      secure: false,
      auth: {
        user: 'sevilmirzyeva010@gmail.com',
        pass: 'jczcykfzaqynwtdq',
      },
    });

    // Send email
    await transporter.sendMail({
      from: 'sevilmirzyeva010@gmail.com',
      to: email,
      subject: subject,
      text: 'This is a test email sent using Nodemailer.'
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

app.listen(5173, () => {
  console.log('Server started on port 5174');
});





