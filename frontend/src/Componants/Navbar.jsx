import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../Style/Navbar.css';
import Login from './Login';

const Navbar = () => {
  const location = useLocation();

  const [isVisible, setIsVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const isDropdownActive =
    location.pathname === "/action" ||
    location.pathname === "/another-action" ||
    location.pathname === "/something-else";

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      {/* Top Strip */}
      {/* {isVisible && (
        <div
          className="d-flex items-center px-4 w-100 custom-top-strip"
          style={{
            background: "#75f542",
            display: "flex",
            alignItems: "center",
            height: '40px',
          }}
        >
          <span className="text-black font-bold custom-top-strip-text">
            <b> 📞 Contact: 9075014816</b>
          </span>
          <div
            style={{
              flex: 1,
              maxWidth: "60%",
              overflow: "hidden",
              whiteSpace: "nowrap",
              marginRight: "100px",
              fontSize: '25px',
            }}
          >
            <marquee behavior="scroll" direction="left" className="text-black font-semibold fs-6 custom-marquee">
              <b> ✅ All Payment Accepted | 🛒 Sale 30% to 40% Off on Selected Items | ⏳ Ends in: Limited Time! | 🚚 All India Delivery Available</b>
            </marquee>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-black font-bold custom-close-btn"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "12px",
              marginLeft: "auto",
              paddingRight: "10px",
            }}
          >
            ❌
          </button>
        </div>
      )} */}

      {isVisible && (
        <div className="container-fluid py-2 custom-top-strip"
        style={{background: "#75f542"}}>
          <div className="row align-items-center">

            {/* Contact Number */}
            <div className="col-12 col-md-3 text-center text-md-start mb-2 mb-md-0">
              <span className="text-black fw-bold custom-top-strip-text">
                📞 Contact: 9075014816
              </span>
            </div>

            {/* Marquee */}
            <div className="col-12 col-md-7">
              <div className="overflow-hidden">
                <marquee behavior="scroll" direction="left" className="text-black fw-semibold fs-6 custom-marquee">
                  ✅ All Payment Accepted | 🛒 Sale 30% to 40% Off on Selected Items | ⏳ Ends in: Limited Time! | 🚚 All India Delivery Available
                </marquee>
              </div>
            </div>

            {/* Close Button */}
            <div className="col-12 col-md-2 text-end mt-2 me-0">
              <button
                onClick={() => setIsVisible(false)}
                className="btn btn-light p-1 custom-close-btn"
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: "20px",
                }}
              >
                ❌
              </button>
            </div>

          </div>
        </div>
      )}


      {/* Logo + Cart Navbar */}
      <nav className="navbar custom-navbar" style={{
  backgroundColor: "#434e55"  // Blended color mix of #495057, #2c3e50, and a faint touch of #f8f9fa
}}>
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="navbar-brand custom-navbar-brand" to="/">
            <img src="/assets/Logo.jpg" alt="Logo" className="img-fluid custom-logo" />
          </Link>

          <NavLink className="nav-link position-relative text-white custom-cart-link" to="/cart">
            <i className="bi bi-cart fs-4"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger custom-cart-badge">
              3
            </span>
          </NavLink>
        </div>
      </nav>

      {/* Main Nav */}
      <nav className="navbar navbar-expand-lg custom-main-nav" style={{
          backgroundColor: "#434e55"  // Blended color mix of #495057, #2c3e50, and a faint touch of #f8f9fa
        }}>
        <div className="container-fluid">
          <NavLink className="navbar-brand ms-5 custom-find-store" to="/">
            <span className="bi bi-geo-alt-fill me-1 text-danger">
              <span className="text-white custom-find-store-text">
                - FIND A STORE
              </span>
            </span>
          </NavLink>

          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto custom-nav-list">
              <li className="nav-item mx-4">
                <NavLink className="nav-link fw-bold custom-nav-link text-white" to="/">Home</NavLink>
              </li>

              <li className="nav-item dropdown mx-4">
                <Link
                  className={` text-white nav-link fw-bold dropdown-toggle ${isDropdownActive ? "active" : ""} custom-dropdown-link`}
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </Link>
                <ul className="dropdown-menu custom-dropdown-menu">
                  <li><NavLink className="dropdown-item custom-dropdown-item" to="/action">Action</NavLink></li>
                  <li><NavLink className="dropdown-item custom-dropdown-item" to="/another-action">Another action</NavLink></li>
                  <li><NavLink className="dropdown-item custom-dropdown-item" to="/something-else">Something else here</NavLink></li>
                </ul>
              </li>

              <li className="nav-item mx-4">
                <NavLink className="nav-link fw-bold custom-nav-link text-white" to="/about">About</NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link fw-bold custom-nav-link text-white" to="/contact">Contact Us</NavLink>
              </li>
            </ul>

            <form className="d-flex me-5" role="search">
              <input className="form-control me-2 custom-search-input" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success custom-search-btn" type="submit">Search</button>
            </form>

            <NavLink className="text-center me-5 custom-login-icon" to="/login">
              <i className="bi bi-person-circle text-white fs-3" onClick={handleOpenModal}></i>
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <Login showModal={showModal} handleClose={handleCloseModal} />
    </>
  );
};

export default Navbar;
