import React, { useState } from 'react';

const Product = ({ product, onChange, onRemove }) => {
  const [name, setName] = useState(product.name || '');
  const [imgUrl, setImgUrl] = useState(product.imgUrl || '');
  const [location, setLocation] = useState(product.location || '');
  const [website, setWebsite] = useState(product.website || '');
  const [price, setPrice] = useState(product.price || 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setName(name === 'name' ? value : name === 'imgUrl' ? value : price);
    setLocation(name === 'location' ? value : name === 'imgUrl' ? imgUrl : location);
    setWebsite(name === 'website' ? value : website);
    setPrice(name === 'price' ? parseFloat(value) : price);

    onChange({
      ...product,
      [name]: value,
      imgUrl,
      location,
      website,
      price,
    });
  };

  const handleRemove = () => {
    onRemove(product.id);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Product Name"
      />
      <input
        type="text"
        name="imgUrl"
        value={imgUrl}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <input
        type="text"
        name="location"
        value={location}
        onChange={handleChange}
        placeholder="Location"
      />
      <input
        type="text"
        name="website"
        value={website}
        onChange={handleChange}
        placeholder="Website"
      />
      <input
        type="number"
        name="price"
        value={price}
        onChange={handleChange}
        placeholder="Price"
      />
      <button type="button" onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Product;