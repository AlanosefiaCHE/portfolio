import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Navbar/Footer'
import Ik from '../images/Ik.jpg'

export default function Home() {
  return (
    <>
      <Navbar />

      <div className='hometext container'>
        <div>
          <div className='logo-homepage'>
            <Image src="/logo.svg" alt="me" width="50" height="50" />
          </div>
          <div>
            <img src={Ik} alt="Alan" width="150" height="150" />
          </div>
          <div className='text-block'>
            <h1 className='text'>Welcome to my website</h1>
            <p className='text'>My name is Alan Osefia  and i'm a first year student at the Ede Christian University of Applied Sciences
              I'm studying to become a software engineer.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>


  )
}
