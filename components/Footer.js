import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaYoutube, FaVimeoV } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logos'>
        <Link href='https://www.youtube.com/channel/UC5Vj1RUDT50AN21wZqGvq3Q'>
          <a aria-label="Youtube" rel='noopener' target='_blank'>{""}
            <FaYoutube className='icons' size={32} />
          </a>
        </Link>
        <Link href='https://www.facebook.com/easycreativeproduction/'>
          <a aria-label="Facebook" rel='noopener' target='_blank'>
            <AiFillFacebook className='icons' size={32} />
          </a>
        </Link>
        <Link href='https://www.instagram.com/easycreativeproduction/'>
          <a aria-label="Instagram" rel='noopener' target='_blank'>{""}
            <AiFillInstagram className='icons' size={32} />
          </a>
        </Link>
        <Link href='https://vimeo.com/user9888997'>
          <a aria-label="Vimeo" rel='noopener' target='_blank'>{""}
            <FaVimeoV className='icons' size={32} />
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
