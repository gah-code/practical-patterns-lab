// Import React and useState hook
import React, { useState } from 'react';

// Import CSS styles
import './style.css';

// Initial friends list with balance data
const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
}

// 📚 Component 1: EatApp (Parent Component), holds global state, manages visibility of forms and selected firend, passes handlers to child components

export default function EatApp() {
  // State to hold list of friends

  return (
    <div className='app'>
      {/* Friends List Component */}

      <div className='sidebar'>
        <FriendsList />

        {/* Conditional rendering: Show Add Friend form if true */}

        {/* Button to toggle Add Friend form */}
      </div>
    </div>
  );
}

function FriendsList({}) {
  // Map through friends list to create Friend components

  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  // Check if friend is selected to apply class

  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {/* Display balance status dynamically */}

      {friend.balance < 0 && (
        <p className='red'>
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className='green'>
          {friend.name} owes you {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      {/* Button to select or close selection */}

      <Button>button</Button>
    </li>
  );
}

function FormAddFriend({}) {
  // State for new friend's name and image

  return (
    <form action='' className='form-add-friend'>
      <label htmlFor=''>Friend name</label>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className='form-split-bill'>
      <h2>Split a bill with X</h2>
      <label htmlFor=''>Bill value</label>
      <input type='text' name='' id='' />

      <label htmlFor=''>Your expense</label>
      <input type='text' name='' id='' />

      <label htmlFor=''> X's expense</label>
      <input type='text' name='' id='' />

      <label htmlFor=''>Who is paying the bill</label>
      <select name='' id=''>
        <option value='user'>You</option>
        <option value='friend'>X</option>
      </select>

      <Button>Spilt Bill</Button>
    </form>
  );
}
