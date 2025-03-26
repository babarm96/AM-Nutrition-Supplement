import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Form.css"; // Custom styles

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
        "FlzQftFg9BMDPKjWc" // public key
      )
      .then(() => setSuccess(true))
      .catch((error) => console.error("EmailJS Error:", error));
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="signup-container"
    >
      <div className="card shadow-lg p-4">
        {/* <h2 className="text-center text-white">Inquiry</h2> */}
        {success && (
          <p className="text-success text-center">Inquiry sent successfully!</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                className="form-control"
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                className="form-control"
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
              className="form-control"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              placeholder="Say something..."
              className="form-control"
              rows="4"
              required
              onChange={handleChange}
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            type="submit"
            className="btn btn-dark w-100"
          >
            Submit
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default Form;
