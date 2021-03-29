import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  return (
    <nav>
      {hamburgerStyles}
      <Hamburger
        className={hamburgerClassName}
        toggled={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      <Image src='/easylog2.svg' alt='logo' width={100} height={70} />
      <ul className='desctop-nav'>
        <li>
          <Link href='/'>
            <a>Pagrindinis</a>
          </Link>
        </li>
        <li>
          <Link href='/art'>
            <a>Art</a>
          </Link>
        </li>
        <li>
          <Link href='/creativeProduction'>
            <a>Renginiai</a>
          </Link>
        </li>
        <li>
          <Link href='/contacts'>
            <a href='/contacts'>Kontaktai</a>
          </Link>
        </li>
      </ul>
      <Drawer className={hamburgerClassName} isOpen={isOpen}>
        <ul onClick={() => setIsOpen(!isOpen)}>
          <li>
            <Link href='/'>
              <a>Pagrindinis</a>
            </Link>
          </li>
          <li>
            <Link href='/commercial'>
              <a>Komercija</a>
            </Link>
          </li>
          <li>
            <Link href='/art'>
              <a>Art</a>
            </Link>
          </li>
          <li>
            <Link href='/creativeProduction'>
              <a>Renginiai</a>
            </Link>
          </li>
          <li>
            <Link href='/p'>
              <a href='/p'>Privatiems</a>
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
              <a href='/contacts'>Kontaktai</a>
            </Link>
          </li>
        </ul>
      </Drawer>
    </nav>
  );
};

export default Nav;
