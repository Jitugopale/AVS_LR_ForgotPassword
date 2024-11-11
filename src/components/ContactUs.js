import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>We would love to hear from you.</p>
      <ul>
        <li>
          <h2>Address</h2>
          <p>123 Main St, Anytown, USA 12345</p>
        </li>
        <li>
          <h2>Phone</h2>
          <p>(555) 555-5555</p>
        </li>
        <li>
          <h2>Email</h2>
          <p><a href="mailto:info@example.com">info@example.com</a></p>
        </li>
      </ul>
      <form>
        <label>Name:</label>
        <input type="text" />
        <br />
        <label>Email:</label>
        <input type="email" />
        <br />
        <label>Message:</label>
        <textarea />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;