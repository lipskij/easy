import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EASY</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Image src='/easylogo.png' alt='logo' width={200} height={100} />
        <div className={styles.navigationCard}>
          <a className={styles.card} href='/art'>
            C
          </a>
          <Link href='/art'>
            <a className={styles.card} href='/art'>
              Art
            </a>
          </Link>
          <a className={styles.card} href='/art'>
            Cultural Events
          </a>
          <a className={styles.card} href='/art'>
            P
          </a>
          <a className={styles.card} href='/art'>
            M
          </a>
          <a className={styles.card} href='/art'>
            D
          </a>
          <a className={styles.card} href='/art'>
            ¯\_(ツ)_/¯
          </a>
          <Link href='/contacts'>
            <a className={styles.card}>Contacts</a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
