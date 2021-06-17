import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Link2, animateScroll as scroll } from "react-scroll";

function Navigation(props) {
    return (
        <div className="navigation">
            {/*<nav class="navbar navbar-expand navbar-dark bg-dark">*/}
            <nav class = "navbar transparent navbar-inverse navbar-fixed-top">
                <div class="container">

                    <Link class="navbar-brand" to="/">
                        Alina Momin
                    </Link>

                    <div>
                        <ul class="navbar-nav ml-auto">
                            <li
                                class={`nav-item  ${
                                    props.location.pathname === "/" ? "active" : ""
                                }`}
                            >
                                <Link class="nav-link" to="/">
                                    Home
                                    <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li
                                class={`nav-item  ${
                                    props.location.pathname === "/about" ? "active" : ""
                                }`}
                            >
                                <Link class="nav-link" to="/about">
                                    About Me
                                </Link>
                            </li>

                            <li
                                class={`nav-item  ${
                                    props.location.pathname === "/blog" ? "active" : ""
                                }`}
                            >
                                <Link class="nav-link" to="/blog">
                                    Blog
                                </Link>
                            </li>

                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/projects" ? "active" : ""
                                }`}
                            >
                                <Link class="nav-link" to="/projects">
                                    Projects
                                </Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);