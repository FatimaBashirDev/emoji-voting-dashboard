import React from 'react';
import './App.css';

// Import icons from react-icons
import { FaFire, FaStar, FaClock, FaRedo } from 'react-icons/fa';

const Buttons = ({ setFilter }) => {
  return (
    <div className="btn-div" >
      <button onClick={() => setFilter("TRENDING")} className='btns'>
        <FaFire style={{  marginTop:'2px' }} /> Trending
      </button>
      <button onClick={() => setFilter("POPULAR")} className='btns' >
        <FaStar style={{ marginRight: '8px' }} /> Popular
      </button>
      <button onClick={() => setFilter("NEW")} className='btns'>
        <FaClock style={{ marginRight: '8px',paddingTop:'2px',boxSizing:'border-box',fontSize:"17px" }}/> New
      </button>
      <button onClick={() => setFilter("ALL")} className='btns'>
        <FaRedo style={{ marginRight: '8px',paddingTop:'2px',boxSizing:'border-box' }} /> All
      </button>
    </div>
  )
}

export default Buttons;
