import React from "react";
import Head from "next/head";
import styles from "../styles/Contacts.module.css";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaYoutube, FaVimeoV } from "react-icons/fa";
import Link from "next/link";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

const Contacts = () => {
  return (
    <>
      <Head>
        <title>EASY</title>
        <link rel='icon' href='/images/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='Easy creative production' />
      </Head>
      <Nav />
      <div className={styles.container}>
        <div className={styles.list}>
          <div className={styles.listItem}>
            <Link href='https://www.youtube.com/channel/UC5Vj1RUDT50AN21wZqGvq3Q'>
              <a className={styles.logo} target='_blank' rel='noopener'>
                <FaYoutube className='icons' size={32} />
              </a>
            </Link>
          </div>
          <div className={styles.listItem}>
            <Link href='https://www.facebook.com/easycreativeproduction/'>
              <a className={styles.logo} target='_blank' rel='noopener'>
                <AiFillFacebook className='icons' size={32} />
              </a>
            </Link>
          </div>
          <div className={styles.listItem}>
            <Link href='https://vimeo.com/user9888997'>
              <a className={styles.logo} target='_blank' rel='noopener'>
                <FaVimeoV className='icons' size={32} />
              </a>
            </Link>
          </div>
          <div className={styles.listItem}>
            <Link href='https://www.instagram.com/easycreativeproduction/'>
              <a className={styles.logo} target='_blank' rel='noopener'>
                <AiFillInstagram className='icons' size={32} />
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.contacts}>
          <div className={styles.contactsCell}>
            <div className={styles.cell}>
              <h2>AlGINA Bedulskė</h2>
              <h3>EASY Art Director</h3>
              <p>+370 345 3453</p>
              <p>mailas@emailas.com</p>
            </div>
            <div>
              <Image
                src='/images/easylog.png'
                alt='foto'
                width={600}
                height={300}
              />
            </div>
          </div>
          {/* <div className={styles.contactsCell}>
            <div>
              <h2>MIGLĖ Valašaitė</h2>
              <h3>EASY Production Director</h3>
              <p>+370 345 3453</p>
              <p>mailas@emailas.com</p>
            </div>
            <div>
              <Image
                src='/images/easylog.png'
                alt='foto'
                width={300}
                height={150}
              />
            </div>
          </div>
          <div className={styles.contactsCell}>
            <div>
              <h2>INGA Kalpakovaitė</h2>
              <h3>EASY Management Director / Produser</h3>
              <p>+370 345 3453</p>
              <p>mailas@emailas.com</p>
            </div>
            <div>
              <Image
                src='/images/easylog.png'
                alt='foto'
                width={300}
                height={150}
              />
            </div>
          </div> */}
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contacts;
