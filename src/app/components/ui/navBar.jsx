import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="bg-light">
            <div className="container px-0">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <h1 className="navbar-brand my-0" href="#">
                            Hackathon
                        </h1>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        activeClassName="nav-link active"
                                        to="/reactHackathon/"
                                        exact
                                    >
                                        Главная
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        activeClassName="nav-link active"
                                        to="/reactHackathon/favorites"
                                    >
                                        Избранное
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
