import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/Art.module.css";
import Slider from "react-slick";
import Image from "next/image";

const Art = () => {
  const setting = {
    focusOnSelect: false,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "20px",
    // fade: true,
    className: "slides",
  };
  return (
    <div>
      <Head>
        <title>EASY</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1>Art Page</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Art;
