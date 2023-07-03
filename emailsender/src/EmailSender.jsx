import React, { useState } from 'react';

const EmailSender = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5175/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (!response.ok) {
       console.log('Failed to send email');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="p-8 bg-white shadow rounded-lg">
        <h1 className="text-3xl mb-4">Send Email</h1>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default EmailSender;
