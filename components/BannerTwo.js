import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import BannerGallery from "./BannerGallery";
import Link from 'next/link'

const BannerTwo = () => {
  return (
    <>
      <div className='banner-two'>
        <div className='banner-two-img'>
          <img
            className='img-three'
            src='/images/easyfoto3.jpeg'
            alt='banner'
          />
          <img className='img-one' src='/images/easyfoto.jpeg' alt='banner' />
          <img className='img-two' src='/images/easyfoto2.jpeg' alt='banner' />
        </div>
        <div className='banner-two-txt'>
          <h1>EASY Creative Production</h1>
          <p>
            <i>
              - super galia yra įsivaizduoti tai, ko nėra realybėje ir padaryti
              taip, kad tai taptų ateitimi!
            </i>
          </p>
          <div className='baner-two-line'></div>
          <div className='banner-two-button'>
            <p>Trumpas darbu pristatymas</p>
            <Link href='/#gallery'>
              <a data-page='#gallery'><MdKeyboardArrowDown size={80} /></a>
            </Link>
          </div>
        </div>
      </div>
      <a name='gallery'></a>
      <BannerGallery name='gallery'/>
    </>
  );
};

export default BannerTwo;
