import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p>
        Alternatively, you can email me directly:{" "}
        <a href="mailto:peter@peterprogramming.com">
          peter@peterprogramming.com
        </a>
      </p>
    </div>
  );
}

export default Contact;
