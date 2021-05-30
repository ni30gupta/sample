import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (

        <main>
            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <a
                        href="/"
                        class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
                    >
                        <img
                            src="../images/Yoga-niyama.png"
                            alt="yogaPhoto"
                            style={{ width: "5rem", height: "5rem" }}
                        />
                        {/* <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg> */}
                    </a>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <a href="#" className="nav-link px-2 link-dark">
                                <Link to={""}>About</Link>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2 link-dark">
                                <Link to={"/instructors"}>Instructors</Link>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="nav-link px-2 link-dark">
                                Classes
                </a>
                        </li>

                        <li>
                            <a href="#" className="nav-link px-2 link-dark">
                                Contact us
                </a>
                        </li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <button
                            type="button"
                            className="btn btn-outline-primary me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            Login
              </button>
                        <button type="button" className="btn btn-primary">
                            Sign-up
              </button>
                    </div>
                </header>

            </div>
        </main>

    )
}

export default Header
