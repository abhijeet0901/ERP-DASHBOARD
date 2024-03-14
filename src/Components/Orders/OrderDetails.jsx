import React, { useEffect, useState } from "react";
import "./OrderDetails.css";

function OrderDetails() {
  const [order, setOrder] = useState();
  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders"));
    const id = JSON.parse(localStorage.getItem("order_id"));
    const tempOrder = orders?.filter((order) => order.id === parseInt(id))[0];
    setOrder(tempOrder);
  }, []);

  return (
    <div className="order-details-container">
      <h2>Order Details</h2>
      {order && (
        <table className="order-details-table">
          <tbody>
            <tr>
              <td className="detail-label">Order ID:</td>
              <td>{order.id}</td>
            </tr>
            <tr>
              <td className="detail-label">Customer Name:</td>
              <td>{order.customerName}</td>
            </tr>
            <tr>
              <td className="detail-label">Order Date:</td>
              <td>{order.orderDate}</td>
            </tr>
            <tr>
              <td className="detail-label">Status:</td>
              <td className={`statusde-${order.status.toLowerCase()}`}>
                {order.status}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default OrderDetails;
