import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
               <div className="min-h-screen flex items-center justify-center bg-cover bg-center h-screen p-24"
               style={{ backgroundImage: "url('./Assets/img.jpg')" }}>
      <div className="bg-pink-200 p-8 rounded-lg shadow-md w-full sm:w-96">
        <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md "
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md "
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm  text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full border rounded-md "
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-900"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
            </div>
        );
    }
}

export default Contact;
