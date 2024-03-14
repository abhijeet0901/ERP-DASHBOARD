
import React from "react";
import "./Category.css"; 

function Category({
  category,
  products,
  editProductId,
  editedProduct,
  handleEditProduct,
  handleDeleteProduct,
  handleSaveProduct,
  setEditProductId,
  setEditedProduct,
}) {
  return (
    <div className="category">
      <h3>{category}</h3>
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((product) => product.category === category)
            .map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  {editProductId === product.id ? (
                    <>
                      <button onClick={() => handleSaveProduct()}>Save</button>
                      <button
                        onClick={() => {
                          setEditProductId(null);
                          setEditedProduct({});
                        }}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEditProduct(product.id)}>
                        Edit
                      </button>
                      <button onClick={() => handleDeleteProduct(product.id)}>
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Category;
