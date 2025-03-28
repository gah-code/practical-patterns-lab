import React, { useState } from 'react';

// Initial list of items
const initialItems = [
  { id: 1, name: 'Apples', price: 5, quantity: 2, balance: 0 },
  { id: 2, name: 'Bananas', price: 3, quantity: 1, balance: 0 },
];

export default function ShoppingListApp() {
  /// Toggle Add Item form

  // Add a new item

  // Select or deselect an item

  // Split payment for selected item
  return (
    <div className='app'>
      <div className='sidebar'>
        {/* List of Items */}
        <ul>
          <li>name</li>
        </ul>

        {/* Toggle Button for Add Item Form */}
      </div>

      {/* Split Payment Form */}
    </div>
  );
}
