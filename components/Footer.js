import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logos'>
        <Link href='youtube.com'>
          <a target='_blank'>
            <Image src='/youtube.png' alt='yt-logo' width={25} height={25} />
          </a>
        </Link>
        <Link href='youtube.com'>
          <a target='_blank'>
            <Image src='/facebook.png' alt='yt-logo' width={25} height={25} />
          </a>
        </Link>
        <Link href='youtube.com'>
          <a target='_blank'>
            <Image src='/instagram.png' alt='yt-logo' width={25} height={25} />
          </a>
        </Link>
        <Link href='youtube.com'>
          <a target='_blank'>
            <Image src='/vimeo.png' alt='yt-logo' width={25} height={25} />
          </a>
        </Link>
      </div>
      <p>
        All rights reserved by <i>easy.com</i>
      </p>
    </div>
  );
};

export default Footer;
