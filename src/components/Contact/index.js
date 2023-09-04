import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <form action="https://formspree.io/f/mpzgrrvo" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="_replyto" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
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
