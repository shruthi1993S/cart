// src/components/ProductList.js
import React from 'react';
import './ProductList.css';

const ProductList = ({ products, cart, addToCart, removeFromCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <div className="product_img">
         <img src={product.img}/>
         </div>
          <h2>{product.title}</h2>
          <p>Price:{product.price}</p>
          
          {cart.find((item) => item.id === product.id) ? (
            <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
          ) : (
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;


