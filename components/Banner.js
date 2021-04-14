import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// baner video 15s
// after banner 2 buttons 'art' 'commerce': DONE
// apacioj foto ir aprastymas
// garso reguliavimas: DONE
// clean minimal style
// galerijoj uzvedus ant nuotrukos full color from black n white
// navigacija sticky: DONE
// set up live
// nav icons no color

const Banner = () => {
  const [buttons, setButtons] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setButtons(true);
    }, 3000);
    return () => {
      setButtons(null);
    };
  }, []);

  return (
    <>
      {buttons ? (
        <div className='homebtndiv'>
          <button className='homebtn'>
            <Link href='/creativeProduction'>
              <a>
                <Image
                  src='/images/buttonlogo1.png'
                  alt='button logo'
                  width={300}
                  height={200}
                />
              </a>
            </Link>
          </button>
          <button className='homebtn'>
            <Link href='/art'>
              <a>
                <Image
                  src='/images/buttonlogo2.png'
                  alt='button logo'
                  width={300}
                  height={200}
                />
              </a>
            </Link>
          </button>
        </div>
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
            <source src='/images/EASYshowreel.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </>
  );
};

export default Banner;
