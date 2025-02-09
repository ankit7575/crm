import React from "react";
import SignUpAndVerifyForm from "../components/Auth/SignUpForm";  // Assuming this is the sign-up form component
import '../styles/global.css';  // Ensure global styles are included

const SignUpPage = () => {

  return (
    <>
      <div className="container-fluid">
        <div className="registration-page">
          <div className="registration-form-box">
            <h1>Create Your Account</h1>
            
            {/* Pass handleRegistration to child form component */}
            <SignUpAndVerifyForm />

            {/* Buttons for navigating to New Franchise or Login */}
            <div className="row">
              <div className="col-lg-6">
                <div className="forgot-password-container pt-2">
                  <button 
                    onClick={() => alert("Redirecting to New Franchise page...")}  // Placeholder for New Franchise button
                    className="buttonSignUpPage"
                    aria-label="Redirect to New Franchise page"
                  >
                  Forgot Password?
                  </button>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="forgot-password-container pt-2">
                  <button 
                    onClick={() => alert("Redirecting to Log in page...")}  // Placeholder for Log in button
                    className="buttonSignUpPage"
                    aria-label="Redirect to Log in page"
                  >
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
