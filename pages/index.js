import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import BannerTwo from '../components/BannerTwo';
import Banner from "../components/Banner";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EASY</title>
        <link rel='icon' href='/images/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='Easy creative production' />
      </Head>
      <main className={styles.main}>
        <Nav />
        {/* <Banner /> */}
        <BannerTwo />
      </main>
      <Footer />
    </div>
  );
}
