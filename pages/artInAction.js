import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/Art.module.css";
import { BiPlayCircle } from "react-icons/bi";

// dar du video gaminasi

const Art = () => {
  const [style, setStyle] = useState(false);
  const [style1, setStyle1] = useState(false);
  const [style2, setStyle2] = useState(false);
  const [style3, setStyle3] = useState(false);
  const [style4, setStyle4] = useState(false);
  const [style5, setStyle5] = useState(false);
  const [style6, setStyle6] = useState(false);
  const [style7, setStyle7] = useState(false);

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
        <section className={styles.commercialSection}>
          {/* backs */}
          <div
            onMouseEnter={(e) => {
              setStyle(true);
            }}
            onMouseLeave={(e) => {
              setStyle(false);
            }}
          >
            <div className={style ? styles.onHoverDiv : styles.onHoverDivNone}>
              <video
                width='100%'
                height='auto'
                autoPlay
                muted
                loop
                disablePictureInPicture
                controlsList='nofullscreen nodownload noremoteplayback'
              >
                <source src='/video/backs1.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
              <div>
                <p>
                  The Backs <br></br> Here Right Next To You (Live Session)
                </p>
              </div>
              <Link href='https://www.youtube.com/watch?v=sKDraLWbsr4&ab_channel=THEBACKSOFFICIAL'>
                <a
                  rel='noreferrer'
                  rel='noopener'
                  aria-label='video'
                  href='https://www.youtube.com/watch?v=sKDraLWbsr4&ab_channel=THEBACKSOFFICIAL'
                  target='_blank'
                >
                  <BiPlayCircle size={50} />
                </a>
              </Link>
            </div>

            <picture style={style ? { display: "none" } : { display: "flex" }}>
              <source srcSet='/images/backs1.webp' type='image/webp' />
              <img src='/images/backs1.png' alt='logo' />
            </picture>
          </div>
          {/* backs */}
          <div
            onMouseEnter={(e) => {
              setStyle1(true);
            }}
            onMouseLeave={(e) => {
              setStyle1(false);
            }}
          >
            <div className={style1 ? styles.onHoverDiv : styles.onHoverDivNone}>
              <video
                width='100%'
                height='auto'
                autoPlay
                muted
                loop
                disablePictureInPicture
                controlsList='nofullscreen nodownload noremoteplayback'
              >
                <source src='/video/backs2.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
              <div>
                <p>
                  The Backs <br></br>It Hurts (Live Session)
                </p>
              </div>
              <Link href='https://www.youtube.com/watch?v=vgMutWree7k&ab_channel=THEBACKSOFFICIAL'>
                <a
                  rel='noreferrer'
                  rel='noopener'
                  aria-label='video'
                  href='https://www.youtube.com/watch?v=vgMutWree7k&ab_channel=THEBACKSOFFICIAL'
                  target='_blank'
                >
                  <BiPlayCircle size={50} />
                </a>
              </Link>
            </div>

            <picture style={style1 ? { display: "none" } : { display: "flex" }}>
              <source srcSet='/images/backs2.webp' type='image/webp' />
              <img src='/images/backs2.png' alt='logo' />
            </picture>
          </div>
          {/* Kino pavasaris */}
          <div
            onMouseEnter={(e) => {
              setStyle2(true);
            }}
            onMouseLeave={(e) => {
              setStyle2(false);
            }}
          >
            <div className={style2 ? styles.onHoverDiv : styles.onHoverDivNone}>
              <video
                width='100%'
                height='auto'
                autoPlay
                muted
                loop
                disablePictureInPicture
                controlsList='nofullscreen nodownload noremoteplayback'
              >
                <source src='/video/vandeny.webm' type='video/webm' />
                <source src='/video/vandeny.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
              <div>
                <p>
                  WhaleSounds <br></br>Vandeny
                </p>
              </div>
              <Link href='https://www.youtube.com/watch?v=82T3mPCbs6A'>
                <a
                  rel='noreferrer'
                  rel='noopener'
                  aria-label='video'
                  href='https://www.youtube.com/watch?v=82T3mPCbs6A'
                  target='_blank'
                >
                  <BiPlayCircle size={50} />
                </a>
              </Link>
            </div>

            <picture style={style2 ? { display: "none" } : { display: "flex" }}>
              <source srcSet='/images/vandeny.webp' type='image/webp' />
              <img src='/images/vandeny.png' alt='logo' />
            </picture>
          </div>
          {/* Berta Freek */}
          <div
            onMouseEnter={(e) => {
              setStyle3(true);
            }}
            onMouseLeave={(e) => {
              setStyle3(false);
            }}
          >
            <div className={style3 ? styles.onHoverDiv : styles.onHoverDivNone}>
              <video
                width='100%'
                height='auto'
                autoPlay
                muted
                loop
                disablePictureInPicture
                controlsList='nofullscreen nodownload noremoteplayback'
              >
                <source src='/video/freek.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
              <div>
                <p>
                  Berta Timinskaitė <br></br>We can be Free(k)
                </p>
              </div>
              <Link href='https://www.youtube.com/watch?v=2RwpwQwgZ-A'>
                <a
                  rel='noreferrer'
                  rel='noopener'
                  aria-label='video'
                  href='https://www.youtube.com/watch?v=2RwpwQwgZ-A'
                  target='_blank'
                >
                  <BiPlayCircle size={50} />
                </a>
              </Link>
            </div>

            <picture style={style3 ? { display: "none" } : { display: "flex" }}>
              <source srcSet='/images/freek.webp' type='image/webp' />
              <img src='/images/freek.png' alt='logo' />
            </picture>
          </div>
          {/* The ball&chain */}
          <div
            onMouseEnter={(e) => {
              setStyle4(true);
            }}
            onMouseLeave={(e) => {
              setStyle4(false);
            }}
          >
            <div className={style4 ? styles.onHoverDiv : styles.onHoverDivNone}>
              <video
                width='100%'
                height='auto'
                autoPlay
                muted
                loop
                disablePictureInPicture
                controlsList='nofullscreen nodownload noremoteplayback'
              >
                <source src='/video/ball1.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
              <div>
                <p>
                  The Ball And Chain <br></br>Baby Baby Burning
                </p>
              </div>
              <Link href='https://www.youtube.com/watch?v=xc02tXluMlc'>
                <a
                  rel='noreferrer'
                  rel='noopener'
                  aria-label='video'
                  href='https://www.youtube.com/watch?v=xc02tXluMlc'
                  target='_blank'
                >
                  <BiPlayCircle size={50} />
                </a>
              </Link>
            </div>

            <picture style={style4 ? { display: "none" } : { display: "flex" }}>
              <source srcSet='/images/ball2.webp' type='image/webp' />
              <img src='/images/ball2.png' alt='logo' />
            </picture>
          </div>
          {/* The ball&chain */}
          <div
            onMouseEnter={(e) => {
              setStyle5(true);
            }}
            onMouseLeave={(e) => {
              setStyle5(false);
            }}
          >
            <div className={style5 ? styles.onHoverDiv : styles.onHoverDivNone}>
              <video
                width='100%'
                height='auto'
                autoPlay
                muted
                loop
                disablePictureInPicture
                controlsList='nofullscreen nodownload noremoteplayback'
              >
                <source src='/video/ball1.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
              <div>
                <p>
                  The Ball And Chain <br></br>Don't Tell Me Everything
                </p>
              </div>
              <Link href='https://www.youtube.com/watch?v=cYgQQJxoh54'>
                <a
                  rel='noreferrer'
                  rel='noopener'
                  aria-label='video'
                  href='https://www.youtube.com/watch?v=cYgQQJxoh54'
                  target='_blank'
                >
                  <BiPlayCircle size={50} />
                </a>
              </Link>
            </div>

            <picture style={style5 ? { display: "none" } : { display: "flex" }}>
              <source srcSet='/images/ball1.webp' type='image/webp' />
              <img src='/images/ball1.png' alt='logo' />
            </picture>
          </div>
          {/* The ball&chain */}
          <div
            onMouseEnter={(e) => {
              setStyle6(true);
            }}
            onMouseLeave={(e) => {
              setStyle6(false);
            }}
          >
            <div className={style6 ? styles.onHoverDiv : styles.onHoverDivNone}>
              <video
                width='100%'
                height='auto'
                autoPlay
                muted
                loop
                disablePictureInPicture
                controlsList='nofullscreen nodownload noremoteplayback'
              >
                <source src='/video/ball2.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
              <div>
                <p>
                  The Ball And Chain <br></br>It's Too Late
                </p>
              </div>
              <Link href='https://www.youtube.com/watch?v=i2pAaEB1cz8'>
                <a
                  rel='noreferrer'
                  rel='noopener'
                  aria-label='video'
                  href='https://www.youtube.com/watch?v=i2pAaEB1cz8'
                  target='_blank'
                >
                  <BiPlayCircle size={50} />
                </a>
              </Link>
            </div>

            <picture style={style6 ? { display: "none" } : { display: "flex" }}>
              <source srcSet='/images/ball3.webp' type='image/webp' />
              <img src='/images/ball3.png' alt='logo' />
            </picture>
          </div>
          {/* Dovile */}
          <div
            onMouseEnter={(e) => {
              setStyle7(true);
            }}
            onMouseLeave={(e) => {
              setStyle7(false);
            }}
          >
            <div className={style7 ? styles.onHoverDiv : styles.onHoverDivNone}>
              <video
                width='100%'
                height='auto'
                autoPlay
                muted
                loop
                disablePictureInPicture
                controlsList='nofullscreen nodownload noremoteplayback'
              >
                <source src='/video/dovile.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
              <div>
                <p>
                  Dovilė Cibulskaitė <br></br>Spontaniška / Spontaneous
                </p>
              </div>
              <Link href='https://vimeo.com/509684555/55ca3e6aa1'>
                <a
                  rel='noreferrer'
                  rel='noopener'
                  aria-label='video'
                  href='https://vimeo.com/509684555/55ca3e6aa1'
                  target='_blank'
                >
                  <BiPlayCircle size={50} />
                </a>
              </Link>
            </div>

            <picture style={style7 ? { display: "none" } : { display: "flex" }}>
              <source srcSet='/images/dovile.webp' type='image/webp' />
              <img src='/images/dovile.png' alt='logo' />
            </picture>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Art;
