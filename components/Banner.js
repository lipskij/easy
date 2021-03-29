import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// baner video 15s
// after banner 2 buttons 'art' 'commerce'
// apacioj foto ir aprastymas
// garso reguliavimas
// clean minimal style
// galerijoj uzvedus ant nuotrukos full color from black n white
// navigacija sticky

const Banner = () => {
  const [buttons, setButtons] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setButtons(
        <div className='homebtndiv'>
          <button className='homebtn'>
            <Link href='/art'>
              <a>
                <Image
                  src='/butonlogo1.png'
                  alt='button logo'
                  width={270}
                  height={200}
                />
              </a>
            </Link>
          </button>
          <button className='homebtn'>
            <Image
              src='/buttonlogo2.png'
              alt='button logo'
              width={270}
              height={200}
            />
          </button>
        </div>
      );
    }, 3000);
  }, []);
  return (
    <>
      <div className='banner'>
        <Image src='/easylog2.svg' alt='logo' width={270} height={150} />
      </div>
      {buttons ? (
        buttons
      ) : (
        <div className='banner-vid'>
          <video
            controls
            width='100%'
            height='auto'
            autoPlay
            muted
            loop
            disablePictureInPicture
            controlsList='nofullscreen nodownload noremoteplayback'
          >
            <source src='EASYshowreel.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          {/* <button type='button' className='sound-control'>Mute</button> */}
        </div>
      )}
    </>
  );
};

export default Banner;
