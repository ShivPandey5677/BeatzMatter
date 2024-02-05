import React from 'react';
import PostAddIcon from '@mui/icons-material/PostAdd';
import FileUploader from '../../components/shared/FileUploader';
const AddProduct = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-1 ">
    <div className="common-container ">
   <div className="max-w-5xl flex-start gap-3 justify-start w-full ">
    <PostAddIcon width ={36} height ={36}></PostAddIcon>
    <h2 className="h3-bold md:h2-bold text-left w-full ">Add Product</h2>
   </div>
        <div className="flex flex-col gap-9 w-full max-w-5xl ">
          <form id="product-form" className="flex flex-col gap-9 w-full max-w-5xl" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 w-full max-w-5xl">
              <label htmlFor="product-name" className="shad-form_label semi-bold">Product Name</label>
              <input type="text" id="product-name" name="product-name" className="shad-input border-primary-500 rounded-md" required />
            </div>
            <div className="flex flex-col gap-5 w-full max-w-5xl">
              <label htmlFor="product-description" className="shad-form_label semi-bold">Description</label>
              <textarea id="product-description" name="product-description" className="shad-textarea custom-scrollbar border-4 border-primary-500" required />
            </div>
            <div className="flex flex-col gap-5 w-full max-w-5xl">
              <label htmlFor="product-price" className="shad-form_label semi-bold">Price (Rs.)</label>
              <input type="number" id="product-price" name="product-price" className="shad-input border-primary-500 rounded-md" required />
            </div>
            <div className="flex flex-col gap-5 w-full max-w-5xl">
              <label htmlFor="product-image" className="shad-form_label semi-bold">Product Image</label>
              <FileUploader/>
            </div>
            <div className="flex gap-4 items-center justify-end">
              <button type="submit" className="px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600" onClick={handleSubmit}>Add Product</button>
            </div>
          </form>
        </div>
        </div>
      
    </div>
  );
};

export default AddProduct;
