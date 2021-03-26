import React from "react";
import Head from "next/head";
import styles from "../styles/Contacts.module.css";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Contacts = () => {
  return (
    <>
      <Head>
        <title>EASY</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <div className={styles.container}>
        <div className={styles.list}>
          <p>Youtube</p>
          <Link href='https://www.youtube.com/'>
            <a
              className={styles.logo}
              href='https://www.youtube.com/'
              target='_blank'
            >
              <Image src='/youtube.png' alt='yt-logo' width={50} height={50} />
            </a>
          </Link>
          <p>Facebook </p>
          <a
            className={styles.logo}
            href='https://www.facebook.com/'
            target='_blank'
          >
            <Image src='/facebook.png' alt='fb-logo' width={50} height={50} />
          </a>
          <p>Vimeo</p>
          <a className={styles.logo} href='https://vimeo.com/' target='_blank'>
            <Image src='/vimeo.png' alt='vimeo-logo' width={50} height={50} />
          </a>
          <p>Instagram</p>
          <a
            className={styles.logo}
            href='https://www.instagram.com/'
            target='_blank'
          >
            <Image
              src='/instagram.png'
              alt='instagram-logo'
              width={50}
              height={50}
            />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contacts;
