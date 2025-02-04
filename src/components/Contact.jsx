import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='max-w-[1200px] mx-auto sm:py-20 p-5' id='contact'>
      <div className='text-center mb-12'>
        <h2 className='primary-color text-4xl font-bold leading-tight mb-4 animate-fade-in'>
          Get in Touch
        </h2>
        <p className='text-gray-400 text-lg'>Have a question or want to work together? Drop me a message!</p>
      </div>

      <div className='max-w-[800px] mx-auto transform hover:scale-[1.01] transition-all'>
        <div className='mt-6 p-10 bg-gradient-to-br from-[#161616] to-[#1a1a1a] rounded-xl shadow-2xl'>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
              <div className='relative'>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Your Name"
                  onChange={handleChange}
                  required
                  className="bg-[#161616] w-full px-5 py-4 text-gray-300 placeholder-gray-500 border border-gray-700 rounded-lg 
                  focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                />
              </div>
              <div className='relative'>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Your Email"
                  onChange={handleChange}
                  required
                  className="bg-[#161616] w-full px-5 py-4 text-gray-300 placeholder-gray-500 border border-gray-700 rounded-lg 
                  focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                />
              </div>
              <div className='sm:col-span-2 relative'>
                <textarea
                  name="message"
                  value={formData.message}
                  placeholder="Your Message"
                  rows="4"
                  onChange={handleChange}
                  required
                  className="bg-[#161616] w-full px-5 py-4 text-gray-300 placeholder-gray-500 border border-gray-700 rounded-lg 
                  focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none"
                />
              </div>
              <div className='sm:col-span-2 mt-4'>
                <button
                  type='submit'
                  disabled={isLoading}
                  className={`w-full py-4 text-lg font-semibold text-white rounded-lg transition-all
                    ${isLoading 
                      ? 'bg-red-700 cursor-not-allowed' 
                      : 'bg-red-500 hover:bg-red-600 transform hover:scale-[1.02] shadow-lg shadow-red-500/20'}
                    `}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
                
                {isSubmitted && (
                  <div className="mt-4 p-3 bg-green-500/20 text-green-500 rounded-lg text-center animate-fade-in">
                    Message sent successfully! 🎉
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
