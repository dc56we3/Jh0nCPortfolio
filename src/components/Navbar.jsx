import React from 'react';
import person_data from '/icons/person_data.svg';
import person_contact from '/icons/person_contact.svg';
import person_folder from '/icons/person_folder.svg';

function Navbar({ activeIcon }) {
  return (
    <nav className="navbar">
      <a href="#Profile" className={`navbar-icon ${activeIcon === 'Profile' ? 'navbar-icon-active' : ''}`}>
        <img src={person_data} alt="Profile" />
      </a>
      <a href="#Information" className={`navbar-icon ${activeIcon === 'Information' ? 'navbar-icon-active' : ''}`}>
        <img src={person_folder} alt="Information" />
      </a>
      <a href="#Contact" className={`navbar-icon ${activeIcon === 'Contact' ? 'navbar-icon-active' : ''}`}>
        <img src={person_contact} alt="Contact" />
      </a>
    </nav>
  );
}

export default Navbar;