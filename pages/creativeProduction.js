import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/CreativeProduction.module.css";
import Image from "next/image";
import Link from "next/link";

const CulturalEvents = () => {
  return (
    <div>
      <Head>
        <title>EASY</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1>Creative Production</h1>
        <section className={styles.videoSection}>
          <div>
            <Image
              src='/reklama1.png'
              alt='reklamos'
              width={400}
              height={200}
            />
            <div className={styles.sectionText}>
              <p>Paskolų klubas - Žmogiškas skolinimas įsibėgėjo!</p>
            </div>
          </div>
          <div>
            <Image
              src='/reklama2.png'
              alt='reklamos'
              width={400}
              height={200}
            />
            <div className={styles.sectionText}>
              <p>IF - Augintinio draudimas su if.lt</p>
            </div>
          </div>
          <div>
            <Image
              src='/reklama3.png'
              alt='reklamos'
              width={400}
              height={200}
            />
            <div className={styles.sectionText}>
              <p>Paskolų klubas - Lengvas refinansavimas.</p>
            </div>
          </div>
          <div>
            <Image
              src='/reklama4.png'
              alt='reklamos'
              width={400}
              height={200}
            />
            <div className={styles.sectionText}>
              <p>Ačiū Tau, Islandija / Takk, Island!</p>
            </div>
          </div>
        </section>
        <div className={styles.button}>
          <Link href='/idk'>
            <button className={styles.video}>
              <a></a>
              Daugiau
            </button>
          </Link>
        </div>
        <div className={styles.sectionLine}></div>
        <h1>Renginiai</h1>
        <section className={styles.secondSection}>
          <div>
            <Image
              src='/easylog2.svg'
              alt='reklamos'
              width={600}
              height={300}
            />
          </div>
          <div className={styles.sectionText}>
            <p>Trumpas aprasymas,kuri sugalvos Algina.</p>
            <p>Ir kai jau bus keli aprasymai tuomet idesiu cia.</p>
            <p>Dar biskis tuscio teksto.</p>
            <p>Ir dar kazkiek tuscio teksto.</p>
          </div>
          <div>
            <Image
              src='/easylog2.svg'
              alt='reklamos'
              width={600}
              height={300}
            />
          </div>
          <div className={styles.sectionText}>
            <p>Trumpas aprasymas,kuri sugalvos Algina.</p>
            <p>Ir kai jau bus keli aprasymai tuomet idesiu cia.</p>
            <p>Dar biskis tuscio teksto.</p>
            <p>Ir dar kazkiek tuscio teksto.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CulturalEvents;
