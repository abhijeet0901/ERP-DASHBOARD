import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCaretLeft,
  FaCaretRight,
  FaUserShield,
} from "react-icons/fa";
import "./Sidebar.css";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsCalendarFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return !isCollapsed ? (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <FaUserShield className="icon_header" /> Admin
        </div>
      
        <button className="collapse-button" onClick={handleCollapse}>
          <FaCaretLeft className="collapse" size={24} />
        </button>
      
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/" className="sidebar-link">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/products" className="sidebar-link">
            <BsFillArchiveFill className="icon" /> Products
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/orders" className="sidebar-link">
            <BsFillGrid3X3GapFill className="icon" />
            Orders
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/calendar" className="sidebar-link">
            <BsCalendarFill className="icon" /> Calendar
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/inventory" className="sidebar-link">
            <BsListCheck className="icon" /> Inventory
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/reports" className="sidebar-link">
            <BsMenuButtonWideFill className="icon" /> Reports
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/settings" className="sidebar-link">
            <BsFillGearFill className="icon" /> Setting
          </Link>
        </li>
      </ul>
    </aside>
  ) : (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
      style={{ width: "60px", overflow: "hidden" }}
    >
      <button className="collapse-button-collapsed" onClick={handleCollapse}>
        <FaCaretRight className="collapse" size={24} color="black" />
      </button>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <FaUserShield className="icon_header" />
        </div>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/" className="sidebar-link">
            <BsGrid1X2Fill className="icon" />
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/products" className="sidebar-link">
            <BsFillArchiveFill className="icon" />
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/orders" className="sidebar-link">
            <BsFillGrid3X3GapFill className="icon" />
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/calendar" className="sidebar-link">
            <BsCalendarFill className="icon" />
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/inventory" className="sidebar-link">
            <BsListCheck className="icon" />
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/reports" className="sidebar-link">
            <BsMenuButtonWideFill className="icon" />
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/settings" className="sidebar-link">
            <BsFillGearFill className="icon" />
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
