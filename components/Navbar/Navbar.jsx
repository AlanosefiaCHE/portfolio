import Link from 'next/link';
import React from 'react';


export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark fixed-top test" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Alan</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 navbar_text">
                                <li className="nav-item">
                                    <Link href="/">
                                        <a className="navbar_text active " aria-current="page" >Home</a>
                                    </Link>

                                </li>
                                <li className="nav-item navbar_text">
                                    <Link href="/projects">
                                        <a className="navbar_text" >Projects</a>
                                    </Link>

                                </li>
                                <li className="nav-item dropdown">
                                    <a className="navbar_text dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        More
                                    </a>
                                    <ul className="dropdown-menu navbar_text" aria-labelledby="offcanvasNavbarDropdown">

                                        <li>
                                            <Link href="/grades">
                                                <a className=" navbar_text" >Grades</a>
                                            </Link>
                                        </li>


                                        <li>
                                            <Link href="/stocks">
                                                <a className="navbar_text" >Stocks</a>
                                            </Link>

                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a className="dropdown-item navbar_text" >About me</a>
                                            </Link>

                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}
