import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post('http://localhost:5000/send', formData);
      alert('Message sent successfully');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      alert('Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='max-w-[1200px] mx-auto sm:py-20 p-5' id='contact'>
      <div className='text-center mb-14'>
        <h2 className='primary-color text-4xl font-bold leading-tight mb-4 relative inline-block'>
          Contact
          <span className='absolute -bottom-2 left-0 w-full h-1 bg-red-600 transform scale-x-75'></span>
        </h2>
        <p className='text-gray-400 mt-3 text-lg'>Let's discuss your next project</p>
      </div>

      <div className='max-w-[800px] mx-auto transform hover:shadow-2xl transition-shadow duration-300'>
        <div className='p-10 bg-[#161616] rounded-xl border border-gray-800 relative'>
          <div className='absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent opacity-20'></div>
          
          <form onSubmit={handleSubmit} className='relative space-y-8'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-[#161616] text-gray-300 placeholder-transparent border border-gray-700 rounded-lg peer focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all"
                  placeholder=" "
                  required
                />
                <label className="absolute left-5 top-4 text-gray-500 transition-all pointer-events-none 
                               peer-placeholder-shown:text-base peer-placeholder-shown:top-4
                               peer-focus:-top-3 peer-focus:text-sm peer-focus:text-red-400
                               -top-3 text-sm bg-[#161616] px-2">
                  Your Name
                </label>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-[#161616] text-gray-300 placeholder-transparent border border-gray-700 rounded-lg peer focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all"
                  placeholder=" "
                  required
                />
                <label className="absolute left-5 top-4 text-gray-500 transition-all pointer-events-none 
                               peer-placeholder-shown:text-base peer-placeholder-shown:top-4
                               peer-focus:-top-3 peer-focus:text-sm peer-focus:text-red-400
                               -top-3 text-sm bg-[#161616] px-2">
                  Your Email
                </label>
              </div>
            </div>

            <div className="relative group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-[#161616] text-gray-300 placeholder-transparent border border-gray-700 rounded-lg peer focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all resize-none h-40"
                placeholder=" "
                required
              />
              <label className="absolute left-5 top-4 text-gray-500 transition-all pointer-events-none 
                             peer-placeholder-shown:text-base peer-placeholder-shown:top-4
                             peer-focus:-top-3 peer-focus:text-sm peer-focus:text-red-400
                             -top-3 text-sm bg-[#161616] px-2">
                Your Message
              </label>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 bg-red-600 text-white rounded-lg font-semibold 
                       hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20 
                       transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed
                       flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
