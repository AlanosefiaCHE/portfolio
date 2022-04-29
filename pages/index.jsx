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
       <h1 className='text'>Welcome to my website</h1>
       <p className='text'>My name is Alan Osefia  and i'm a first year student at the Ede Christian University of Applied Sciences</p>
       <p></p>
      <Footer />
    </>
   

  )
}
