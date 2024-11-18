import React from "react";
import "./LoginPage.css";
import googleImage from "../../assets/loginPage/goggle.png";
import microsoftImage from "../../assets/loginPage/microsoft.png";
import appleImage from "../../assets/loginPage/apple.png";

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-logo">HubSpot</div>
      <div className="login-form">
        <h1>Create your free account</h1>
        <p>100% free. No credit card needed.</p>
        <div className="login-buttons">
          <button className="google-button">
            <img src={googleImage} alt="Google" />
            Continue with Google
          </button>
          <button className="microsoft-button">
            <img src={microsoftImage} alt="Microsoft" />
            Sign up with Microsoft
          </button>
          <button className="apple-button">
            <img src={appleImage} alt="Apple" />
            Sign up with Apple
          </button>
        </div>
        <div className="divider">
          <span>Or</span>
        </div>
        <div className="email-section">
          <input
            type="email"
            className="email-input"
            placeholder="Email address"
          />
          <button className="verify-button">Verify email</button>
        </div>
        <p className="privacy-policy">
          We’re committed to your privacy. HubSpot uses the information you
          provide to us to contact you about our relevant content, products, and
          services. You may unsubscribe from these communications at any time.
          For more information, check out our{" "}
          <a href="/privacy-policy" target="_blank">
            Privacy Policy
          </a>
          .
        </p>
      </div>
      <footer className="footer">Manage Cookies</footer>
    </div>
  );
}

export default LoginPage;
