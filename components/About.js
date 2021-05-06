import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className='about'>
        <div>
          <a name='about'></a>
        </div>
        <h1>About me</h1>
        <div className='about-image'>
          <div className='about-picture'></div>
        </div>
        <div className='about-txt'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <p>Let's create something cool together!</p>
        </div>

        <div className='about-btn'>
          <Link href='/contacts'>
            <button>CONTACTS</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
