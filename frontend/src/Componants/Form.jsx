import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import "../Style/Form.css"; // Updated styles

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_nyq8gvs", // Service ID
        "template_7bmdacp", // Template ID
        formData,
        "FlzQftFg9BMDPKjWc" // Public key
      )
      .then(() => setSuccess(true))
      .catch((error) => console.error("EmailJS Error:", error));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="protein-form-container"
    >
      <div className="protein-form-card shadow-lg p-4">
        {success && (
          <p className="protein-form-success-msg text-success text-center">
            Inquiry sent successfully!
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                className="protein-form-input form-control"
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                className="protein-form-input form-control"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              className="protein-form-input form-control"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              placeholder="Say something..."
              className="protein-form-textarea form-control"
              rows="4"
              required
              onChange={handleChange}
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            type="submit"
            className="protein-form-button btn btn-dark w-100"
          >
            Submit
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default Form;
