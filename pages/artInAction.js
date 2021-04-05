import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/Art.module.css";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const photos = [
  {
    name: "photo1",
    url: "/reklamos/reklama1.png",
  },
  {
    name: "photo1",
    url: "/reklamos/reklama2.png",
  },
  {
    name: "photo1",
    url: "/reklamos/reklama3.png",
  },
  {
    name: "photo1",
    url: "/reklamos/reklama4.png",
  },
  {
    name: "photo1",
    url: "/buttonlogo1.png",
  },
];

const Art = () => {
  const setting = {
    lazyLoad: true,
    focusOnSelect: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
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
        <link rel='icon' href='/favicon.ico' />
        <title>EASY</title>
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
        <div className={styles.sectionLine}></div>
        <h2>Dirbtuves</h2>
        <section className={styles.dirbtuvesSection}>
          <div className={styles.dirbtuvesCell}>
            <Image
              src='/easylog2.svg'
              alt='reklamos'
              width={600}
              height={300}
            />
            <p>
              Trumpas aprasymas,kuri sugalvos Algina.<br></br>
              Ir kai jau bus keli aprasymai tuomet idesiu cia.<br></br>
              Dar biskis tuscio teksto.<br></br>
              Ir dar kazkiek tuscio teksto.
            </p>
            <h3>Dirbtuviu laikas : 2021 - 06 - 25 diena. 18:00 val. </h3>
            <h4>Kaina - 100 €</h4>
            <button className={styles.video}>Registruotis</button>
          </div>
          <div className={styles.dirbtuvesCell}>
            <Image
              src='/easylog2.svg'
              alt='reklamos'
              width={600}
              height={300}
            />
            <p>
              Trumpas aprasymas,kuri sugalvos Algina.<br></br>
              Ir kai jau bus keli aprasymai tuomet idesiu cia.<br></br>
              Dar biskis tuscio teksto.<br></br>
              Ir dar kazkiek tuscio teksto.
            </p>
            <h3>Dirbtuviu laikas : 2021 - 06 - 25 diena. 18:00 val. </h3>
            <h4>Kaina - 100 €</h4>
            <button className={styles.video}>Registruotis</button>
          </div>
          <div className={styles.dirbtuvesCell}>
            <Image
              src='/easylog2.svg'
              alt='reklamos'
              width={600}
              height={300}
            />
            <p>
              Trumpas aprasymas,kuri sugalvos Algina.<br></br>
              Ir kai jau bus keli aprasymai tuomet idesiu cia.<br></br>
              Dar biskis tuscio teksto.<br></br>
              Ir dar kazkiek tuscio teksto.
            </p>
            <h3>Dirbtuviu laikas : 2021 - 06 - 25 diena. 18:00 val. </h3>
            <h4>Kaina - 100 €</h4>
            <button className={styles.video}>Registruotis</button>
          </div>
          <div className={styles.dirbtuvesCell}>
            <Image
              src='/easylog2.svg'
              alt='reklamos'
              width={600}
              height={300}
            />
            <p>
              Trumpas aprasymas,kuri sugalvos Algina.<br></br>
              Ir kai jau bus keli aprasymai tuomet idesiu cia.<br></br>
              Dar biskis tuscio teksto.<br></br>
              Ir dar kazkiek tuscio teksto.
            </p>
            <h3>Dirbtuviu laikas : 2021 - 06 - 25 diena. 18:00 val. </h3>
            <h4>Kaina - 100 €</h4>
            <button className={styles.video}>Registruotis</button>
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
        <h2>Mokymai</h2>
        <section className={styles.dirbtuvesSection}>
          <div className={styles.dirbtuvesCell}>
            <Image
              src='/easylog2.svg'
              alt='reklamos'
              width={600}
              height={300}
            />
            <p>
              Trumpas aprasymas,kuri sugalvos Algina.<br></br>
              Ir kai jau bus keli aprasymai tuomet idesiu cia.<br></br>
              Dar biskis tuscio teksto.<br></br>
              Ir dar kazkiek tuscio teksto.
            </p>
            <h3>Dirbtuviu laikas : 2021 - 06 - 25 diena. 18:00 val. </h3>
            <h4>Kaina - 100 € (valandos)</h4>
            <button className={styles.video}>Registruotis</button>
          </div>
          <div className={styles.dirbtuvesCell}>
            <Image
              src='/easylog2.svg'
              alt='reklamos'
              width={600}
              height={300}
            />
            <p>
              Trumpas aprasymas,kuri sugalvos Algina.<br></br>
              Ir kai jau bus keli aprasymai tuomet idesiu cia.<br></br>
              Dar biskis tuscio teksto.<br></br>
              Ir dar kazkiek tuscio teksto.
            </p>
            <h3>Dirbtuviu laikas : 2021 - 06 - 25 diena. 18:00 val. </h3>
            <h4>Kaina - 100 € (valandos)</h4>
            <button className={styles.video}>Registruotis</button>
          </div>
          <div className={styles.dirbtuvesCell}>
            <Image
              src='/easylog2.svg'
              alt='reklamos'
              width={600}
              height={300}
            />
            <p>
              Trumpas aprasymas,kuri sugalvos Algina.<br></br>
              Ir kai jau bus keli aprasymai tuomet idesiu cia.<br></br>
              Dar biskis tuscio teksto.<br></br>
              Ir dar kazkiek tuscio teksto.
            </p>
            <h3>Dirbtuviu laikas : 2021 - 06 - 25 diena. 18:00 val. </h3>
            <h4>Kaina - 100 € (valandos)</h4>
            <button className={styles.video}>Registruotis</button>
          </div>
          <div className={styles.dirbtuvesCell}>
            <Image
              src='/easylog2.svg'
              alt='reklamos'
              width={600}
              height={300}
            />
            <p>
              Trumpas aprasymas,kuri sugalvos Algina.<br></br>
              Ir kai jau bus keli aprasymai tuomet idesiu cia.<br></br>
              Dar biskis tuscio teksto.<br></br>
              Ir dar kazkiek tuscio teksto.
            </p>
            <h3>Dirbtuviu laikas : 2021 - 06 - 25 diena. 18:00 val. </h3>
            <h4>Kaina - 100 € (valandos)</h4>
            <button className={styles.video}>Registruotis</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Art;
