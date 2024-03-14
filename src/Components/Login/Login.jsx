import React, { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
  useEffect(() => {
    console.log(localStorage);
    if (JSON.parse(localStorage.getItem("isLoggedIn"))) navigate("/");
  },[]);
  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (validateForm()) {
      authenticateUser();
     
    }
  };

  const validateForm = () => {
    const { email, password } = formData;
    if (email.trim() === "" || password.trim() === "") {
      setError("Please fill out all fields.");
      return false;
    }
  
    return true;
  };

 
  const authenticateUser = () => {
   
    console.log("Logging in with:", formData);
    
    const storedEmails = JSON.parse(localStorage.getItem("emails")) || [];
    console.log(storedEmails);
    const currentUser = storedEmails.filter(
      (email) => email.email == formData.email
    )[0];
    console.log(currentUser);
    if (currentUser.password !== formData.password || !currentUser) {
      setError("Invalid Credentials!");
      return;
    }
    localStorage.setItem("isLoggedIn", true);
   
    setFormData({
      name: "",
      email: "",
      password: "",
      agree: false,
    });
    setError("");
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
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

          <button type="submit">Log In</button>
        </form>
        <p className="loginsignup-login">
          New here? <span onClick={handleSignUp}>Click here</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
