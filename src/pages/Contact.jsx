import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const url = 'http://localhost:3000'

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await axios.post(`${url}/api/contact/`, formData);
      setStatus(response.data.message);
      setFormData({ name: '', email: '', message: '' }); 
    } catch (error) {
      console.error(error);
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-10 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Contact Me</h2>
        <p className="mb-8">
          Feel free to reach out via the form below or connect with me on social platforms.
        </p>

        <form
          className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white outline-none"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Send Message
          </button>
        </form>

        {status && <p className="mt-4 text-green-500 dark:text-green-400">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
