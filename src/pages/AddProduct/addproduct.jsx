// AddProduct.js

import React, { useState } from "react";
import axios from "axios";
import { makeRequest } from "../../axios";

const AddProduct = () => {
  // const upload = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("file", file);
  //     const res = await makeRequest.post("/upload", formData);
  //     return res.data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const [products, setProducts] = useState([
    { id: 1, name: "", price: 0,catogary:"",imgURL:"",location:"" },
  ]);
//`name`,`catogary`,`price`,`imgURL`,`location`,`userid`
  const handleInputChange = (index, field, value) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, i) => (i === index ? { ...product, [field]: value } : product))
    );
  };

  const handleAddProduct = () => {
    const newProduct = { id: products.length + 1, name: "", price: 0 ,catogary:"",imgURL:"",location:"" };
    setProducts([...products, newProduct]);
  };

  const handleSaveProducts = async () => {
    try {
      // Assuming your Express server is running on http://localhost:3001
      const response = await axios.post("http://localhost:8800/api/product/addproduct", { products });
      console.log("Products added successfully:", response.data);
    } catch (error) {
      console.error("Error adding products:", error);
    }
  };

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <label htmlFor={`productName${index}`}>Product Name:</label>
          <input
            type="text"
            id={`productName${index}`}
            value={product.name}
            onChange={(e) => handleInputChange(index, "name", e.target.value)}
          />

          <label htmlFor={`productPrice${index}`}>Product Price:</label>
          <input
            type="number"
            id={`productPrice${index}`}
            value={product.price}
            onChange={(e) => handleInputChange(index, "price", e.target.value)}
          />
          <label htmlFor={`productPrice${index}`}>Product Category:</label>
          <input
            type="text"
            id={`productPrice${index}`}
            value={product.catogary}
            onChange={(e) => handleInputChange(index, "catogary", e.target.value)}
          />
          <label htmlFor={`productPrice${index}`}>Product ImageURL:</label>
          <input
            type="text"
            id={`productPrice${index}`}
            value={product.imgURL}
            onChange={(e) => handleInputChange(index, "imgURL", e.target.value)}
          />
          <label htmlFor={`productPrice${index}`}>Product Location:</label>
          <input
            type="text"
            id={`productPrice${index}`}
            value={product.location}
            onChange={(e) => handleInputChange(index, "location", e.target.value)}
          />
        </div>
        
      ))}

      <button onClick={handleAddProduct}>Add Product</button>
      <button onClick={handleSaveProducts}>Save Products</button>
    </div>
  );
};

export default AddProduct;
