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
    { id: 1, name: "", price:'',catogary:"",imgURL:"",location:"" },
  ]);
//`name`,`catogary`,`price`,`imgURL`,`location`,`userid`
  const handleInputChange = (index, field, value) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, i) => (i === index ? { ...product, [field]: value } : product))
    );
  };

  const handleAddProduct = () => {
    const newProduct = { id: products.length + 1, name: "", price:'' ,catogary:"",imgURL:"",location:"" };
    setProducts([...products, newProduct]);
  };

  const handleSaveProducts = async () => {
    try {
      // Assuming your Express server is running on http://localhost:3001
      const response = await axios.post("http://localhost:8800/api/product/addproduct", products,{
        withCredentials:true,
      });
      console.log("Products added successfully:", response.data);
    } catch (error) {
      console.log("Error adding products:", error);
    }
  };

  return (
    <div className="flex flex-col">
      <h2 className="flex justify-center gradient-text items-center font-bold text-4xl my-8">Enter your Catalog here</h2>
      <div  className="flex flex-wrap justify-center">
      {products.map((product, index) => (
        <div key={index} className=" flex flex-col space-x-1 py-4 gradient-border m-4 p-4 rounded-md">
          <label htmlFor={`productName${index}`} className="text-[#808080]">Product Name:</label>
          <input
            type="text"
            id={`productName${index}`}
            value={product.name}
            onChange={(e) => handleInputChange(index, "name", e.target.value)}
            className="border-2 border-black rounded-md py-2 text-center"
          />

          <label htmlFor={`productPrice${index}`} className="text-[#808080]">Product Price:</label>
          <input
            type="number"
            id={`productPrice${index}`}
            value={product.price}
            onChange={(e) => handleInputChange(index, "price", e.target.value)}
            className="border-2 border-black rounded-md py-1 text-center"
          />
          <label htmlFor={`productPrice${index}`}  className="text-[#808080]">Product Category:</label>
          <input
            type="text"
            id={`productPrice${index}`}
            value={product.catogary}
            onChange={(e) => handleInputChange(index, "catogary", e.target.value)}
            className="border-2 border-black rounded-md py-1 text-center"
          />
          <label htmlFor={`productPrice${index}`}  className="text-[#808080]">Product ImageURL:</label>
          <input
            type="text"
            id={`productPrice${index}`}
            value={product.imgURL}
            onChange={(e) => handleInputChange(index, "imgURL", e.target.value)}
            className="border-2 border-black rounded-md py-1 text-center"
          />
          <label htmlFor={`productPrice${index}`}  className="text-[#808080]">Product Location:</label>
          <input
            type="text"
            id={`productPrice${index}`}
            value={product.location}
            onChange={(e) => handleInputChange(index, "location", e.target.value)}
            className="border-2 border-black rounded-md py-1 text-center"
          />
        </div>
        
      ))}
      </div>
   <div className="flex mx-5 justify-center space-x-1.5">
      <button onClick={handleAddProduct} className=" bg-blue-gradient outline-none p-2 text-white rounded-md">Add More Product</button>
      <button onClick={handleSaveProducts} className="border-2 rounded-md p-2 border-violet-700 hover:border-white hover:bg-blue-gradient hover:text-white">Save Catalog</button>
      </div>
    </div>
  );
};

export default AddProduct;
