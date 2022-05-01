
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Navbar/Footer'

export default function Skills() {
  return (
    <>
      <Navbar />
      <div className='hometext container text'>
        <div>
          <h1>Tech Stack & Skills</h1>
          <p>I have some experience with MySQL workbench, GO, HTML & CSS and i'm currently developing my skills with: React, Next.JS, C# and Javascript</p>
          
          <h2>Coming soon...</h2>

        </div>

      </div>

      <Footer />
    </>
  )
}
