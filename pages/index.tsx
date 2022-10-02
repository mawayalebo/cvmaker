import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import UserForm from '../components/UserForm'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>CVMaker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header/>
        <UserForm/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
