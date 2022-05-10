import "./Footer.scss";

export const Footer = () => {
    const ClickDropdown = (e) => {
        const dropdownClassList = e.target.closest(".dropdown").classList;
        dropdownClassList.value = dropdownClassList.contains("active") ? "dropdown" : "dropdown active";
    }

    return (
        <footer>
            <div className="dropdown-section">
                <div className="dropdown">
                    <button type="button" onClick={ClickDropdown} aria-label="About">
                        About Us
                        <span><i className="fa-solid fa-angle-down"></i></span>
                    </button>
                    <ul>
                        <div>
                            <li>
                                <p>Our Company</p>
                            </li>
                            <li>
                                <p>Our Coffee</p>
                            </li>
                            <li>
                                <p>Stories and News</p>
                            </li>
                            <li>
                                <p>Starbucks Archive</p>
                            </li>
                            <li>
                                <p>Investor Relations</p>
                            </li>
                            <li>
                                <p>Customer Service</p>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="dropdown">
                    <button type="button" onClick={ClickDropdown} aria-label="Careers">
                        Careers
                        <span><i className="fa-solid fa-angle-down"></i></span>
                    </button>
                    <ul>
                        <div>
                            <li>
                                <p>Culture and Values</p>
                            </li>
                            <li>
                                <p>Inclusion, Diversity, and Equity</p>
                            </li>
                            <li>
                                <p>College Achievement Plan</p>
                            </li>
                            <li>
                                <p>Alumni Community</p>
                            </li>
                            <li>
                                <p>U.S. Careers</p>
                            </li>
                            <li>
                                <p>International Careers</p>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="dropdown">
                    <button type="button" onClick={ClickDropdown} aria-label="Social Impact">
                        Social Impact
                        <span><i className="fa-solid fa-angle-down"></i></span>
                    </button>
                    <ul>
                        <div>
                            <li>
                                <p>People</p>
                            </li>
                            <li>
                                <p>Planet</p>
                            </li>
                            <li>
                                <p>Environmental and Social Impact Reporting</p>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="dropdown">
                    <button type="button" onClick={ClickDropdown} aria-label="For Business Partners">
                        For Business Partners
                        <span><i className="fa-solid fa-angle-down"></i></span>
                    </button>
                    <ul>
                        <div>
                            <li>
                                <p>Landlord Support Center</p>
                            </li>
                            <li>
                                <p>Suppliers</p>
                            </li>
                            <li>
                                <p>Corporate Gift Card Sales</p>
                            </li>
                            <li>
                                <p>Office and Foodservice Coffee</p>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="dropdown">
                    <button type="button" onClick={ClickDropdown} aria-label="Order and Pickup">
                        Order and Pickup
                        <span><i className="fa-solid fa-angle-down"></i></span>
                    </button>
                    <ul>
                        <div>
                            <li>
                                <p>Order on the App</p>
                            </li>
                            <li>
                                <p>Order on the Web</p>
                            </li>
                            <li>
                                <p>Delivery</p>
                            </li>
                            <li>
                                <p>Order and Pickup Options</p>
                            </li>
                            <li>
                                <p>Explore and Find Coffee for Home</p>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>

            <hr />

            <div className="social-media">
                <button aria-label="Spotify"><span><i className="fa-brands fa-spotify"></i></span></button>
                <button aria-label="Facebook"><span><i className="fa-brands fa-facebook-f"></i></span></button>
                <button aria-label="Pinterest"><span><i className="fa-brands fa-pinterest-p"></i></span></button>
                <button aria-label="Instagram"><span><i className="fa-brands fa-instagram"></i></span></button>
                <button aria-label="Youtube"><span><i className="fa-brands fa-youtube"></i></span></button>
                <button aria-label="Twitter"><span><i className="fa-brands fa-twitter"></i></span></button>
            </div>
            <ul className="footer-menu">
                <li>
                    <p>Privacy Policy</p>
                </li>
                <span></span>
                <li>
                    <p>Terms of Use</p>
                </li>
                <span></span>
                <li>
                    <p>CA Supply Chain Act</p>
                </li>
                <span></span>
                <li>
                    <p>Cookie Preferences</p>
                </li>
            </ul>
            <p className="copyright">© 2022 Starbucks Coffee Company. All rights reserved.</p>
        </footer>
    )
}