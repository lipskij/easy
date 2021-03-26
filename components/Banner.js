import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className='banner'>
        <Image src='/easylog1.png' alt='logo' width={270} height={150} />
      </div>
      <div className='banner-vid'>
        <video  width='100%' height="auto" autoPlay muted loop>
          <source src='EASYshowreel.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default Banner;
