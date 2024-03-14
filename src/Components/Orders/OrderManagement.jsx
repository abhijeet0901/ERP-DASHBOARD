import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faInfoCircle,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./ordermanagement.css";
import Calendar from "./Calendar";

function OrderManagement() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: "John Doe",
      orderDate: new Date("2024-03-09"),
      status: "Pending",
    },
    {
      id: 2,
      customerName: "Jane Smith",
      orderDate: new Date("2024-03-08"),
      status: "Shipped",
    },
    {
      id: 3,
      customerName: "Alice Johnson",
      orderDate: new Date("2024-03-07"),
      status: "Delivered",
    },
  ]);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false); 

  const handleViewOrderDetails = (id) => {
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.setItem("order_id", id);
    navigate(`/orders/view`);
  };

  const handleToggleDropdown = (id) => {
    setSelectedOrderId(selectedOrderId === id ? null : id);
    setShowDropdown(!showDropdown);
  };

  const handleUpdateStatus = (id, newStatus) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === id) {
        return { ...order, status: newStatus };
      }
      return order;
    });
    setOrders(updatedOrders);
    setShowDropdown(false);
  };

  const handleDeleteOrder = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
  };

  const handleDateClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const filteredOrders = selectedDate
    ? orders.filter(
        (order) =>
          order.orderDate.toDateString() === selectedDate.toDateString()
      )
    : orders;

  return (
    <div className="orders-container">
      <h2>Orders Management</h2>
      <div className="date-icon" onClick={handleDateClick}>
        <FontAwesomeIcon icon={faCalendarAlt} />
        {selectedDate && (
          <span className="selected-date">
            {selectedDate.toLocaleDateString()}
          </span>
        )}
      </div>
      {showCalendar && (
        <div className="calendar-container">
          <Calendar onSelectDate={handleDateSelection} />
        </div>
      )}
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate.toDateString()}</td>
              <td>
                {selectedOrderId === order.id && showDropdown ? (
                  <div className="status-dropdown">
                    <span
                      className="status-option"
                      onClick={() => handleUpdateStatus(order.id, "Pending")}
                    >
                      Pending
                    </span>
                    <span
                      className="status-option"
                      onClick={() => handleUpdateStatus(order.id, "In Transit")}
                    >
                      In Transit
                    </span>
                    <span
                      className="status-option"
                      onClick={() => handleUpdateStatus(order.id, "Shipped")}
                    >
                      Shipped
                    </span>
                    <span
                      className="status-option"
                      onClick={() => handleUpdateStatus(order.id, "Delivered")}
                    >
                      Delivered
                    </span>
                  </div>
                ) : (
                  <div onClick={() => handleToggleDropdown(order.id)}>
                    {order.status}
                  </div>
                )}
              </td>
              <td>
                <FontAwesomeIcon
                  icon={faEdit}
                  className={`icon update-icon`}
                  onClick={() => handleToggleDropdown(order.id)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className={`icon delete-icon`}
                  onClick={() => handleDeleteOrder(order.id)}
                />
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className={`icon view-icon`}
                  onClick={() => handleViewOrderDetails(order.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderManagement;
