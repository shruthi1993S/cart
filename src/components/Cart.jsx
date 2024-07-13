// src/components/Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2><i className="fas fa-shopping-cart"></i> Cart</h2>
      <p>Items in cart: {cart.length}</p>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

