import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from "../components/Nav";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <Header/>
    </>
    ) 
  }

export default Home

