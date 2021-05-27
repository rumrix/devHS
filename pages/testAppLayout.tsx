import React from "react";
import Link from "next/link";
import Head from "next/head";
import AppLayout from "../components/appLayout";

const Home = () => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.js"></script>
      </Head>
      <AppLayout>
        <Link href="/about">
          <a>about</a>
        </Link>
        <div>안녕하세요</div>
      </AppLayout>
    </>
  );
};

export default Home;
