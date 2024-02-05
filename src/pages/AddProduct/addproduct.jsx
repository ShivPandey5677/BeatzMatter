import React from 'react';

const AddProduct = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="home-section">
      <div className="home-content ">
        <div className="add-product-box bg-light-purple p-8 rounded-lg shadow-md">
          <form id="product-form" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="product-name" className="text-sm font-medium text-gray-600">Product Name</label>
              <input type="text" id="product-name" name="product-name" className="mt-1 p-3 w-full border rounded-md" required />
            </div>
            <div className="mb-6">
              <label htmlFor="product-description" className="text-sm font-medium text-gray-600">Description</label>
              <textarea id="product-description" name="product-description" className="mt-1 p-3 w-full border rounded-md" required />
            </div>
            <div className="mb-6">
              <label htmlFor="product-price" className="text-sm font-medium text-gray-600">Price (Rs.)</label>
              <input type="number" id="product-price" name="product-price" className="mt-1 p-3 w-full border rounded-md" required />
            </div>
            <div className="mb-6">
              <label htmlFor="product-image" className="text-sm font-medium text-gray-600">Product Image</label>
              <input type="file" id="product-image" name="product-image" className="mt-1 p-3 w-full border rounded-md" accept="image/*" required />
            </div>
            <div className="mb-6">
              <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
