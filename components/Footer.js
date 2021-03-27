import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logos'>
        <Link href='https://www.youtube.com/channel/UC5Vj1RUDT50AN21wZqGvq3Q'>
          <a rel="noopener" target='_blank'>
            <Image src='/youtube.png' alt='yt-logo' width={25} height={25} />
          </a>
        </Link>
        <Link href='https://www.facebook.com/easycreativeproduction/'>
          <a rel="noopener" target='_blank'>
            <Image src='/facebook.png' alt='fb-logo' width={25} height={25} />
          </a>
        </Link>
        <Link href='https://www.instagram.com/easycreativeproduction/'>
          <a rel="noopener" target='_blank'>
            <Image src='/instagram.png' alt='instagram-logo' width={25} height={25} />
          </a>
        </Link>
        <Link href='https://vimeo.com/user9888997'>
          <a rel="noopener" target='_blank'>
            <Image src='/vimeo.png' alt='vimeo-logo' width={25} height={25} />
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
