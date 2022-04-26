
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'

export default function About() {
  return (
    <>
    <Navbar />
    <h1>about</h1>
    <button className="btn btn-primary m-3">Button Primary</button>
    </>
  )
}
