import React from "react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import About from "../components/About";

// baner video 15s
// after banner 2 buttons 'art' 'commerce': DONE
// apacioj foto ir aprastymas
// garso reguliavimas: DONE
// clean minimal style
// galerijoj uzvedus ant nuotrukos full color from black n white
// navigacija sticky: DONE
// set up live DONE
// nav icons no color

// meniniai darbai in vimeo art in action

// video loop
// mygtukai ant virsaus all the time
//nav tranparent

// on hover play button
// text whos project
// directing and production
// count of project with that brand

//on click slideshow

const Banner = () => {
  return (
    <>
      <div className='homebtndiv'>
        <button className='homebtn'>
          <Link href='/creativeProduction'>
            <a>
              <picture>
                <source srcSet='/images/butonlogo1.webp' type='image/webp' />
                <img src='/images/butonlogo1-min.png' alt='logo' />
              </picture>
            </a>
          </Link>
        </button>
        <button className='homebtn'>
          <Link href='/art'>
            <a>
              <picture>
                <source srcSet='/images/buttonlogo2.webp' type='image/webp' />
                <img src='/images/buttonlogo2-min.png' alt='logo' />
              </picture>
            </a>
          </Link>
        </button>
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
      <div className='banner-button'>
        <Link href='/#about'>
          <a data-page='#about'>
            <MdKeyboardArrowDown size={100} />
          </a>
        </Link>
      </div>
      <a name='about'></a>
      {/* <About name='about' /> */}
    </>
  );
};

export default Banner;
