import React from "react";
import { FaStore, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";
import Form from "../Componants/Form";


const Contact = () => {
  return (

    <div className="flex flex-col items-center justify-center w-full px-4 m-5">
      {/* Contact Us Section */}
        <div className="container my-5">
              <div
                className="row justify-content-center align-items-center text-center"
                style={{
                  background: "#3B3D3F",
                  borderRadius: "30px",
                  color: "white",
                  padding: "40px 20px",
                }}
              >
                <div className="col-12">
                  <h2
                    className="fw-bold p-3"
                    style={{
                      fontSize: "clamp(40px, 8vw, 100px)",
                      color: "black",
                      fontFamily: "Georgia, serif",
                      textShadow: "2px 2px 6px rgba(230, 219, 219, 0.3)",
                    }}
                  >
                    Contact Us
                  </h2>
                </div>

                {/* Navigation Links */}
                <div className="col-12 d-flex justify-content-center flex-wrap mt-2">
                  <a
                    href="/"
                    className="btn text-light m-2"
                    style={{
                      fontSize: "18px",
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    Home Page
                  </a>
                  <a
                    href="/contact"
                    className="btn text-light m-2"
                    style={{
                      fontSize: "18px",
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    <span>◉</span> Contact
                  </a>
                </div>
              </div>
            </div>


      {/* Contact Info Section - Fully Horizontal with Cards */}
      <div className="container my-5">
        <div className="row justify-content-center text-center g-4">
          
          {/* Store Location */}
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <div className="card h-100" style={{ width: "18rem" }}>
              <div className="card-body">
                <FaStore size={30} />
                <h3 className="fw-bold mt-2">STORE LOCATION</h3>
                <p>7409 Mayfield Rd.</p>
                <p>Woodhaven, NY 11421</p>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <div className="card h-100" style={{ width: "18rem" }}>
              <div className="card-body">
                <FaClock size={30} />
                <h3 className="fw-bold mt-2">OFFICE HOURS</h3>
                <p>Monday – Sunday</p>
                <p>8:00am – 10:00pm</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <div className="card h-100" style={{ width: "18rem" }}>
              <div className="card-body">
                <FaEnvelope size={30} />
                <h3 className="fw-bold mt-2">CONTACT INFO</h3>
                <p>Telephone: (084) 123 - 456 88</p>
                <p>Email: info@example.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>



      <div className="container my-5">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-10 col-lg-8">
            
            {/* Heading */}
            <h2 className="fw-bold">
              <span style={{ color: "gray", fontSize: "clamp(40px, 8vw, 80px)" }}>
                <b>SEND US</b>
              </span>{" "}
              <span style={{ color: "#212529", fontSize: "clamp(40px, 8vw, 80px)" }}>
                <b>FEEDBACK</b>
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4" style={{ fontSize: "clamp(16px, 4vw, 20px)" }}>
              For more information and how we can meet your needs, please fill out the form below and someone from our team will be in touch.
            </p>
              
              <Form />
          </div>
        </div>
      </div>

    </div>
  );
};
 
export default Contact;
