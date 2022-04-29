import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Navbar/Footer'

export default function Home() {
  return (
    <>
     <Navbar />
       <h1>Home</h1>
       <p className='text'></p>
       <p></p>
      <Footer />
    </>
   

  )
}
