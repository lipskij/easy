import React from "react";
import Head from "next/head";
import styles from "../styles/CreativeProduction.module.css";
import Link from "next/link";
import Slider from "react-slick";

const photos = [
  {
    name: "photo1",
    url1: "/reklamos/reklama1.webp",
    url2: "/reklamos/reklama1.png",
  },
  {
    name: "photo2",
    url1: "/reklamos/reklama2.webp",
    url2: "/reklamos/reklama2.png",
  },
  {
    name: "photo3",
    url1: "/reklamos/reklama3.webp",
    url2: "/reklamos/reklama3.png",
  },
  {
    name: "photo4",
    url1: "/reklamos/reklama4.webp",
    url2: "/reklamos/reklama4.png",
  },
  {
    name: "photo5",
    url1: "/images/butonlogo1.webp",
    url2: "/images/butonlogo1-min.png",
  },
];

const BannerGallery = () => {
  const setting = {
    lazyLoad: true,
    focusOnSelect: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    easing: "linear",
    centerPadding: "1px",
    className: "slides",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          draggable: true,
          swipe: true,
          touchMove: true,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <div>
      <Head>
        <link
          rel='stylesheet'
          type='text/css'
          charset='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
        <title>EASY</title>
        <link rel='icon' href='/images/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='Easy creative production' />
      </Head>
      <main className={styles.main}>
        <h2>Reklamos</h2>
        <section className={styles.commercialSection}>
          <div>
            <picture>
              <source srcSet='/reklamos/reklama1.webp' type='image/webp' />
              <img src='/reklamos/reklama1.png' alt='logo' />
            </picture>

            <div className={styles.sectionText}>
              <p>Paskolų klubas - Žmogiškas skolinimas įsibėgėjo!</p>
            </div>
          </div>
          <div>
            <picture>
              <source srcSet='/reklamos/reklama2.webp' type='image/webp' />
              <img src='/reklamos/reklama2.png' alt='logo' />
            </picture>

            <div className={styles.sectionText}>
              <p>IF - Augintinio draudimas su if.lt</p>
            </div>
          </div>
          <div>
            <picture>
              <source srcSet='/reklamos/reklama3.webp' type='image/webp' />
              <img src='/reklamos/reklama3.png' alt='logo' />
            </picture>

            <div className={styles.sectionText}>
              <p>Paskolų klubas - Lengvas refinansavimas.</p>
            </div>
          </div>
          <div>
            <picture>
              <source srcSet='/reklamos/reklama4.webp' type='image/webp' />
              <img src='/reklamos/reklama4.png' alt='logo' />
            </picture>

            <div className={styles.sectionText}>
              <p>Ačiū Tau, Islandija / Takk, Island!</p>
            </div>
          </div>
        </section>
        <div className={styles.button}>
          <Link href='/commercial'>
            <button className={styles.video}>Daugiau</button>
          </Link>
        </div>
        <div className={styles.sectionLine}></div>
        <h2>Renginiai</h2>
        <section className={styles.secondSection}>
          <div className={styles.left}>
            <picture>
              <source srcSet='/images/easylog.webp' type='image/webp' />
              <img src='/reklamos/easylog.png' alt='logo' />
            </picture>
          </div>
          <div className={styles.right}>
            <p>
              Trumpas aprasymas,kuri sugalvos Algina.<br></br>
              Ir kai jau bus keli aprasymai tuomet idesiu cia.<br></br>
              Dar biskis tuscio teksto.<br></br>
              Ir dar kazkiek tuscio teksto.
            </p>
          </div>
          <div className={styles.right}>
            <picture>
              <source srcSet='/images/easylog.webp' type='image/webp' />
              <img src='/reklamos/easylog.png' alt='logo' />
            </picture>
          </div>
          <div className={styles.left}>
            <p>
              Trumpas aprasymas,kuri sugalvos Algina.<br></br>
              Ir kai jau bus keli aprasymai tuomet idesiu cia.<br></br>
              Dar biskis tuscio teksto.<br></br>
              Ir dar kazkiek tuscio teksto.
            </p>
          </div>
          <div className={styles.left}>
            <picture>
              <source srcSet='/images/easylog.webp' type='image/webp' />
              <img src='/reklamos/easylog.png' alt='logo' />
            </picture>
          </div>
          <div className={styles.right}>
            <p>
              Trumpas aprasymas,kuri sugalvos Algina.<br></br>
              Ir kai jau bus keli aprasymai tuomet idesiu cia.<br></br>
              Dar biskis tuscio teksto.<br></br>
              Ir dar kazkiek tuscio teksto.
            </p>
          </div>
          <div className={styles.right}>
            <picture>
              <source srcSet='/images/easylog.webp' type='image/webp' />
              <img src='/reklamos/easylog.png' alt='logo' />
            </picture>
          </div>
          <div className={styles.left}>
            <p>
              Trumpas aprasymas,kuri sugalvos Algina.<br></br>
              Ir kai jau bus keli aprasymai tuomet idesiu cia.<br></br>
              Dar biskis tuscio teksto.<br></br>
              Ir dar kazkiek tuscio teksto.
            </p>
          </div>
        </section>
        <div className={styles.button}>
          <Link href='/idk'>
            <button className={styles.video}>Daugiau</button>
          </Link>
        </div>
        <div className={styles.sectionLine}></div>
        <h2>Fotosesijos</h2>
        <div className={styles.slide}>
          <Slider {...setting}>
            {photos.map((photos, index) => {
              return (
                <div key={index}>
                  <picture>
                    <source srcSet={photos.url1} type='image/webp' />
                    <img src={photos.url2} alt='logo' />
                  </picture>
                </div>
              );
            })}
          </Slider>
        </div>
      </main>
    </div>
  );
};

export default BannerGallery;
