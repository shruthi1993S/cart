// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
const products = [
  {
    id: 1,
    title: "My First Book of Pencil Control",
    author: "by Wonder House Books | 25 April 2018",
    price: 89,
    img: "https://m.media-amazon.com/images/I/810OOg88LoL._AC_UY327_FMwebp_QL65_.jpg",
   
  },
  {
    id: 2,
    title: "108 Panchatantra Stories",
    author: "by Maple Press  | 1 September 2020",
    price: 98,
    img: "https://m.media-amazon.com/images/I/71rmxx8P2qL._AC_UY327_FMwebp_QL65_.jpg",
    
  },
  {
    id: 3,
    title: "Amazing Questions & Answers Science",
    author: "by Om Books Editorial Team  | 25 November 2018",
    price: 143,
    img: "https://m.media-amazon.com/images/I/81Gbz0XnW7L._AC_UY327_FMwebp_QL65_.jpg",
    
  },
  {
    id: 4,
    title: "My First Book of Pencil Control",
    author: "by Wonder House Books | 25 April 2018",
    price: 57,
    img: "https://m.media-amazon.com/images/I/81Gbz0XnW7L._AC_UY327_FMwebp_QL65_.jpg",
   
  },
  {
    id: 5,
    title: "My First 1000 Words",
    author: "by Wonder House Books  | 1 January 2018",
    price: 149,
    img: "https://m.media-amazon.com/images/I/71O-FI7QApL._AC_UY327_FMwebp_QL65_.jpg",
    
  },
  {
    id: 6,
    title: "101 Panchatantra Stories for Children",
    author: "by Om Books Editorial Team | 30 September 2020",
    price: 135,
    img: "https://m.media-amazon.com/images/I/9173YBkMIsL._AC_UY327_FMwebp_QL65_.jpg",
    amount: 1,
  },
  {
    id: 7,
    title: "Pre-School Activities Pack ",
    author: "by Om Books Editorial Team  | 1 January 2021",
    price: 693,
    img: "https://m.media-amazon.com/images/I/913sv4sex3L._AC_UY327_FMwebp_QL65_.jpg",
  
  },
  {
    id: 8,
    title: "Early Learning Library Pack 1",
    author: "by Wonder House Books  | 6 December 2020",
    price: 289,
    img: "https://m.media-amazon.com/images/I/71xMttNhr7L._AC_UY327_FMwebp_QL65_.jpg",
   
  },
  {
    id: 9,
    title: "Blossom Moral Story Book for Kids ",
    author: "by Content Team at Target Publications",
    price: 80,
    img: "https://m.media-amazon.com/images/I/7122h3jWvEL._AC_UY327_FMwebp_QL65_.jpg",
    
  },
  {
    id: 10,
    title: "Brain Activity Book for Kids",
    author: "by Maple Press | 1 September 2021",
    price: 86,
    img: "https://m.media-amazon.com/images/I/7175YpTSa7L._AC_UY327_FMwebp_QL65_.jpg",
    
  },
  {
    id: 11,
    title: "Willy the Silly Panda",
    author: "by Rebecca Smith  | 14 December 2021",
    price: 120,
    img: "https://m.media-amazon.com/images/I/71-ocPGQIJL._AC_UY327_FMwebp_QL65_.jpg",
    
  },
  {
    id: 12,
    title: "Grandma's Bag of Stories",
    author: "by Sudha Murty | 1 January 2015",
    price: 157,
    img: "https://m.media-amazon.com/images/I/81jv44QdNwL._AC_UY327_FMwebp_QL65_.jpg",
   
  },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping Cart</h1>
        <Cart cart={cart} />
      </header>
      <main>
        <ProductList
          products={products}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </main>
    </div>
  );
}

export default App;