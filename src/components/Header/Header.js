import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    const [active, setActive] = useState({
        navbarActive: "",
        menuActive: ""
    });

    const ToggleNavbar = (e) => {
        setActive(prevValue => ({
            navbarActive: e.target.closest("button").classList.contains("active") ? "" : "active",
            menuActive: prevValue.menuActive
        }));
    }

    const ToggleMenu = (e) => {
        setActive(prevValue => ({
            navbarActive: prevValue.navbarActive,
            menuActive: e.target.closest("button").classList.contains("close-btn") ? "" : "active"
        }));
    }

    return (
        <header>
            <div className="container">
                <Link className="brand" to="/Starbucks-Clone" aria-label="brand">aaaaaaaaa</Link>
                <button className={"navbar-toggler " + active.navbarActive} onClick={ToggleNavbar} type="button" aria-label="Navbar Toggler">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav>
                    <ul className={"navbar " + active.navbarActive}>
                        <li className="nav-item">
                            <button className="open-btn" onClick={ToggleMenu} type="button" aria-label="Open sub-menu">
                                <span>Menu</span>
                                <i className="fa-solid fa-angle-right"></i>
                            </button>
                            <ul className={"menu " + active.menuActive}>
                                <li>
                                    <button className="close-btn" onClick={ToggleMenu} type="button" aria-label="Close sub-menu">
                                        <span>Menu</span>
                                        <i className="fa-solid fa-angle-left"></i>
                                    </button>
                                </li>
                                <li>
                                    <Link className="menu-item" to="/menu">All products</Link>
                                </li>
                                <li>
                                    <Link className="menu-item" to="/menu">Featured</Link>
                                </li>
                                <li>
                                    <Link className="menu-item" to="/menu">Previous</Link>
                                </li>
                                <li>
                                    <Link className="menu-item" to="/menu">Favorites</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/Starbucks-Clone/rewards">Rewards</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gift-cards">Gift Cards</Link>
                        </li>
                    </ul>
                    <hr />
                    <div className="navbar-btn">
                        <button type="button" aria-label="Sign in">Sign in</button>
                        <button type="button" aria-label="Join now">Join now</button>
                        <a href="#store-location">
                            <i className="fa-solid fa-location-dot"></i>
                            <span>Find a store</span>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;