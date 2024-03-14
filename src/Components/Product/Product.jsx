import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCheck,
  faTimes,
  faPencilAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./product.css";

function Product() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "MacBook",
      category: "Laptop",
      price: "₹170000",
      quantity: 5,
    },
    {
      id: 2,
      name: "iPhone 15",
      category: "Mobile",
      price: "₹100000",
      quantity: 2,
    },
    {
      id: 3,
      name: "buds 2r",
      category: "EarPhone",
      price: "₹12500",
      quantity: 8,
    },
    {
      id: 4,
      name: "Nike Shoes",
      category: "Shoes",
      price: "₹4000",
      quantity: 3,
    },
    {
      id: 5,
      name: "Rare-Rabit Shirt",
      category: "Shirt",
      price: "₹2500",
      quantity: 12,
    },
  ]);
  const [newProduct, setNewProduct] = useState({});
  const [editProductId, setEditProductId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});
  const [searchCategory, setSearchCategory] = useState("");

  useEffect(() => {
    console.log(products);
  }, [products]);

  useEffect(() => {
    if (localStorage.getItem("products")) {
      setProducts(JSON.parse(localStorage.getItem("products")));
    }
  }, []);

  const handleAddProduct = () => {
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("products_id", id);
  };

  const handleEditProduct = (id) => {
    setEditProductId(id);
    const productToEdit = products.find((product) => product.id === id);
    setEditedProduct({ ...productToEdit });
  };

  const handleSaveProduct = () => {
    const updatedProducts = products.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setProducts(updatedProducts);
    setEditProductId(null);
    setEditedProduct({});
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleSearch = () => {
    const filteredProducts = products.filter((product) =>
      product.category.toLowerCase().includes(searchCategory.toLowerCase())
    );
    return filteredProducts;
  };

  return (
    <div className="main-div">
      <h2>Product Management</h2>
      <div className="search-container">
        <h3>Search by Category</h3>

        <div className="category">
          <input
            type="text"
            placeholder="Enter category name"
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
          />
          <button onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <div className="table-container">
        <div className="add-button">
          <button className="add-btn" onClick={handleAddProduct}>
            {" "}
            <Link to="/add-product" style={{ textDecoration: "none" }}>
              Add Product
            </Link>
          </button>
        </div>
        <h3>Product List</h3>
        <table className="product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {handleSearch().map((product) => (
              <tr key={product.id}>
                <td>
                  {editProductId === product.id ? (
                    <input
                      type="text"
                      value={editedProduct.name}
                      onChange={(e) =>
                        setEditedProduct({
                          ...editedProduct,
                          name: e.target.value,
                        })
                      }
                    />
                  ) : (
                    product.name
                  )}
                </td>
                <td>
                  {editProductId === product.id ? (
                    <input
                      type="text"
                      value={editedProduct.category}
                      onChange={(e) =>
                        setEditedProduct({
                          ...editedProduct,
                          category: e.target.value,
                        })
                      }
                    />
                  ) : (
                    product.category
                  )}
                </td>
                <td>
                  {editProductId === product.id ? (
                    <input
                      type="number"
                      value={editedProduct.price}
                      onChange={(e) =>
                        setEditedProduct({
                          ...editedProduct,
                          price: e.target.value,
                        })
                      }
                    />
                  ) : (
                    product.price
                  )}
                </td>
                <td>
                  {editProductId === product.id ? (
                    <input
                      type="number"
                      value={editedProduct.quantity}
                      onChange={(e) =>
                        setEditedProduct({
                          ...editedProduct,
                          quantity: e.target.value,
                        })
                      }
                    />
                  ) : (
                    product.quantity
                  )}
                </td>
                <td>
                  {editProductId === product.id ? (
                    <React.Fragment>
                      <button
                        className="icon-btn"
                        onClick={() => handleSaveProduct()}
                      >
                        <FontAwesomeIcon icon={faCheck} />
                      </button>
                      <button
                        className="icon-btn"
                        onClick={() => {
                          setEditProductId(null);
                          setEditedProduct({});
                        }}
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <button
                        className="icon-btn"
                        onClick={() => handleEditProduct(product.id)}
                      >
                        <FontAwesomeIcon icon={faPencilAlt} />
                      </button>
                      <button
                        className="icon-btn"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </React.Fragment>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Product;
