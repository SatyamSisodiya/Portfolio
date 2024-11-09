// src/components/Contact.js
import React from "react";

const Contact = () => (
  <section id="contact" className="py-16 px-4 bg-gray-900 text-center">
    <h2 className="text-3xl font-bold text-blue-400 mb-6">Contact Me</h2>
    <form className="max-w-md mx-auto space-y-4">
      <input type="text" name="name" placeholder="Name" className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none" required />
      <input type="email" name="email" placeholder="Email" className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none" required />
      <textarea name="message" placeholder="Message" className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none" required></textarea>
      <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">Send</button>
    </form>
    <div className="mt-8 space-x-4">
      <a href="https://github.com" className="text-blue-400">GitHub</a>
      <a href="https://linkedin.com" className="text-blue-400">LinkedIn</a>
    </div>
  </section>
);

export default Contact;
