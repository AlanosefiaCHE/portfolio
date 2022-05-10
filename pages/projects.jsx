
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Navbar/Footer'
import Link from 'next/link';
export default function Projects() {
  return (
    <>
      <Navbar />

      <main>

        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto text">
              <h1 className="fw-light">My projects</h1>
              <p className="Text">On this page i will showcase the projects i did in school or in my free time.</p>
            </div>
          </div>
        </section>

        <div className="album py-5 ">
          <div className="container">

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

              <Link href="/#">
                <article>
                  <div className="col">
                    <div className="card shadow-sm">
                      <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                      <div className="card-body">
                        <p className="card-text"><b>Database</b></p>
                        <p>My first school subject</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>


              <Link href="/#">
                <article>
                  <div className="col">
                    <div className="card shadow-sm">
                      <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                      <div className="card-body">
                        <p className="card-text"><b>Front-end development</b></p>
                        <p>My first school subject</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link >




              <Link href="/#" >
                <article>
                  <div className="col">
                    <div className="card shadow-sm">
                      <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                      <div className="card-body">
                        <p className="card-text"><b>Business modeling</b></p>
                        <p>My first school subject</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </article>
              </Link>



              <Link href="/#">
                <article>
                  <div className="col">

                    <div className="card shadow-sm">
                      <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                      <div className="card-body">
                        <p className="card-text"><b>Imperative programming</b></p>
                        <p>My first school subject</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            

                <Link href="/#">
                  <article>
                  <div className="col">
                          <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                    <div className="card-body">
                      <p className="card-text"><b>Development & Tooling</b></p>
                      <p>My first school subject</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>

                      </div>
                    </div>
                  </div>
              </div> 
                  </article>
                  </Link>
           
             

                <Link href="/#">
                  <article>
 <div className="col">
 <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                    <div className="card-body">
                      <p className="card-text"><b>Object oriented programming</b></p>
                      <p>My first school subject</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>

                      </div>
                    </div>
                  </div>
              </div>
                  </article>
                  </Link>
                  


                <Link href="/#">
                  <article>
                  <div className="col">

                  <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                    <div className="card-body">
                      <p className="card-text"><b>Project managment</b></p>
                      <p>My first school subject</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>

                      </div>
                    </div>
                  </div>
              </div>

                  </article>
                  </Link>

            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
