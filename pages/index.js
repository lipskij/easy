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
            <a className={styles.card} href='/art'>
              C
            </a>
          </Link>
          <Link href='/art'>
            <a className={styles.card} href='/art'>
              Art
            </a>
          </Link>
          <Link href='/culturalEvents'>
            <a className={styles.card} href='/art'>
              Cultural Events
            </a>
          </Link>
          <Link href='/P'>
            <a className={styles.card} href='/art'>
              P
            </a>
          </Link>
          <Link href='/M'>
            <a className={styles.card} href='/art'>
              M
            </a>
          </Link>
          <Link href='/D'>
            <a className={styles.card} href='/art'>
              D
            </a>
          </Link>
          <Link href='idk'>
            <a className={styles.card} href='/art'>
              ¯\_(ツ)_/¯
            </a>
          </Link>
          <Link href='/contacts'>
            <a className={styles.card}>Contacts</a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
