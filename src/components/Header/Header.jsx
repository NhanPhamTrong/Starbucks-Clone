import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

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

    useEffect(() => {
        document.body.classList = active.navbarActive === "active" ? "active-navbar" : "";
    }, [active.navbarActive]);

    return (
        <header>
            <div className="header-container">
                <div className="container">
                    <Link className="brand" to="/" aria-label="brand"></Link>
                    <button className={"navbar-toggler " + active.navbarActive} onClick={ToggleNavbar} type="button" aria-label="Navbar Toggler">
                        <span className="circle"></span>
                        <div>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </button>
                </div>
            </div>
            <nav className={active.navbarActive}>
                <div className={"nav-container " + active.navbarActive}>
                    <ul className="navbar">
                        <li className="nav-item">
                            <button className="open-btn" onClick={ToggleMenu} type="button" aria-label="Open sub-menu">
                                <span>Menu</span>
                                <i className="fa-solid fa-angle-right"></i>
                            </button>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link " + props.menuActive} to="/menu">Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link " + props.rewardsActive} to="/rewards">Rewards</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link " + props.giftCardsActive} to="/gift-cards">Gift Cards</Link>
                        </li>
                    </ul>
                    <hr />
                    <div className="navbar-btn">
                        <div>
                            <Link className="sign-in-btn" to="/sign-in">Sign in</Link>
                            <Link className="join-now-btn" to="/create">Join now</Link>
                        </div>
                        <Link className="store-locator-btn" to="/store-locator">
                            <i className="fa-solid fa-location-dot"></i>
                            <span>Find a store</span>
                        </Link>
                    </div>
                </div>
                <ul className={"menu " + active.menuActive}>
                    <li className="menu-item">
                        <button className="close-btn" onClick={ToggleMenu} type="button" aria-label="Close sub-menu">
                            <span>Menu</span>
                            <i className="fa-solid fa-angle-left"></i>
                        </button>
                    </li>
                    <li className="menu-item">
                        <Link className="menu-link" to="/menu">All products</Link>
                    </li>
                    <li className="menu-item">
                        <Link className="menu-link" to="/menu">Featured</Link>
                    </li>
                    <li className="menu-item">
                        <Link className="menu-link" to="/menu">Previous</Link>
                    </li>
                    <li className="menu-item">
                        <Link className="menu-link" to="/menu">Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;