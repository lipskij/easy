import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EASY</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Banner />
        <div className={styles.homeText}>
          <h1>
            Mūsų veikla
          </h1>
            <Image src='/clapper.png' alt='clapper' width={250} height={250} />
        </div>
        <div className={styles.navigationCard}>
          <div className={styles.navIndividualCard}>
            <Link href='/commercial'>
              <a className={styles.card}>Komercija</a>
            </Link>
            <p>Komerciniai renginiai</p>
            <p>ir projektai.</p>
          </div>
          <div className={styles.navIndividualCard}>
            <Link href='/art'>
              <a className={styles.card}>Art</a>
            </Link>
            <p>Meniniai projektai</p>
            <p>ir ju ispildymas</p>
          </div>
          <div className={styles.navIndividualCard}>
            <Link href='/culturalEvents'>
              <a className={styles.card}>Kultūriniai renginiai</a>
            </Link>
            <p>Kulturiniai renginiai</p>
            <p>Miesto sventes.</p>
          </div>
          <div className={styles.navIndividualCard}>
            <Link href='/p'>
              <a className={styles.card}>Private</a>
            </Link>
            <p>Privatiems klientams</p>
            <p>Uzsakymai it kita</p>
            <p>informacija.</p>
          </div>
          <div className={styles.navIndividualCard}>
            <Link href='/m'>
              <a className={styles.card}>Mokymai</a>
            </Link>
            <p>Kursai, seminarai,</p>
            <p>paskaitos, apmokymai.</p>
          </div>
          <div className={styles.navIndividualCard}>
            <Link href='/d'>
              <a className={styles.card}>Dirbtuvės</a>
            </Link>
            <p>Pazintinai mokymai</p>
            <p>'work to grow'.</p>
          </div>
          <div className={styles.navIndividualCard}>
            <Link href='/idk'>
              <a className={styles.card}>¯\_(ツ)_/¯</a>
            </Link>
            <p>As nezinau ar busiu cia</p>
            <p>nes neiskaiciau failo.</p>
          </div>
          <div className={styles.navIndividualCard}>
            <Link href='/contacts'>
              <a className={styles.card}>Kontaktai</a>
            </Link>
            <p>Susisiekite su mumis!</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
