import React, { useEffect, useState } from "react";
import Link from "next/link";
import Drawer from "./Drower";
import Hamburger from "./Hamburger";
import css from "styled-jsx/css";

const { className: hamburgerClassName, styles: hamburgerStyles } = css.resolve`
  @media screen and (min-width: 480px) {
    .root {
      display: none;
    }
  }
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
    return () => {
      window.onscroll = () => {
        setOffset(0);
      };
    };
  }, []);

  return (
    <nav
      style={
        offset > 3
          ? { background: "#16161d", transitionDuration: "0.3s" }
          : { background: "transparent", transitionDuration: "0.3s" }
      }
    >
      {hamburgerStyles}
      <Hamburger
        className={hamburgerClassName}
        toggled={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      <ul className='desctop-nav'>
        <li>
          <Link href='/'>
            <a name='home'>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/artInAction'>
            <a name='art'>Art</a>
          </Link>
        </li>
        <li>
          <Link href='/creativeProduction'>
            <a name='production'>Production</a>
          </Link>
        </li>
        <li>
          <Link href='/workshops'>
            <a name='workshops'>Workshops</a>
          </Link>
        </li>
        <li>
          <Link href='/contacts'>
            <a name='contacts' href='/contacts'>Contacts</a>
          </Link>
        </li>
      </ul>
      <Drawer className={hamburgerClassName} isOpen={isOpen}>
        <ul onClick={() => setIsOpen(!isOpen)}>
          <li>
            <Link href='/'>
              <a name='home'>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/artInAction'>
              <a name='art'>Art</a>
            </Link>
          </li>
          <li>
            <Link href='/creativeProduction'>
              <a name='production'>Production</a>
            </Link>
          </li>
          <li>
            <Link href='/workshops'>
              <a name='workshops'>Workshops</a>
            </Link>
          </li>
          <li>
            <Link href='/contacts'>
              <a name='contacts' href='/contacts'>Contacts</a>
            </Link>
          </li>
        </ul>
      </Drawer>
    </nav>
  );
};

export default Nav;
