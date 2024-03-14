import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretLeft, FaCaretRight, FaUserShield } from "react-icons/fa";
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
        <Link to="/" className="sidebar-link">
          <li className="sidebar-list-item">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </li>
        </Link>
        <Link to="/products" className="sidebar-link">
          <li className="sidebar-list-item">
            <BsFillArchiveFill className="icon" /> Products
          </li>
        </Link>
        <Link to="/orders" className="sidebar-link">
          <li className="sidebar-list-item">
            <BsFillGrid3X3GapFill className="icon" />
            Orders
          </li>
        </Link>
        <Link to="/calendar" className="sidebar-link">
          <li className="sidebar-list-item">
            <BsCalendarFill className="icon" /> Calendar
          </li>
        </Link>
        <Link to="/inventory" className="sidebar-link">
          <li className="sidebar-list-item">
            <BsListCheck className="icon" /> Inventory
          </li>
        </Link>
        <Link to="/reports" className="sidebar-link">
          <li className="sidebar-list-item">
            <BsMenuButtonWideFill className="icon" /> Reports
          </li>
        </Link>
        <Link to="/settings" className="sidebar-link">
          <li className="sidebar-list-item">
            <BsFillGearFill className="icon" /> Setting
          </li>
        </Link>
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
        <Link to="/" className="sidebar-link">
          <li className="sidebar-list-item">
            <BsGrid1X2Fill className="icon" />
          </li>
        </Link>
        <Link to="/products" className="sidebar-link">
          <li className="sidebar-list-item">
            <BsFillArchiveFill className="icon" />
          </li>
        </Link>
        <Link to="/orders" className="sidebar-link">
          <li className="sidebar-list-item">
            <BsFillGrid3X3GapFill className="icon" />
          </li>
        </Link>
        <Link to="/calendar" className="sidebar-link">
          <li className="sidebar-list-item">
            <BsCalendarFill className="icon" />
          </li>
        </Link>
        <Link to="/inventory" className="sidebar-link">
          <li className="sidebar-list-item">
            <BsListCheck className="icon" />
          </li>
        </Link>
        <Link to="/reports" className="sidebar-link">
          <li className="sidebar-list-item">
            <BsMenuButtonWideFill className="icon" />
          </li>
        </Link>
        <Link to="/settings" className="sidebar-link">
          <li className="sidebar-list-item">
            <BsFillGearFill className="icon" />
          </li>
        </Link>
      </ul>
    </aside>
  );
}

export default Sidebar;
