import React, { useState } from "react";
import "../Style/Login.css";

const Login = ({ showModal, handleClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    age: "",
    address: "",
    city: "",
  });

  const { name, email, password, confirmPassword, mobile, age, address, city } =
    formData;

  // Handle form data change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      console.log("Login Data:", { email, password });
      // Add login API call here
    } else {
      if (password !== confirmPassword) {
        alert("Passwords do not match! ❌");
        return;
      }
      console.log("Sign Up Data:", {
        name,
        email,
        password,
        mobile,
        age,
        address,
        city,
      });
      // Add sign up API call here
    }

    handleClose(); // Close modal after submission
  };

  return (
    <div
      className={`modal fade ${showModal ? "show d-block" : "d-none"}`}
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content protein-auth-container">
          <div className="modal-header">
            <h5 className="modal-title">{isLogin ? "Login" : "Sign Up"}</h5>
            <button type="button" className="close" onClick={handleClose}>
              <span>&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <div className="protein-auth-card">
              <form onSubmit={handleSubmit}>
                {/* Show Full Name for Sign Up */}
                {!isLogin && (
                  <>
                    <div className="form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control protein-auth-input"
                        placeholder="Enter full name"
                        value={name}
                        onChange={handleChange}
                        required={!isLogin}
                      />
                    </div>

                    <div className="form-group">
                      <label>Mobile Number</label>
                      <input
                        type="tel"
                        name="mobile"
                        className="form-control protein-auth-input"
                        placeholder="Enter mobile number"
                        value={mobile}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Age</label>
                      <input
                        type="number"
                        name="age"
                        className="form-control protein-auth-input"
                        placeholder="Enter your age"
                        value={age}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Address</label>
                      <input
                        type="text"
                        name="address"
                        className="form-control protein-auth-input"
                        placeholder="Enter your address"
                        value={address}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        name="city"
                        className="form-control protein-auth-input"
                        placeholder="Enter city"
                        value={city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </>
                )}

                {/* Common Fields (Email & Password) */}
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control protein-auth-input"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control protein-auth-input"
                    placeholder="Enter password"
                    value={password}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Show Confirm Password for Sign Up */}
                {!isLogin && (
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control protein-auth-input"
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                )}

                {/* Submit Button */}
                <div className="d-flex justify-content-between mt-4">
                  {!isLogin && (
                    <>
                      {/* Sign Up Button */}
                      <button type="submit" className="btn protein-auth-btn">
                        Sign Up
                      </button>

                      {/* Back to Login Button */}
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setIsLogin(true)}
                      >
                        Back to Login
                      </button>
                    </>
                  )}

                  {isLogin && (
                    <button type="submit" className="btn protein-auth-btn w-100">
                      Login
                    </button>
                  )}
                </div>
              </form>

              {/* Switch between Login and Sign Up */}
              {isLogin && (
                <p className="text-center mt-3">
                  Don't have an account?{" "}
                  <span
                    className="protein-auth-link"
                    style={{ cursor: "pointer" }}
                    onClick={() => setIsLogin(false)}
                  >
                    Sign Up
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
