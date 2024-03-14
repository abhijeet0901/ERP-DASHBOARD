import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaCalendarAlt } from "react-icons/fa";
import "./OrderCalendar.css";

const OrderCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [orders] = useState([
    {
      id: 1,
      name: "Laptop",
      date: "2024-03-15",
      status: "Pending",
      deliveryAddress: "123 Main St, City, Country",
    },
    {
      id: 2,
      name: "Phone",
      date: "2024-03-15",
      status: "Completed",
      deliveryAddress: "456 Oak St, Town, Country",
    },
    {
      id: 3,
      name: "Charger",
      date: "2024-03-16",
      status: "Processing",
      deliveryAddress: "789 Elm St, Village, Country",
    },
    {
      id: 4,
      name: "Earphone",
      date: "2024-03-17",
      status: "Cancelled",
      deliveryAddress: "321 Pine St, Hamlet, Country",
    },
    {
      id: 5,
      name: "Mouse",
      date: "2024-03-17",
      status: "Pending",
      deliveryAddress: "654 Maple St, Borough, Country",
    },
  ]);

  const ordersForSelectedDate = selectedDate
    ? orders.filter((order) => {
        const orderDate = new Date(order.date);
        return (
          orderDate.getDate() === selectedDate.getDate() &&
          orderDate.getMonth() === selectedDate.getMonth() &&
          orderDate.getFullYear() === selectedDate.getFullYear()
        );
      })
    : orders;

 
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false); 
  };

  return (
    <div className="orders-calendar-container">
      <h2>Orders Calendar View</h2>
      <button onClick={() => setShowCalendar(!showCalendar)}>
        <FaCalendarAlt />
      </button>
      {showCalendar && (
        <Calendar onChange={handleDateChange} value={selectedDate} />
      )}
      <h3>Orders for {selectedDate.toDateString()}</h3>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Delivery Address</th>
          </tr>
        </thead>
        <tbody>
          {ordersForSelectedDate.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.name}</td>
              <td>{order.date}</td>
              <td className={`status-${order.status.toLowerCase()}`}>
                {order.status}
              </td>
              <td>{order.deliveryAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderCalendar;
