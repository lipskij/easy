import Head from "next/head";
import Link from "next/link";
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
          <Link href='/commercial'>
            <a className={styles.card} style={{ backgroundColor: "#ede6a8" }}>
              Commercial
            </a>
          </Link>
          <Link href='/art'>
            <a className={styles.card} style={{ backgroundColor: "#eda8a8" }}>
              Art
            </a>
          </Link>
          <Link href='/culturalEvents'>
            <a className={styles.card} style={{ backgroundColor: "#a8afed" }}>
              Cultural Events
            </a>
          </Link>
          <Link href='/p'>
            <a className={styles.card} style={{ backgroundColor: "#d0eda8" }}>
              Private
            </a>
          </Link>

          <Link href='/m'>
            <a className={styles.card} style={{ backgroundColor: "#a8edd3", marginLeft: '14rem' }}>
              Mokymai
            </a>
          </Link>
          <Link href='/d'>
            <a className={styles.card} style={{ backgroundColor: "#a8d4ed" ,marginLeft: '14rem'}}>
              Dirbtuves
            </a>
          </Link>
          {/* <Link href='/idk'>
            <a className={styles.card} style={{ backgroundColor: "#bfa8ed" }}>
              ¯\_(ツ)_/¯
            </a>
          </Link> */}
          <Link href='/contacts'>
            <a className={styles.card} style={{ backgroundColor: "#eda8d5",marginLeft: '14rem' }}>
              Contacts
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
