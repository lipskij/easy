import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/CreativeProduction.module.css";
// import Image from "next/image";

const Commercial = () => {
  return (
    <div>
      <Head>
        <title>EASY</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1>Reklamos</h1>
        <section className={styles.commercialPage}>
          <div className={styles.commercialPageCell}>
            <video
              controls
              width='100%'
              height='auto'
              preload='true'
              disablePictureInPicture
              controlsList='nofullscreen nodownload noremoteplayback'
            >
              <source src='/video/paskolu_klubas.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            {/* <Image
              src='/reklamos/reklama1.png'
              alt='reklamos'
              width={750}
              height={400}
            /> */}
            <p>Paskolų klubas - Žmogiškas skolinimas įsibėgėjo!</p>
            <p>Daugiau teksto apie reklama. Kuri veliau pridesiu.</p>
            <p>Trumpas reklamos aprasymas. Arba ne, nezinau.</p>
            <p>Nukreipimas i reklamos video.</p>
          </div>
          <div className={styles.commercialPageCell}>
            <video
              controls
              width='100%'
              height='auto'
              preload='true'
              disablePictureInPicture
              controlsList='nofullscreen nodownload noremoteplayback'
            >
              <source src='/video/if_draudimas.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            {/* <Image
              src='/reklamos/reklama2.png'
              alt='reklamos'
              width={750}
              height={400}
            /> */}
            <p>
              IF - Augintinio draudimas su <i>if.lt</i>
            </p>
            <p>Daugiau teksto apie reklama. Kuri veliau pridesiu.</p>
            <p>Trumpas reklamos aprasymas. Arba ne, nezinau.</p>
            <p>Nukreipimas i reklamos video.</p>
          </div>
          <div className={styles.commercialPageCell}>
            <video
              controls
              width='100%'
              height='auto'
              preload='true'
              disablePictureInPicture
              controlsList='nofullscreen nodownload noremoteplayback'
            >
              <source src='/video/refinanasavimas.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            {/* <Image
              src='/reklamos/reklama3.png'
              alt='reklamos'
              width={750}
              height={400}
            /> */}
            <p>Paskolų klubas - Lengvas refinansavimas.</p>
            <p>Daugiau teksto apie reklama. Kuri veliau pridesiu.</p>
            <p>Trumpas reklamos aprasymas. Arba ne, nezinau.</p>
            <p>Nukreipimas i reklamos video.</p>
          </div>
          <div className={styles.commercialPageCell}>
            <video
              controls
              width='100%'
              height='auto'
              preload='true'
              disablePictureInPicture
              controlsList='nofullscreen nodownload noremoteplayback'
            >
              <source src='/video/aciu_tau_islandija.mp4' type='video/mp4' />
              <source src='/video/aciu_tau_islandija.webm' type='video/webm' />
              Your browser does not support the video tag.
            </video>
            {/* <Image
              src='/reklamos/reklama4.png'
              alt='reklamos'
              width={750}
              height={400}
            /> */}
            <p>Ačiū Tau, Islandija / Takk, Island!</p>
            <p>Daugiau teksto apie reklama. Kuri veliau pridesiu.</p>
            <p>Trumpas reklamos aprasymas. Arba ne, nezinau.</p>
            <p>Nukreipimas i reklamos video.</p>
          </div>
          <div className={styles.commercialPageCell}>
            <video
              controls
              width='100%'
              height='auto'
              preload='true'
              disablePictureInPicture
              controlsList='nofullscreen nodownload noremoteplayback'
            >
              <source src='/video/sleep_extra.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            {/* <Image
              src='/reklamos/reklama5.png'
              alt='reklamos'
              width={750}
              height={400}
            /> */}
            <p>JYSK / SLEEP EXTRA /</p>
            <p>Daugiau teksto apie reklama. Kuri veliau pridesiu.</p>
            <p>Trumpas reklamos aprasymas. Arba ne, nezinau.</p>
            <p>Nukreipimas i reklamos video.</p>
          </div>
          <div className={styles.commercialPageCell}>
            <video
              controls
              width='100%'
              height='auto'
              preload='true'
              disablePictureInPicture
              controlsList='nofullscreen nodownload noremoteplayback'
            >
              <source src='/video/air_comfort.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            {/* <Image
              src='/reklamos/reklama6.png'
              alt='reklamos'
              width={750}
              height={400}
            /> */}
            <p>JYSK / Cooling air comfort / TV klipas</p>
            <p>Daugiau teksto apie reklama. Kuri veliau pridesiu.</p>
            <p>Trumpas reklamos aprasymas. Arba ne, nezinau.</p>
            <p>Nukreipimas i reklamos video.</p>
          </div>
          <div className={styles.commercialPageCell}>
            <video
              controls
              width='100%'
              height='auto'
              preload='true'
              disablePictureInPicture
              controlsList='nofullscreen nodownload noremoteplayback'
            >
              <source src='/video/coco_modern.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            {/* <Image
              src='/reklamos/reklama7.png'
              alt='reklamos'
              width={750}
              height={400}
            /> */}
            <p>JYSK / PLIUS COCO MODERN</p>
            <p>Daugiau teksto apie reklama. Kuri veliau pridesiu.</p>
            <p>Trumpas reklamos aprasymas. Arba ne, nezinau.</p>
            <p>Nukreipimas i reklamos video.</p>
          </div>
          <div className={styles.commercialPageCell}>
            <video
              controls
              width='100%'
              height='auto'
              preload='true'
              disablePictureInPicture
              controlsList='nofullscreen nodownload noremoteplayback'
            >
              <source src='/video/aloe_vera.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            {/* <Image
              src='/reklamos/reklama8.png'
              alt='reklamos'
              width={750}
              height={400}
            /> */}
            <p>JYSK / ALOE VERA </p>
            <p>Daugiau teksto apie reklama. Kuri veliau pridesiu.</p>
            <p>Trumpas reklamos aprasymas. Arba ne, nezinau.</p>
            <p>Nukreipimas i reklamos video.</p>
          </div>
          <div className={styles.commercialPageCell}>
            <video
              controls
              width='100%'
              height='auto'
              preload='true'
              disablePictureInPicture
              controlsList='nofullscreen nodownload noremoteplayback'
            >
              <source src='/video/stres_free.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            {/* <Image
              src='/reklamos/reklama9.png'
              alt='reklamos'
              width={750}
              height={400}
            /> */}
            <p>JYSK. Stres free</p>
            <p>Daugiau teksto apie reklama. Kuri veliau pridesiu.</p>
            <p>Trumpas reklamos aprasymas. Arba ne, nezinau.</p>
            <p>Nukreipimas i reklamos video.</p>
          </div>
          <div className={styles.commercialPageCell}>
            <video
              controls
              width='100%'
              height='auto'
              preload='true'
              disablePictureInPicture
              controlsList='nofullscreen nodownload noremoteplayback'
            >
              <source src='/video/vaikai_kaledos.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            {/* <Image
              src='/reklamos/reklama10.png'
              alt='reklamos'
              width={750}
              height={400}
            /> */}
            <p>Lietuvos Balsas. Vaikai - Kalėdos</p>
            <p>Daugiau teksto apie reklama. Kuri veliau pridesiu.</p>
            <p>Trumpas reklamos aprasymas. Arba ne, nezinau.</p>
            <p>Nukreipimas i reklamos video.</p>
          </div>
          <div className={styles.commercialPageCell}>
            <video
              controls
              width='100%'
              height='auto'
              preload='true'
              disablePictureInPicture
              controlsList='nofullscreen nodownload noremoteplayback'
            >
              <source src='/video/donatas.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            {/* <Image
              src='/reklamos/reklama11.png'
              alt='reklamos'
              width={750}
              height={400}
            /> */}
            <p>LNK Kalėdos - Donatas</p>
            <p>Daugiau teksto apie reklama. Kuri veliau pridesiu.</p>
            <p>Trumpas reklamos aprasymas. Arba ne, nezinau.</p>
            <p>Nukreipimas i reklamos video.</p>
          </div>
          <div className={styles.commercialPageCell}>
            <video
              controls
              width='100%'
              height='auto'
              preload='true'
              disablePictureInPicture
              controlsList='nofullscreen nodownload noremoteplayback'
            >
              <source src='/video/mantas.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            {/* <Image
              src='/reklamos/reklama12.png'
              alt='reklamos'
              width={750}
              height={400}
            /> */}
            <p>LNK Kalėdos - Mantas</p>
            <p>Daugiau teksto apie reklama. Kuri veliau pridesiu.</p>
            <p>Trumpas reklamos aprasymas. Arba ne, nezinau.</p>
            <p>Nukreipimas i reklamos video.</p>
          </div>
          <div className={styles.commercialPageCell}>
            <video
              controls
              width='100%'
              height='auto'
              preload='true'
              disablePictureInPicture
              controlsList='nofullscreen nodownload noremoteplayback'
            >
              <source src='/video/monika_marija.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            {/* <Image
              src='/reklamos/reklama13.png'
              alt='reklamos'
              width={750}
              height={400}
            /> */}
            <p>LNK Kalėdos - Monika Marija</p>
            <p>Daugiau teksto apie reklama. Kuri veliau pridesiu.</p>
            <p>Trumpas reklamos aprasymas. Arba ne, nezinau.</p>
            <p>Nukreipimas i reklamos video.</p>
          </div>
          <div className={styles.commercialPageCell}>
            <video
              controls
              width='100%'
              height='auto'
              preload='true'
              disablePictureInPicture
              controlsList='nofullscreen nodownload noremoteplayback'
            >
              <source src='/video/lnk_kaledos.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            {/* <Image
              src='/reklamos/reklama14.png'
              alt='reklamos'
              width={750}
              height={400}
            /> */}
            <p>LNK Kalėdos!</p>
            <p>Daugiau teksto apie reklama. Kuri veliau pridesiu.</p>
            <p>Trumpas reklamos aprasymas. Arba ne, nezinau.</p>
            <p>Nukreipimas i reklamos video.</p>
          </div>
          <div className={styles.commercialPageCell}>
            <video
              controls
              width='100%'
              height='auto'
              preload='true'
              disablePictureInPicture
              controlsList='nofullscreen nodownload noremoteplayback'
            >
              <source src='/video/vasario_klipas.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            {/* <Image
              src='/reklamos/reklama15.png'
              alt='reklamos'
              width={750}
              height={400}
            /> */}
            <p>LNK Vasario 16 klipas.</p>
            <p>Daugiau teksto apie reklama. Kuri veliau pridesiu.</p>
            <p>Trumpas reklamos aprasymas. Arba ne, nezinau.</p>
            <p>Nukreipimas i reklamos video.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Commercial;
