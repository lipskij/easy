import React from "react";
import Head from "next/head";
import Banner from "./Banner";
import styles from "../styles/Home.module.css";

const HomeCon = () => {
  return (
    <>
      <Head>
        <title>EASY</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='Easy creative production' />
      </Head>
      <Banner />
    </>
  );
};

export default HomeCon;
