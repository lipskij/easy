import React, { useState } from "react";
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
  return (
    <>
      <nav>
        {hamburgerStyles}
        <Hamburger
          className={hamburgerClassName}
          toggled={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
        <picture>
          <source srcSet='/images/easylog.webp' type='image/webp' />
          <img src='/images/easylog.png' alt='logo' />
        </picture>
        {/* <Image src='/images/easylog.png' alt='logo' width={100} height={50} /> */}
        <ul className='desctop-nav'>
          <li>
            <Link href='/'>
              <a>Pagrindinis</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Apie mus</a>
            </Link>
          </li>
          {/* <li>
            <Link href='/artInAction'>
              <a>Art</a>
            </Link>
          </li>
          <li>
            <Link href='/creativeProduction'>
              <a>Renginiai</a>
            </Link>
          </li> */}
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
              <Link href='/'>
                <a>Apie mus</a>
              </Link>
            </li>
            {/* <li>
              <Link href='/artInAction'>
                <a>Art</a>
              </Link>
            </li>
            <li>
              <Link href='/creativeProduction'>
                <a>Renginiai</a>
              </Link>
            </li> */}
            <li>
              <Link href='/contacts'>
                <a href='/contacts'>Kontaktai</a>
              </Link>
            </li>
          </ul>
        </Drawer>
        <div className='botm-nav'>
          <ul className='second-nav'>
          <li>
              <Link href='/commercial'>
                <a>Reklamos</a>
              </Link>
            </li>
            <li>
              <Link href='/creativeProduction'>
                <a>Renginiai</a>
              </Link>
            </li>
            <li>Fotosesijos</li>
            <li>
              <Link href='/artInAction'>
                <a>Dirbtuves</a>
              </Link>
            </li>
            <li>
              <Link href='/artInAction'>
                <a>Mokymai</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
