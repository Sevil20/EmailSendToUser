import React, { useState } from 'react';
import axios from 'axios';

const EmailSender = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send email using Nodemailer
      await axios.post('http://localhost:5174/send-email', { email, subject, message });

      // Clear form fields
      setEmail('');
      setSubject('');
      setMessage('');

      // Display success message to the user
      alert('Email sent successfully!');
    } catch (error) {
      console.log(error);
      // Display error message to the user
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md">
      <h2 className="text-xl font-semibold mb-4">Send Email</h2>
      <form onSubmit={handleSubmit} action='POST'>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block font-medium">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-medium">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default EmailSender;
