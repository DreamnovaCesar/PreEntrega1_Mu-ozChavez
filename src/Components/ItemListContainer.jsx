// ItemListContainer.js
import React, { useState } from 'react';
import Navbar from './Navbar';

const ItemListContainer = () => {
  const [items, setItems] = useState(['1', '2', '3', '5']);
  
  const handleIncrement = () => {
    let lastElement = parseInt(items.slice(-1))
    let SecondlastElement = parseInt(items.slice(-2))


    const newItem = lastElement + SecondlastElement;
    
    setItems([...items, newItem]);
  };

  return (
    <div className="bg-gray-300 p-3 shadow-lg">
      <Navbar />
      <h2 className="text-gray-700 font-medium m-4">Item List</h2>
      <ul className="text-gray-700">
        <button onClick={handleIncrement}>Add Item</button>
        {items.map((item, index) => (
          <li className="text-gray-900 font-light p-4" key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;