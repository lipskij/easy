import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// baner video 15s
// after banner 2 buttons 'art' 'commerce'
// apacioj foto ir aprastymas
// garso reguliavimas
// clean minimal style
// galerijoj uzvedus ant nuotrukos full color from black n white
// navigacija sticky

const Banner = () => {
  const [buttons, setButtons] = useState(false);
  setTimeout(() => {
    setButtons(
      <div className='homebtndiv'>
        <button className='homebtn'><Image src='/easylog2.svg' alt='logh' width={270} height={200}/></button>
        <button className='homebtn'><Image src='/easyart.png' alt='logh' width={270} height={200}/></button>
      </div>
    );
  }, 3000);
  return (
    <>
      <div className='banner'>
        <Image src='/easylog2.svg' alt='logo' width={270} height={150} />
      </div>
      {buttons ? (
        buttons
      ) : (
        <div className='banner-vid'>
          <video width='100%' height='auto' autoPlay muted loop>
            <source src='EASYshowreel.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </>
  );
};

export default Banner;
