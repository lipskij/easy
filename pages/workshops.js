import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";
import styles from "../styles/Art.module.css";
import Footer from "../components/Footer";

const Workshops = () => {
  return (
    <>
      <Head>
        <title>EASY</title>
        <link rel='icon' href='/images/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='Easy creative production' />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1>Dirbtuves</h1>
        <section className={styles.dirbtuvesSection}>
          <div className={styles.dirbtuvesCell}>
            <picture>
              <source srcSet='/images/butonlogo1.webp' type='image/webp' />
              <img src='/images/butonlogo1-min.png' alt='logo' />
            </picture>
            <p>
              Trumpas aprasymas,kuri sugalvos Algina.<br></br>
              Ir kai jau bus keli aprasymai tuomet idesiu cia.<br></br>
              Dar biskis tuscio teksto.<br></br>
              Ir dar kazkiek tuscio teksto.
            </p>
            <h2>Dirbtuviu laikas : 2021 - 06 - 25 diena. 18:00 val. </h2>
            <h3>Kaina - 100 €</h3>
            <button className={styles.video}>Registruotis</button>
          </div>
          <div className={styles.dirbtuvesCell}>
            <picture>
              <source srcSet='/images/butonlogo1.webp' type='image/webp' />
              <img src='/images/butonlogo1-min.png' alt='logo' />
            </picture>
            <p>
              Trumpas aprasymas,kuri sugalvos Algina.<br></br>
              Ir kai jau bus keli aprasymai tuomet idesiu cia.<br></br>
              Dar biskis tuscio teksto.<br></br>
              Ir dar kazkiek tuscio teksto.
            </p>
            <h2>Dirbtuviu laikas : 2021 - 06 - 25 diena. 18:00 val. </h2>
            <h3>Kaina - 100 €</h3>
            <button className={styles.video}>Registruotis</button>
          </div>
          <div className={styles.dirbtuvesCell}>
            <picture>
              <source srcSet='/images/butonlogo1.webp' type='image/webp' />
              <img src='/images/butonlogo1-min.png' alt='logo' />
            </picture>
            <p>
              Trumpas aprasymas,kuri sugalvos Algina.<br></br>
              Ir kai jau bus keli aprasymai tuomet idesiu cia.<br></br>
              Dar biskis tuscio teksto.<br></br>
              Ir dar kazkiek tuscio teksto.
            </p>
            <h2>Dirbtuviu laikas : 2021 - 06 - 25 diena. 18:00 val. </h2>
            <h3>Kaina - 100 €</h3>
            <button className={styles.video}>Registruotis</button>
          </div>
          <div className={styles.dirbtuvesCell}>
            <picture>
              <source srcSet='/images/butonlogo1.webp' type='image/webp' />
              <img src='/images/butonlogo1-min.png' alt='logo' />
            </picture>
            <p>
              Trumpas aprasymas,kuri sugalvos Algina.<br></br>
              Ir kai jau bus keli aprasymai tuomet idesiu cia.<br></br>
              Dar biskis tuscio teksto.<br></br>
              Ir dar kazkiek tuscio teksto.
            </p>
            <h2>Dirbtuviu laikas : 2021 - 06 - 25 diena. 18:00 val. </h2>
            <h3>Kaina - 100 €</h3>
            <button className={styles.video}>Registruotis</button>
          </div>
        </section>

        <h1>Mokymai</h1>
        <section className={styles.dirbtuvesSection}>
          <div className={styles.dirbtuvesCell}>
            <picture>
              <source srcSet='/images/butonlogo1.webp' type='image/webp' />
              <img src='/images/butonlogo1-min.png' alt='logo' />
            </picture>
            <p>
              Trumpas aprasymas,kuri sugalvos Algina.<br></br>
              Ir kai jau bus keli aprasymai tuomet idesiu cia.<br></br>
              Dar biskis tuscio teksto.<br></br>
              Ir dar kazkiek tuscio teksto.
            </p>
            <h2>Dirbtuviu laikas : 2021 - 06 - 25 diena. 18:00 val. </h2>
            <h3>Kaina - 100 € (valandos)</h3>
            <button className={styles.video}>Registruotis</button>
          </div>
          <div className={styles.dirbtuvesCell}>
            <picture>
              <source srcSet='/images/butonlogo1.webp' type='image/webp' />
              <img src='/images/butonlogo1-min.png' alt='logo' />
            </picture>
            <p>
              Trumpas aprasymas,kuri sugalvos Algina.<br></br>
              Ir kai jau bus keli aprasymai tuomet idesiu cia.<br></br>
              Dar biskis tuscio teksto.<br></br>
              Ir dar kazkiek tuscio teksto.
            </p>
            <h2>Dirbtuviu laikas : 2021 - 06 - 25 diena. 18:00 val. </h2>
            <h3>Kaina - 100 € (valandos)</h3>
            <button className={styles.video}>Registruotis</button>
          </div>
          <div className={styles.dirbtuvesCell}>
            <picture>
              <source srcSet='/images/butonlogo1.webp' type='image/webp' />
              <img src='/images/butonlogo1-min.png' alt='logo' />
            </picture>
            <p>
              Trumpas aprasymas,kuri sugalvos Algina.<br></br>
              Ir kai jau bus keli aprasymai tuomet idesiu cia.<br></br>
              Dar biskis tuscio teksto.<br></br>
              Ir dar kazkiek tuscio teksto.
            </p>
            <h2>Dirbtuviu laikas : 2021 - 06 - 25 diena. 18:00 val. </h2>
            <h3>Kaina - 100 € (valandos)</h3>
            <button className={styles.video}>Registruotis</button>
          </div>
          <div className={styles.dirbtuvesCell}>
            <picture>
              <source srcSet='/images/butonlogo1.webp' type='image/webp' />
              <img src='/images/butonlogo1-min.png' alt='logo' />
            </picture>
            <p>
              Trumpas aprasymas,kuri sugalvos Algina.<br></br>
              Ir kai jau bus keli aprasymai tuomet idesiu cia.<br></br>
              Dar biskis tuscio teksto.<br></br>
              Ir dar kazkiek tuscio teksto.
            </p>
            <h2>Dirbtuviu laikas : 2021 - 06 - 25 diena. 18:00 val. </h2>
            <h3>Kaina - 100 € (valandos)</h3>
            <button className={styles.video}>Registruotis</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Workshops;
