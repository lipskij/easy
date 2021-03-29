import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Art = () => {
  return (
    <div>
      <Head>
        <title>EASY</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main>
        <h1>Art In Action</h1>
        <button>Video</button>
        <button>Dirbtuves</button>
        <button>Mokymai</button>
      </main>
      <Footer />
    </div>
  );
};

export default Art;
