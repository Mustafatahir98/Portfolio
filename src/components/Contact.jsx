import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/send', formData);
      alert('Message sent successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to send message');
    }
  };

  return (
    <div className='max-w-[1200px] mx-auto sm:py-20 p-5' id='contact'>
      <div className='text-center'>
        <h2 className='primary-color text-4xl font-bold leading-tight'>Contact</h2>
      </div>

      <div className='max-w-[800px] mx-auto'>
        <div className='mt-6 p-10 bg-[#161616] rounded-xl'>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onChange={handleChange}
                  className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-red-600"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                  className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-red-600"
                />
              </div>
              <div className='sm:col-span-2'>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="3"
                  onChange={handleChange}
                  className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-red-600"
                />
              </div>
              <div className='sm:col-span-2'>
                <button type='submit' className='text-xl w-full p-3 mt-2 font-semibold text-white bg-primary-color rounded-md'>
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
