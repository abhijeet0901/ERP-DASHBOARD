import React from "react";
import {
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header({ OpenSidebar }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("user", null);
    navigate("/login");
  };
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div
        className="header-right"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          gap: "5px",
          padding: "10px 20px",
        }}
        onClick={handleLogout}
      >
        <FaPowerOff className="icon" /> Log Out
      </div>
    </header>
  );
}

export default Header;
