import React, { useState } from "react";
import "./AddProduct.css";

const AddProduct = ({ onAddProduct }) => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleAddProduct = () => {
    if (!productName || !category || !quantity || !price) {
      alert("Please fill in all fields");
      return;
    }
    console.log("sdfs", localStorage.getItem("products"));
    const newProduct = {
      name: productName,
      category,
      quantity: parseInt(quantity),
      price: parseFloat(price),
    };
    const product = JSON.parse(localStorage.getItem("products"));
    console.log(product);
    localStorage.setItem(
      "products",
      JSON.stringify([...product, { id: product.length + 1, ...newProduct }])
    );

    setProductName("");
    setCategory("");
    setQuantity("");
    setPrice("");
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <div className="input-div">
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="add-btn">
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  );
};

export default AddProduct;
