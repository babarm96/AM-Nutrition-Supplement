import React from "react";
import { FaStore, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";
import Form from "./Form";


const Contact = () => {
  return (

    <div className="flex flex-col items-center justify-center w-full px-4 m-5">
      {/* Contact Us Section */}
      <div
        className="items-center justify-center px-4 m-auto"
        style={{
          height: "300px",
          background: "#F4F4F4",
          borderRadius: "30px",
          textAlign: "center",
          width: "80%",
        }}
      >
        <h2
          className="font-bold p-5"
          style={{
            fontSize: "100px",
            fontFamily: "Georgia, serif",
          }}
        >
          <b>Contact Us</b>
        </h2>

        {/* Navigation Links */}
        <div className="flex m-3">
          <a
            href="/"
            style={{
              fontSize: "20px",
              fontFamily: "Arial, sans-serif",
              textDecoration: "none",
              color: "#333",
              fontWeight: "bold",
            }}
          >
            Home Page
          </a>
          <a
            href="/contact"
            style={{
              fontSize: "20px",
              fontFamily: "Arial, sans-serif",
              textDecoration: "none",
              color: "#333",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
          >
            <span>◉</span> Contact
          </a>
        </div>
      </div>

      {/* Contact Info Section - Fully Horizontal with Cards */}
      <div className="d-flex justify-content-center items-center mt-5 m-auto ">
        {/* Store Location */}
      
        <div className="card mx-5" style={{width:'18rem'}}>
          <div className="card-body">
          <FaStore size={30} />
          <h3 className="font-bold text-lg mt-2">STORE LOCATION</h3>
          <p>7409 Mayfield Rd.</p>
          <p>Woodhaven, NY 11421</p> 
          </div>
          </div>

          <div className="card mx-5" style={{width:'18rem'}}>
          <div className="card-body">
          <FaClock size={30} />
          <h3 className="font-bold text-lg mt-2">OFFICE HOURS</h3>
          <p>Monday – Sunday</p>
          <p>8:00am – 10:00pm</p>
          </div>
          </div>


        <div className="card mx-5" style={{width:'18rem'}}>
          <div className="card-body">
          <FaEnvelope size={30} />
          <h3 className="font-bold text-lg mt-2">CONTACT INFO</h3>
          <p>Telephone: (084) 123 - 456 88</p>
          <p>Email: info@example.com</p>  
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-5">
      {/* Heading */}
      <h2 className="text-5xl font-bold text-center">
        <span className="" style={{color:"gray", fontSize:"80px"}}> <b>SEND US</b>  </span>
        <span className="text-dark" style={{fontSize:"80px"}}> <b>FEEDBACK</b> </span>
      </h2>

      {/* Subtitle */}
      <p className="text-center mt-4" style={{fontSize:"20px"}}>
        For more information and how we can meet your needs, please fill out the form below and someone from our team will be in touch.
      </p>

            <Form />
            

    </div>
    </div>
  );
};
 
export default Contact;
