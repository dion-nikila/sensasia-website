import React from 'react';

function Contact() {
  return (
    <div className="container">
      <h2>Contact Us</h2>
      <p>Phone: <a href="tel:0112957700">0112 957 700</a></p>
      <p>Email: <a href="mailto:sensasia.rest@gmail.com">sensasia.rest@gmail.com</a></p>
      <p>Address: Peralanda Road, Ragama, Sri Lanka</p>

      <p>Have a question? Send us a message:</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send Message</button>
        <p className="small">*This is a demo form. Set up a backend to handle submissions.</p>
      </form>
    </div>
  );
}

export default Contact;
