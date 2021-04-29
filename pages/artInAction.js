import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/Art.module.css";
import VideoData from "../components/VideoData";

// dar du video gaminasi

const Art = () => {
  return (
    <div>
      <Head>
        <title>EASY</title>
        <link rel='icon' href='/images/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='Easy creative production' />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1>Art In Action</h1>
        <div>
          <VideoData />
        </div>
      </main>
      <div id='image-modal'></div>
      <Footer />
    </div>
  );
};

export default Art;
