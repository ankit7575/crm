import React, { useState } from "react";
import PropTypes from "prop-types";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Form.css";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
    franchiseName: "",
    franchiseAddress: "",
    pinCode: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value || "" }));
  };

  const validateForm = () => {
    const { fullName, email, phone, password, confirmPassword, role, franchiseName, franchiseAddress, pinCode } = formData;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pinCodePattern = /^[0-9]{6}$/;

    if (!fullName.trim()) return "Full Name is required.";
    if (!emailPattern.test(email)) return "Invalid Email Address.";
    if (!phone || phone.length < 10) return "Please enter a valid Phone Number.";
    if (password.length < 6) return "Password should be at least 6 characters.";
    if (password !== confirmPassword) return "Passwords do not match.";
    if (!role) return "Please select a role.";
    if (!franchiseName.trim()) return "Franchise Name is required.";
    if (!franchiseAddress.trim()) return "Franchise Address is required.";
    if (!pinCodePattern.test(pinCode)) return "Invalid PIN Code (must be 6 digits).";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      alert(validationError);
    } else {
      alert("Form submitted successfully!");
    }
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);

  return (
    <form className="signup-form" onSubmit={handleSubmit} noValidate>
      <div className="row">
        <div className="col-lg-6">
          <InputField label="Full Name" id="fullName" name="fullName" value={formData.fullName} placeholder="Enter your full name" onChange={handleChange} required />
        </div>
        <div className="col-lg-6">
          <InputField label="Email Address" id="email" name="email" type="email" value={formData.email} placeholder="Enter your email address" onChange={handleChange} required />
        </div>
        <div className="col-lg-6">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <PhoneInput country="in" value={formData.phone} onChange={handlePhoneChange} inputStyle={{ width: "100%" }} id="phone" required />
        </div>
        <div className="col-lg-6">
          <InputField label="Franchise Name" id="franchiseName" name="franchiseName" value={formData.franchiseName} placeholder="Enter your franchise name" onChange={handleChange} required />
        </div>
        <div className="col-lg-6">
          <InputField label="Franchise Address" id="franchiseAddress" name="franchiseAddress" value={formData.franchiseAddress} placeholder="Enter your franchise address" onChange={handleChange} required />
        </div>
        <div className="col-lg-6">
          <InputField label="PIN Code" id="pinCode" name="pinCode" type="number" value={formData.pinCode} placeholder="Enter your area PIN code" onChange={handleChange} required />
        </div>
        <div className="col-lg-6">
          <PasswordField label="Password" id="password" name="password" value={formData.password} placeholder="Enter your password" showPassword={showPassword} toggleVisibility={togglePasswordVisibility} onChange={handleChange} required />
        </div>
        <div className="col-lg-6">
          <PasswordField label="Confirm Password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} placeholder="Re-enter your password" showPassword={showConfirmPassword} toggleVisibility={toggleConfirmPasswordVisibility} onChange={handleChange} required />
        </div>
        <div className="col-lg-12 pb-3">
          <label htmlFor="role" className="form-label">Select Role</label>
          <select id="role" name="role" value={formData.role} onChange={handleChange} required>
            <option value="">-- Select Role --</option>
            <option value="Franchise Owner">Franchise Owner</option>
            <option value="Sale">Sale</option>
            <option value="Manager">Management</option>
          </select>
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </div>
    </form>
  );
};

const InputField = ({ label, id, name, type = "text", value, placeholder, onChange, required }) => (
  <div className="form-group">
    <label htmlFor={id} className="form-label">{label}</label>
    <input type={type} id={id} name={name} value={value} placeholder={placeholder} onChange={onChange} required={required} />
  </div>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

const PasswordField = ({ label, id, name, value, placeholder, showPassword, toggleVisibility, onChange, required }) => (
  <div className="form-group">
    <label htmlFor={id} className="form-label">{label}</label>
    <div className="password-container">
      <input type={showPassword ? "text" : "password"} id={id} name={name} value={value} placeholder={placeholder} onChange={onChange} required={required} />
      <span className="toggle-password" onClick={toggleVisibility}>
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
      </span>
    </div>
  </div>
);

PasswordField.propTypes = { ...InputField.propTypes, showPassword: PropTypes.bool.isRequired, toggleVisibility: PropTypes.func.isRequired };

export default SignUpForm;
