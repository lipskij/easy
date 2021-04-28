import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/Art.module.css";
import ReactPlayer from "react-player/lazy";

// vimeo video nepasileidzia

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
        <h2>The Backs</h2>
        <div className={styles.commercialSection}>
          <div className={styles.playerWrapper}>
            <iframe
              title='The Backs'
              id='player'
              type='text/html'
              url='https://www.youtube.com/watch?v=sKDraLWbsr4'
              frameBorder='0'
            ></iframe>
            <ReactPlayer
              className={styles.reactPlayer}
              url='https://www.youtube.com/watch?v=sKDraLWbsr4'
              width='100%'
              height='100%'
              controls={true}
              volume={1}
              muted={false}
            />
          </div>
          <div className={styles.playerWrapper}>
            <ReactPlayer
              className={styles.reactPlayer}
              url='https://www.youtube.com/watch?v=vgMutWree7k&ab_channel=THEBACKSOFFICIAL'
              width='100%'
              height='100%'
              controls={true}
              volume={1}
              muted={false}
            />
          </div>
          <div className={styles.text}>
            <h3>Tekstas apie Projekta</h3>
            <p>Gal kazkoks aprasymas</p>
            <p>Dar daugiau apie projekta</p>
          </div>
        </div>
        <h2>Kino pavasaris " Whale shound"</h2>
        <div className={styles.commercialSection}>
          <div className={styles.playerWrapper}>
            <iframe
              title='Kino pavasaris Whale shound'
              id='player'
              type='text/html'
              url='https://www.youtube.com/watch?v=82T3mPCbs6A&ab_channel=WhaleSounds'
              frameBorder='0'
            ></iframe>
            <ReactPlayer
              className={styles.reactPlayer}
              url='https://www.youtube.com/watch?v=82T3mPCbs6A&ab_channel=WhaleSounds'
              width='100%'
              height='100%'
              controls={true}
              volume={1}
              muted={false}
            />
          </div>
          <div className={styles.text}>
            <h3>Tekstas apie Projekta</h3>
            <p>Gal kazkoks aprasymas</p>
            <p>Dar daugiau apie projekta</p>
          </div>
        </div>
        <h2>Berta Freek</h2>
        <div className={styles.commercialSection}>
          <div className={styles.playerWrapper}>
            <iframe
              title='Berta Freek'
              id='player'
              type='text/html'
              url='https://www.youtube.com/watch?v=2RwpwQwgZ-A&ab_channel=ShowmakersAkademija'
              frameBorder='0'
            ></iframe>
            <ReactPlayer
              className={styles.reactPlayer}
              url='https://www.youtube.com/watch?v=2RwpwQwgZ-A&ab_channel=ShowmakersAkademija'
              width='100%'
              height='100%'
              controls={true}
              volume={1}
              muted={false}
            />
          </div>
          <div className={styles.text}>
            <h3>Tekstas apie Projekta</h3>
            <p>Gal kazkoks aprasymas</p>
            <p>Dar daugiau apie projekta</p>
          </div>
        </div>
        <h2>The ball&chain</h2>
        <div className={styles.commercialSection}>
          <div className={styles.playerWrapper}>
            <iframe
              title='The ball&chain'
              id='player'
              type='text/html'
              url='https://www.youtube.com/watch?v=xc02tXluMlc&ab_channel=theballandchainmusic'
              frameBorder='0'
            ></iframe>
            <ReactPlayer
              className={styles.reactPlayer}
              url='https://www.youtube.com/watch?v=xc02tXluMlc&ab_channel=theballandchainmusic'
              width='100%'
              height='100%'
              controls={true}
              volume={1}
              muted={false}
            />
          </div>
          <div className={styles.playerWrapper}>
            <ReactPlayer
              className={styles.reactPlayer}
              url='https://www.youtube.com/watch?v=cYgQQJxoh54&ab_channel=theballandchainmusic'
              width='100%'
              height='100%'
              controls={true}
              volume={1}
              muted={false}
            />
          </div>
          <div className={styles.playerWrapper}>
            <ReactPlayer
              className={styles.reactPlayer}
              url='https://www.youtube.com/watch?v=i2pAaEB1cz8&ab_channel=theballandchainmusic'
              width='100%'
              height='100%'
              controls={true}
              volume={1}
              muted={false}
            />
          </div>
          <div className={styles.text}>
            <h3>Tekstas apie Projekta</h3>
            <p>Gal kazkoks aprasymas</p>
            <p>Dar daugiau apie projekta</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Art;
