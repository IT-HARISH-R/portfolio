const Contact = () => {
    return (
      <section className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-10 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Contact Me</h2>
  
          <p className="mb-8">
            Feel free to reach out via the form below or connect with me on social platforms.
          </p>
  
          <form className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  