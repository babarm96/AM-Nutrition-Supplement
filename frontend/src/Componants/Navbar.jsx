import React, {useState}from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
  const location = useLocation();

  const [isVisible, setIsVisible] = useState(true);
  const isDropdownActive =
  location.pathname === "/action" ||
  location.pathname === "/another-action" ||
  location.pathname === "/something-else";

  
  return (
    <>
{
isVisible && (
      <div
        className="d-flex items-center px-4  w-full"
        style={{ background: "#75f542", display: "flex", alignItems: "center", height:'40px' }}
      >
        {/* Contact Number on the Left */}
        <span className="text-black font-bold  whitespace-nowrap" style={{ marginRight: "200px", fontSize:"15px" }}>
         <b> 📞 Contact: 9075014816</b>
        </span>

        {/* Marquee Wrapper with Fixed Width */}
        <div
          style={{
            flex: 1, // Makes the marquee take available space
            maxWidth: "60%", // Keeps it centered
            overflow: "hidden",
            whiteSpace: "nowrap",
            marginRight: "100px",
            fontSize: '25px'
          }}
        >
          <marquee behavior="scroll" direction="left" className="text-black font-semibold fs-6"  style={{ marginRight: "100px" }}>
           <b> ✅ All Payment Accepted | 🛒 Sale 30% to 40% Off on Selected Items | ⏳ Ends in: Limited Time! | 🚚 All India Delivery Available</b>
          </marquee>
        </div>

        {/* Close Button on the Rightmost Corner */}
        <button
          onClick={() => setIsVisible(false)}
          className="text-black font-bold "
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "12px",
            marginLeft: "auto", // Pushes the button to the rightmost side
            paddingRight: "10px", // Adds a small gap from the right edge
          }}
        >
          ❌
        </button>
      </div>
    )
  }

    
    <nav className="navbar bg-body-tertiary">
      <div className="container d-flex justify-content-between align-items-center">
        
        {/* Logo Section */}
        <Link className="navbar-brand " to="/">
          <img src="/assets/Logo.jpg" alt="Logo" className="img-fluid " style={{ width: "70px", height: "auto" }}/>
        </Link>

        {/* Cart Icon with Badge */}
        <li className="nav-item list-unstyled">
          <NavLink className="nav-link position-relative text-dark" to="/cart">
            <i className="bi bi-cart fs-4"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3
            </span>
          </NavLink>
        </li>

      </div>
    </nav>





<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand ms-5" to="/"> <span className="bi bi-geo-alt-fill me-1 text-danger "> <span className='text-dark' style={{fontSize:"15px"}}>- FIND A STORE</span> </span></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto ">
        <li className="nav-item mx-4 ">
          <NavLink className="nav-link fw-bold " aria-current="page" to ="/">Home</NavLink>
        </li>
<li className="nav-item  dropdown mx-4">
      <Link
        className={`nav-link fw-bold dropdown-toggle ${isDropdownActive ? "active" : ""}`}
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Products
      </Link>
      <ul className="dropdown-menu">
        <li>
          <NavLink className="dropdown-item " to="/action">
            Action
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item" to="/another-action">
            Another action
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item" to="/something-else">
            Something else here
          </NavLink>
        </li>
      </ul>
    </li>




        <li className="nav-item mx-4">
          <NavLink className="nav-link fw-bold" to ="/about">About</NavLink>
        </li>
        <li className="nav-item mx-4">
          <NavLink className="nav-link fw-bold" to ="/contact">Conatact Us</NavLink>
        </li>
      </ul>
      <form className="d-flex me-5" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      
      <NavLink class="text-center me-5  text-dark" to="/login">
    <i class="bi bi-person-circle text-dark fs-3"></i>
</NavLink>

    </div>
  </div>
</nav>




    </>
  )
}

export default Navbar
