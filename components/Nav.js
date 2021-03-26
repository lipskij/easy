import Link from "next/link";
import React, { useState } from "react";
import Drawer from "./Drower";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <button
        className='menu-button'
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        MENU
      </button>
      <Drawer className={isOpen ? "isOpen" : ""} isOpen={isOpen}>
        <ul onClick={() => setIsOpen(!isOpen)}>
          <li>
            <Link href='/'>
              <a href='/'>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a href='/'>Commercial</a>
            </Link>
          </li>
          <li>
            <Link href='/art'>
              <a href='/art'>Art</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a href='/'>Cultural Events</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a href='/'>Private</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a href='/'>Mokymai</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a href='/'>Dirbtuves</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a href='/'>IDK</a>
            </Link>
          </li>
          <li>
            <Link href='/contacts'>
              <a href='/contacts'>Contacts</a>
            </Link>
          </li>
        </ul>
      </Drawer>
    </nav>
  );
};

export default Nav;
