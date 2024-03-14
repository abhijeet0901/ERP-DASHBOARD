import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home";
import Product from "../Product/Product";
import OrderManagement from "../Orders/OrderManagement";
import OrderDetails from "../Orders/OrderDetails";
import OrderCalendar from "../OrderCalendar/OrderCalendar";
import AddProduct from "../Product/AddProduct";

export const MainRoutes = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/orders" element={<OrderManagement />} />
        <Route path="/orders/view" element={<OrderDetails />} />
        <Route path="/calendar" element={<OrderCalendar />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </div>
  );
};
