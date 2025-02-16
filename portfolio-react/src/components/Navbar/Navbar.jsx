import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const handleScroll = (id) => {
    setMenu(id); // Update the active menu state
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu(); // Close the mobile menu after clicking a link
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Harsh Choudhary" className='logo' />
      <IoIosMenu onClick={openMenu} className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <IoCloseOutline onClick={closeMenu} className='nav-mob-close' />
        <li>
          <p
            onClick={() => handleScroll('home')}
            className={menu === 'home' ? 'active' : ''}
          >
            Home
          </p>
        </li>
        <li>
          <p
            onClick={() => handleScroll('about')}
            className={menu === 'about' ? 'active' : ''}
          >
            About Me
          </p>
        </li>
        <li>
          <p
            onClick={() => handleScroll('service')}
            className={menu === 'service' ? 'active' : ''}
          >
            Services
          </p>
        </li>
        <li>
          <p
            onClick={() => handleScroll('work')}
            className={menu === 'work' ? 'active' : ''}
          >
            Portfolio
          </p>
        </li>
        <li>
          <p
            onClick={() => handleScroll('contact')}
            className={menu === 'contact' ? 'active' : ''}
          >
            Contact
          </p>
        </li>
      </ul>
      <div
        className="nav-connect"
        onClick={() => handleScroll('contact')}
      >
        Connect with me
      </div>
    </div>
  );
};

export default Navbar;