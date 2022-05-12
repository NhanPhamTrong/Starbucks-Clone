import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Home.scss";
import Home1 from "../../assets/images/Home-1.webp";
import Home2 from "../../assets/images/Home-2.jpg";
import Home3 from "../../assets/images/Home-3.jpg";
import Home4 from "../../assets/images/Home-4.webp";
import Home5 from "../../assets/images/Home-5.webp";
import Home6 from "../../assets/images/Home-6.jpg";
import Home7 from "../../assets/images/Home-7.jpg";

// Change some <button> and <p> to <Link>

export const Home = () => {
    document.title = "Starbucks Coffee Company";

    return (
        <>
            <Header />
            <main id="Home">
                <section className="home-section">
                    <img src={Home1} alt="" />
                    <div className="text">
                        <h1>Sign up for Starbucks® Rewards</h1>
                        <p>Starting 4/22, get 25 Stars when you bring your clean, reusable cup
                            into the café. Stars can quickly add up to Rewards.*</p>
                        <Link to="/sign-in">Join now</Link>
                    </div>
                </section>

                <section className="home-section">
                    <img src={Home2} alt="" />
                    <div className="text">
                        <h1>Gifts of gratitude</h1>
                        <p>Treat that special mom, nurse or teacher to a Starbucks gift card.</p>
                        <button type="button" aria-label="Buy now">Buy now</button>
                    </div>
                </section>

                <section className="home-section">
                    <img src={Home3} alt="" />
                    <div className="text">
                        <h1>That Nitro flow</h1>
                        <p>Keep it classic with a velvety-smooth Nitro Cold Brew or add a delicious
                            twist with Vanilla Sweet Cream Nitro Cold Brew.</p>
                        <button type="button" aria-label="Order now">Order now</button>
                    </div>
                </section>

                <section className="home-section">
                    <img src={Home4} alt="" />
                    <div className="text">
                        <h2>Earning 4,500 Bonus Stars is Super Starifying</h2>
                        <p>Earn more Stars and even more Rewards with a <span>$0 intro annual fee
                            for your first year</span> with the Starbucks® Rewards Visa® Card. Plus
                            your Stars won't expire - an exclusive Starbucks benefit for cardmembers.
                            Now that's Super Starifying.</p>
                        <button type="button" aria-label="Learn about bonus star">Learn now</button>
                    </div>
                </section>

                <section className="home-section">
                    <img src={Home5} alt="" />
                    <div className="text">
                        <h2>Learn what's new at Starbucks</h2>
                        <p>Check out the latest news and stories about how we are supporting and
                            investing in the future of our partners (employees).</p>
                        <button type="button" aria-label="Explore">Explore</button>
                    </div>
                </section>

                <section className="home-section">
                    <img src={Home6} alt="" />
                    <div className="text">
                        <h2>Our partners build community</h2>
                        <p>Our Pan-Asian and India Partner Networks are coming together to celebrate
                            Asian American, Native Hawaiian and Pacific Islander Heritage Month.</p>
                        <button type="button" aria-label="Join us">Join us</button>
                    </div>
                </section>

                <section className="home-section">
                    <img src={Home7} alt="" />
                    <div className="text">
                        <h2>Learn what's new at Starbucks</h2>
                        <p>For each Military eGift sold in May, we'll donate $5 to support the mental
                            health and well-being of our military community.**</p>
                        <button type="button" aria-label="Send an eGift">Send an eGift</button>
                    </div>
                </section>

                <section className="home-section">
                    <p>*At participating stores.</p>
                </section>

                <section className="home-section">
                    <p>**For every Starbucks eGift in our Military Appreciation category sold May 1-31,
                        we'll donate $5 to Blue Star Families and Operation Gratitude to support the mental
                        health and well-being of our military community. Donations will be evenly divided
                        between the two organizations. Learn more
                        at <a href="https://bluestarfam.org">https://bluestarfam.org</a> and <a href="https://www.operationgratitude.com/">https://www.operationgratitude.com/</a>.</p>
                </section>
            </main>
        </>
    )
}