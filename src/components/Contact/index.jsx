import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    _replyto: "",
    message: "",
    company: "",
  });

  const [confirmation, setConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mpzgrrvo", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setConfirmation(true);
      setFormData({ name: "", _replyto: "", message: "", company: "" }); // reset the form
    } else {
      alert("There was an error. Please try again.");
    }
  };

  return (
    <div>
      <h1>Contact</h1>

      {confirmation ? (
        <p>Thank you for your message. I'll get back to you soon!</p>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="_replyto"
              placeholder="Email"
              required
              value={formData._replyto}
              onChange={handleChange}
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
          <p>
            Alternatively, you can email me directly:{" "}
            <a href="mailto:peter@peterprogramming.com">
              peter@peterprogramming.com
            </a>
          </p>
        </>
      )}
    </div>
  );
}

export default Contact;
