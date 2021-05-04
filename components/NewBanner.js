import React from "react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

const NewBanner = () => {
  return (
    <>
      <div className='banner'>
        <div>
          <h1>EASY Production</h1>
          <h2>Short Movies, Commercials, Art</h2>
        </div>
        <div className='banner-btn'>
          <Link href='/creativeProduction'>
            <a>
              <button>CREATIVE PRODUCTION</button>
            </a>
          </Link>
          <Link href='/artInAction'>
            <a>
              <button className='button-art'>ART IN ACTION</button>
            </a>
          </Link>
        </div>
        <div className='banner-button'>
          <Link href='/#about'>
            <a data-page='#about'>
              <MdKeyboardArrowDown size={120} />
            </a>
          </Link>
        </div>
      </div>
      <div className='banner-vid'>
        <video
          width='100%'
          height='auto'
          autoPlay
          muted
          loop
          disablePictureInPicture
          controlsList='nofullscreen nodownload noremoteplayback'
        >
          <source src='/images/EASYshowreel.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default NewBanner;
