import React from "react";
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const CulturalEvents = () => {
  return (
    <div>
      <Head>
        <title>EASY</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main>
        <h1>Creative Production</h1>
        <button>Video</button>
        <button>Renginiai</button>
        <button>Fotosesijos</button>
      </main>
      <Footer />
    </div>
  );
};

export default CulturalEvents;
