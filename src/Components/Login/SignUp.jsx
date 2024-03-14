import React, { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agree: false,
  });
  const [error, setError] = useState(""); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (isEmailUnique(formData.email)) {
      
        authenticateUser();
      } else {
        setError("Email already exists. Please use a different email.");
      }
    }
  };

  const validateForm = () => {
    const { name, email, password, agree } = formData;
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      setError("Please fill out all fields.");
      return false;
    }
    if (!agree) {
      setError("Please agree to the terms of use & privacy policy.");
      return false;
    }
    return true;
  };
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isLoggedIn"))) handleLogin();
  }, []);

  const isEmailUnique = (email) => {
    const storedEmails = JSON.parse(localStorage.getItem("emails")) || [];
    return !storedEmails.includes(email);
  };

  const authenticateUser = () => {
    console.log("Logging in with:", formData);
    const storedEmails = JSON.parse(localStorage.getItem("emails")) || [];
    const updatedEmails = [
      ...storedEmails,
      {
        email: formData.email,
        name: formData.name,
        password: formData.password,
      },
    ];
    localStorage.setItem("emails", JSON.stringify(updatedEmails));
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: formData.email,
        name: formData.name,
        password: formData.password,
      })
    );
    localStorage.setItem("isLoggedIn", true);

    setFormData({
      name: "",
      email: "",
      password: "",
      agree: false,
    });
    setError("");
    navigate("/");
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {error && (
            <p className="error-message" style={{ color: "red" }}>
              {error}
            </p>
          )}
          <div className="loginsignup-agree">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <label htmlFor="agree">
              I agree to the terms of use & privacy policy.
            </label>
          </div>
          <button type="submit">Continue</button>
        </form>
        <p className="loginsignup-login">
          Already have an account? <span onClick={handleLogin}>Login here</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
