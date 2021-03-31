import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/CreativeProduction.module.css";
import Image from "next/image";
import Link from "next/link";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
  {
    name: "Photo 1",
    url: "/reklama3.png",
  },
  {
    name: "Photo 2",
    url: "/reklama3.png",
  },
  {
    name: "Photo 3",
    url: "/reklama3.png",
  },
  {
    name: "Photo 4",
    url: "/reklama3.png",
  },
];

const CulturalEvents = () => {
  const setting = {
    focusOnSelect: false,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "20px",
    // fade: true,
    className: "slides",
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
        <link rel='icon' href='/favicon.ico' />
        <title>EASY</title>
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1>Creative Production</h1>
        <section className={styles.commercialSection}>
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
          <div className={styles.left}>
            <Image
              src='/easylog2.svg'
              alt='reklamos'
              width={600}
              height={300}
            />
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
            <Image
              src='/easylog2.svg'
              alt='reklamos'
              width={600}
              height={300}
            />
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
            <Image
              src='/easylog2.svg'
              alt='reklamos'
              width={600}
              height={300}
            />
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
            <Image
              src='/easylog2.svg'
              alt='reklamos'
              width={600}
              height={300}
            />
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
            <button className={styles.video}>
              <a></a>
              Daugiau
            </button>
          </Link>
        </div>
        <div className={styles.sectionLine}></div>
        <h1>Renginiai</h1>
        
          <div className={styles.slide}>
            <Slider {...setting}>
              <Image
                src='/reklama1.png'
                alt='reklamos'
                width={400}
                height={200}
              />
              <Image
                src='/reklama2.png'
                alt='reklamos'
                width={400}
                height={200}
              />
              <Image
                src='/reklama3.png'
                alt='reklamos'
                width={400}
                height={200}
              />
            </Slider>
          </div>
      </main>
      <Footer />
    </div>
  );
};

export default CulturalEvents;
