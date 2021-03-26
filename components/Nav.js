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
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/commercial'>
              <a>Commercial</a>
            </Link>
          </li>
          <li>
            <Link href='/art'>
              <a>Art</a>
            </Link>
          </li>
          <li>
            <Link href='/culturalEvents'>
              <a>Cultural Events</a>
            </Link>
          </li>
          <li>
            <Link href='/p'>
              <a href='/p'>Private</a>
            </Link>
          </li>
          <li>
            <Link href='/m'>
              <a>Mokymai</a>
            </Link>
          </li>
          <li>
            <Link href='/d'>
              <a href='/'>Dirbtuves</a>
            </Link>
          </li>
          <li>
            <Link href='/idk'>
              <a>IDK</a>
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
