import React, { useState } from 'react';

const EquipmentMarketplace = () => {
  const [products, setProducts] = useState([]);

  const addProduct = () => {
    const newProduct = { name: 'Laptop', description: 'MacBook Pro', price: 1200 };
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h1>Equipment Marketplace</h1>
      <button onClick={addProduct}>Add New Product</button>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.description} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EquipmentMarketplace;

