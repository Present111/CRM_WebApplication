import React from "react";
import "./SignInPage.css";
import googleImage from "../../assets/loginPage/goggle.png";
import microsoftImage from "../../assets/loginPage/microsoft.png";
import appleImage from "../../assets/loginPage/apple.png";

function SignInPage() {
  return (
    <div className="signin-container-horizontal">
      {/* Header */}
      <header className="signin-header">
        <h1 className="logo">HubSpot</h1>
        <p className="account-prompt">
          Don’t have an account?{" "}
          <a href="/signup" className="signup-link">
            Get started free
          </a>
        </p>
      </header>
      <div class="notification-box">
        <h2>Login faster and safer to your HubSpot account</h2>
        <p>
          Next time we’ll remember how you’d like to sign in so you can skip
          entering an email. You can always go back to{" "}
          <a href="/classic-login" class="classic-login-link">
            classic login
          </a>
          .
        </p>
      </div>

      {/* Main Content */}
      <main className="signin-main-horizontal">
        <div className="signin-left">
          {/* Form */}
          <form className="signin-form">
            <label className="email-label" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="email-input"
            />
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="signin-button">
              Next
            </button>
          </form>
        </div>

        <div className="signin-right">
          {/* Other Sign-in Options */}
          <div className="other-options-horizontal">
            <button className="option-button">
              <img src={googleImage} alt="Google" />
              Sign in with Google
            </button>
            <button className="option-button">
              <img src={microsoftImage} alt="Microsoft" />
              Sign in with Microsoft
            </button>
            <button className="option-button">
              <img src={appleImage} alt="Apple" />
              Sign in with Apple
            </button>
            <button className="option-button">Log in with SSO</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignInPage;
