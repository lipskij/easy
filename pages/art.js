import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/Art.module.css";

const Art = () => {
  return (
    <div>
      <Head>
        <title>EASY</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1>Art In Action</h1>
        <button>Video</button>
        <button>Dirbtuves</button>
        <button>Mokymai</button>
      </main>
      <Footer />
    </div>
  );
};

export default Art;
