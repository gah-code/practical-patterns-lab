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
  const [friends, setFriends] = useState(initialFriends);

  // State to toggle Add Friend form visibility
  const [showAddFriend, setShowAddFriend] = useState(false);

  // State to hold selected friend for bill splitting
  const [selectedFriend, setSelectedFriend] = useState(null);

  // Toggle Add Friend form visibility

  // Add new friend to the list and close form

  // Select or deselect friend for bill splitting

  // Update the balance when splitting the bill

  return (
    <div className='app'>
      {/* Friends List Component */}

      <div className='sidebar'>
        <FriendsList friends={friends} />

        {/* Conditional rendering: Show Add Friend form if true */}

        {/* Button to toggle Add Friend form */}
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

// 📚 Component 3: FriendsList and Friend

function FriendsList({ friends }) {
  // Map through friends list to create Friend components

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

// 📚 Component 4: FormAddFriend

function FormAddFriend({}) {
  // State for new friend's name and image

  return (
    <form action='' className='form-add-friend'>
      <label htmlFor=''>Friend name</label>
    </form>
  );
}

// 📚 Component 5: FormSplitBill

function FormSplitBill() {
  // Bill and payment states

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
