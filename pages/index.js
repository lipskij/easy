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
        <div className={styles.navigationCard}>
          <Link href='/C'>
            <a className={styles.card} href='/art' style={{backgroundColor: '#ede6a8'}}>
              C
            </a>
          </Link>
          <Link href='/art'>
            <a className={styles.card} href='/art' style={{backgroundColor: '#eda8a8'}}>
              Art
            </a>
          </Link>
          <Link href='/culturalEvents'>
            <a className={styles.card} href='/art' style={{backgroundColor: '#a8afed'}}>
              Cultural Events
            </a>
          </Link>
          <Link href='/P'>
            <a className={styles.card} href='/art' style={{backgroundColor: '#d0eda8'}}>
              P
            </a>
          </Link>
          <Link href='/M'>
            <a className={styles.card} href='/art' style={{backgroundColor: '#a8edd3'}}>
              M
            </a>
          </Link>
          <Link href='/D'>
            <a className={styles.card} href='/art' style={{backgroundColor: '#a8d4ed'}}>
              D
            </a>
          </Link>
          <Link href='idk'>
            <a className={styles.card} href='/art' style={{backgroundColor: '#bfa8ed'}}>
              ¯\_(ツ)_/¯
            </a>
          </Link>
          <Link href='/contacts'>
            <a className={styles.card} style={{backgroundColor: '#eda8d5'}}>Contacts</a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
