

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./Login.css";
 
const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
 
  const handleRegisterClick = () => {
    setIsActive(true);
  };
 
  const handleLoginClick = () => {
    setIsActive(false);
  };
 
  const checkPasswordStrength = (password) => {
    if (password.length < 6) {
      setPasswordStrength("Weak");
    } else if (password.length < 10) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Strong");
    }
  };
 
  return (
    <div className="first-body">
      <div className={`container ${isActive ? "active" : ""}`} id="container">
        {/* Sign Up Form */}
        <div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGooglePlusG} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => checkPasswordStrength(e.target.value)}
              required
            />
            <div className={`password-strength ${passwordStrength.toLowerCase()}`}>
              {passwordStrength && `Password Strength: ${passwordStrength}`}
            </div>
            <button>Sign Up</button>
          </form>
        </div>
 
        {/* Log In Form */}
        <div className="form-container sign-in">
          <form>
            <h1>Log In</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGooglePlusG} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <span>or use your email and password</span>
            <input type="email" placeholder="Email" required />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => checkPasswordStrength(e.target.value)}
              required
            />
            <a href="#">Forgot Your Password?</a>
            <button>Log In</button>
          </form>
        </div>
 
        {/* Toggle Section */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all the features</p>
              <button className="hidden" onClick={handleLoginClick}>
                Log In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all the features</p>
              <button className="hidden" onClick={handleRegisterClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Login;


