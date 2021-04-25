import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/Art.module.css";
import Image from "next/image";
import Link from "next/link";

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
        <h2>Reklamos</h2>
        <section className={styles.commercialSection}>
          <div>
            <Image
              src='/reklamos/reklama1.png'
              alt='reklamos'
              width={300}
              height={100}
            />
            <p>
              Paskolų klubas - Žmogiškas skolinimas įsibėgėjo! Su ilgesniu
              aprasymu. Informacija apie video. Informacija apie video.
              Informacija apie video.
            </p>
          </div>
          <div>
            <Image
              src='/reklamos/reklama2.png'
              alt='reklamos'
              width={300}
              height={100}
            />
            <p>
              IF - Augintinio draudimas su <i>if.lt</i>. Su ilgesniu aprasymu.
              Informacija apie video. Informacija apie video. Informacija apie
              video.
            </p>
          </div>
          <div>
            <Image
              src='/reklamos/reklama3.png'
              alt='reklamos'
              width={300}
              height={100}
            />
            <p>
              Paskolų klubas - Lengvas refinansavimas. Su ilgesniu aprasymu.
              Informacija apie video. Informacija apie video. Informacija apie
              video.
            </p>
          </div>
          <div>
            <Image
              src='/reklamos/reklama4.png'
              alt='reklamos'
              width={300}
              height={100}
            />
            <p>
              Ačiū Tau, Islandija / Takk, Island! Su ilgesniu aprasymu.
              Informacija apie video. Informacija apie video. Informacija apie
              video.
            </p>
          </div>
        </section>
        <div className={styles.button}>
          <Link href='/commercial'>
            <button className={styles.video}>
              <a></a>
              Daugiau
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Art;
