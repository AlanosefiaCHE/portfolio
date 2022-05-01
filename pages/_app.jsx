
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Head from 'next/head'
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
     
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
}, []);
  return (
    <>
    <Head>
      
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
          
       <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
 
    <Component {...pageProps} />
    </>
    )
  }
export default MyApp
