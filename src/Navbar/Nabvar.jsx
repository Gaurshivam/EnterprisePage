import React from 'react';
import './Navbar.css'

const Nabvar = () => {
  return (
    <div className='Navbar'>
      <div className='title'>
        <h1>Shivam Gaur</h1>
      </div>
      <div className='menu'>
        <a href="/#">Plateform</a>
        <a href="/#">Plan</a>
        <a href="/#">Enterprise</a>
        <a href="/#">Resources</a>
        <a href="/#">Education</a>
      </div>
      <div className='Login'>
        <a href="/#">Contact Us</a>
        <a href="/#">Log In</a>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default Nabvar;
