import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Idk = () => {
  return (
    <div>
      <Head>
        <title>EASY</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main>
        <h1>IDK Page</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Idk;
