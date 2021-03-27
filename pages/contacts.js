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
          <div className={styles.listItem}>
            <p>Youtube</p>
            <Link href='https://www.youtube.com/channel/UC5Vj1RUDT50AN21wZqGvq3Q'>
              <a className={styles.logo} target='_blank'>
                <Image
                  src='/youtube.png'
                  alt='yt-logo'
                  width={50}
                  height={50}
                />
              </a>
            </Link>
            <p>Our latest work and projects.</p>
          </div>
          <div className={styles.listItem}>
            <p>Facebook </p>
            <Link href='https://www.facebook.com/easycreativeproduction/'>
              <a className={styles.logo} target='_blank'>
                <Image
                  src='/facebook.png'
                  alt='fb-logo'
                  width={50}
                  height={50}
                />
              </a>
            </Link>
            <p>New's and glimpse in to the backstage.</p>
          </div>
          <div className={styles.listItem}>
            <p>Vimeo</p>
            <Link href='https://vimeo.com/user9888997'>
              <a className={styles.logo} target='_blank'>
                <Image
                  src='/vimeo.png'
                  alt='vimeo-logo'
                  width={50}
                  height={50}
                />
              </a>
            </Link>
            <p>Whatch our showreeel's and tell us what you think!</p>
          </div>
          <div className={styles.listItem}>
            <p>Instagram</p>
            <Link href='https://www.instagram.com/easycreativeproduction/'>
              <a className={styles.logo} target='_blank'>
                <Image
                  src='/instagram.png'
                  alt='instagram-logo'
                  width={50}
                  height={50}
                />
              </a>
            </Link>
            <p>Follow us on instagram, be first to know what we're up to.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contacts;
