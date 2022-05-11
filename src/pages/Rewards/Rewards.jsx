import "./Rewards.scss";
import Header from "../../components/Header/Header";
import EarnStars1 from "../../assets/images/Earn-stars-1.png";
import EarnStars2 from "../../assets/images/Earn-stars-2.png";
import EarnStars3 from "../../assets/images/Earn-stars-3.png";
import EarnStars4 from "../../assets/images/Earn-stars-4.webp";
import EarnStars5 from "../../assets/images/Earn-stars-5.webp";
import EndlessExtras1 from "../../assets/images/Endless-extras-1.jpg";
import EndlessExtras2 from "../../assets/images/Endless-extras-2.jpg";
import EndlessExtras3 from "../../assets/images/Endless-extras-3.jpg";
import GettingStarted1 from "../../assets/images/Getting-started-1.jpg";
import GettingStarted2 from "../../assets/images/Getting-started-2.webp";
import GettingStarted3 from "../../assets/images/Getting-started-3.jpg";
import Option1 from "../../assets/images/Option-1.webp";
import Option2 from "../../assets/images/Option-2.webp";
import Option3 from "../../assets/images/Option-3.webp";
import Option4 from "../../assets/images/Option-4.webp";
import Option5 from "../../assets/images/Option-5.webp";
import { useState, useEffect } from "react";

export const Rewards = () => {
    document.title = "Starbucks® Rewards - Order Ahead, Endless Extras, Free Coffee: Starbucks Coffee Company";

    const [option, setOption] = useState({
        optionActive: ["active", "", "", "", ""],
        underlinePosition: "0%"
    });

    const [input, setInput] = useState({
        text: "",
        active: "",
        error: "",
        haveText: ""
    });

    const [mark, setMark] = useState(false);

    const GetOption = (e) => {
        const order = parseInt(e.target.getAttribute("order"));

        for (let i = 0; i < option.optionActive.length; i++) {
            option.optionActive[i] = i === order ? "active" : "";
        }

        option.underlinePosition = String(20 * order) + "%";

        setOption((prevValue) => {
            return ({
                optionActive: prevValue.optionActive,
                underlinePosition: String(20 * order) + "%"
            })
        });
    }

    const HandleChange = (e) => {
        if (input.text.length > -1) {
            setInput((prevValue) => ({
                text: e.target.value,
                active: "active",
                error: "",
                haveText: prevValue.haveText
            }));
        }
    }

    const HandleClickOutside = (e) => {
        if (e.target.closest("div").classList.contains("star-code-form")) {
            if (!mark) {
                setMark(true);
                setInput((prevValue) => ({
                    text: prevValue.text,
                    active: "active",
                    error: "",
                    haveText: ""
                }));
            }
            if (mark) {
                if (input.error === "error") {
                    setInput((prevValue) => ({
                        text: prevValue.text,
                        active: "active",
                        error: "error",
                        haveText: ""
                    }));
                }
                else {
                    setInput((prevValue) => ({
                        text: prevValue.text,
                        active: "active",
                        error: "",
                        haveText: ""
                    }));
                }
            }
        }
        else {
            if (mark) {
                if (input.text !== "") {
                    setInput((prevValue) => ({
                        text: prevValue.text,
                        active: "",
                        error: "",
                        haveText: "have-text"
                    }));
                }
                else {
                    setInput((prevValue) => ({
                        text: prevValue.text,
                        active: "",
                        error: "error",
                        haveText: ""
                    }));
                }
            }
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", HandleClickOutside);
        return (() => {
            document.removeEventListener("mousedown", HandleClickOutside);
        })
    });

    return (
        <>
            <Header rewardsActive="active"/>
            <main id="rewards">
                <section className="banner">
                    <h1>STARBUCKS® REWARDS</h1>
                    <a href="/">Join in the app</a>
                </section>

                <section className="rewards-section">
                    <div className="heading-container">
                        <h1>FREE COFFEE <br /> IS A TAP AWAY</h1>
                        <p className="intro">Join now to start earning Rewards</p>
                        <div className="join-in-app">
                            <a href="/">Join in the app</a>
                        </div>
                        <div className="join-online">
                            <a href="/">Or join online</a>
                        </div>
                    </div>
                </section>

                <section className="rewards-section">
                    <h2>Getting started is easy</h2>
                    <p className="intro">Earn Stars and get rewarded in a few easy steps.</p>
                    <div className="getting-started-container">
                        <div className="getting-started">
                            <img src={GettingStarted1} alt="" />
                            <div className="text">
                                <h3>Download the Starbucks® app</h3>
                                <p><a href="/">Join in the app</a> to get access to the full range of
                                Starbucks® Rewards benefits. You can also <a href="/">join online</a>.</p>
                            </div>
                        </div>
                        <div className="getting-started">
                            <img src={GettingStarted2} alt="" />
                            <div className="text">
                                <h3>Order and pay how you'd like</h3>
                                <p>Use cash, credit/debit card or save some time and pay right through
                                    the app. You'll collect Stars all ways. <a href="/">Learn how</a>.</p>
                            </div>
                        </div>
                        <div className="getting-started">
                            <img src={GettingStarted3} alt="" />
                            <div className="text">
                                <h3>Earn Stars, get Rewards</h3>
                                <p>As you earn Stars, you can redeem them for Rewards—like free food,
                                    drinks, and more. Start redeeming with as little as 25 Stars!</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="rewards-section">
                    <h2>Get your favorites for free</h2>
                    <div className="option-btn">
                        <button type="button" onClick={GetOption} order="0">25<span><i className="fa-solid fa-star"></i></span></button>
                        <button type="button" onClick={GetOption} order="1">50<span><i className="fa-solid fa-star"></i></span></button>
                        <button type="button" onClick={GetOption} order="2">150<span><i className="fa-solid fa-star"></i></span></button>
                        <button type="button" onClick={GetOption} order="3">200<span><i className="fa-solid fa-star"></i></span></button>
                        <button type="button" onClick={GetOption} order="4">400<span><i className="fa-solid fa-star"></i></span></button>
                        <span className="underline" style={{"left": option.underlinePosition}}></span>
                    </div>
                    <div className="option">
                        <div className={"content " + option.optionActive[0]}>
                            <img src={Option1} alt="" />
                            <h3>Customize your drink</h3>
                            <p>Make your drink just right with an extra espresso shot, dairy substitute
                                or a dash of your favorite syrup.</p>
                        </div>
                        <div className={"content " + option.optionActive[1]}>
                            <img src={Option2} alt="" />
                            <h3>Brewed hot coffee, bakery item or hot tea</h3>
                            <p>Pair coffee cake or an almond croissant with your fresh cup of hot brew.</p>
                        </div>
                        <div className={"content " + option.optionActive[2]}>
                            <img src={Option3} alt="" />
                            <h3>Handcrafted drink, hot breakfast or parfait</h3>
                            <p>Have a really good morning with a breakfast sandwich, oatmeal or your
                                favorite drink.</p>
                        </div>
                        <div className={"content " + option.optionActive[3]}>
                            <img src={Option4} alt="" />
                            <h3>Salad, sandwich or protein box</h3>
                            <p>Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese
                                Protein Box.</p>
                        </div>
                        <div className={"content " + option.optionActive[4]}>
                            <img src={Option5} alt="" />
                            <h3>Select merchandise or at-home coffee</h3>
                            <p>Take home a signature cup, a bag of coffee or your choice of select
                                coffee accessories.</p>
                        </div>
                    </div>
                </section>

                <section className="rewards-section">
                    <h2>Endless Extras</h2>
                    <p className="intro">Joining Starbucks® Rewards means unlocking access to exclusive
                    benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.</p>
                    <div className="endless-extras-container">
                        <div className="endless-extras">
                            <button type="button">
                                <img src={EndlessExtras1} alt="" />
                            </button>
                            <div className="text">
                                <h3>Fun freebies</h3>
                                <p>Not only can you earn free coffee, look forward to a birthday treat
                                    plus coffee and tea refills.</p>
                                <a href="/">Learn more</a>
                            </div>
                        </div>
                        <div className="endless-extras">
                            <button type="button">
                                <img src={EndlessExtras2} alt="" />
                            </button>
                            <div className="text">
                                <h3>Order & pay ahead</h3>
                                <p>Enjoy the convenience of in-store, curbside or drive-thru pickup at
                                    select stores.</p>
                                <a href="/">Learn more</a>
                            </div>
                        </div>
                        <div className="endless-extras">
                            <button type="button">
                                <img src={EndlessExtras3} alt="" />
                            </button>
                            <div className="text">
                                <h3>Get to free faster</h3>
                                <p>Earn Stars even quicker with Bonus Star challenges, Double Star Days
                                    and exciting games.</p>
                                <a href="/">Learn more</a>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="rewards-section">
                    <h2>Cash or card, you earn Stars</h2>
                    <p className="intro">No matter how you pay, you can earn Stars with your morning coffee. Those
                        Stars add up to (really delicious) Rewards.</p>
                    <div className="earn-stars-container">
                        <div className="earn-stars">
                            <h3>1 <span><i className="fa-solid fa-star"></i></span> per dollar</h3>
                            <p>Pay as you go</p>
                            <div className="content">
                                <img src={EarnStars1} alt="" />
                                <div className="text">
                                    <h4>Scan and pay separately</h4>
                                    <p>Use cash or credit/debit card at the register.</p>
                                </div>
                            </div>
                            <div className="content">
                                <img src={EarnStars2} alt="" />
                                <div className="text">
                                    <h4>Save payment in the app</h4>
                                    <p>Check-out faster by saving a credit/debit card or PayPal to your
                                        account. You'll be able to order ahead or scan and pay at the
                                        register in one step.</p>
                                </div>
                            </div>
                        </div>
                        <div className="earn-stars">
                            <h3>2 <span><i className="fa-solid fa-star"></i></span> per dollar</h3>
                            <p>Add funds in the app</p>
                            <div className="content">
                                <img src={EarnStars3} alt="" />
                                <div className="text">
                                    <h4>Preload</h4>
                                    <p>To save time and earn Stars twice as fast, add money to your digital
                                        Starbucks Card using any payment option. Scan and pay in one step
                                        or order ahead in the app.</p>
                                </div>
                            </div>
                            <div className="content">
                                <img src={EarnStars4} alt="" />
                                <div className="text">
                                    <h4>Register your gift card</h4>
                                    <p>Then use it to pay through the app. You can even consolidate balances
                                        from multiple cards in one place.</p>
                                </div>
                            </div>
                        </div>
                        <div className="earn-stars">
                            <h3>3 <span><i className="fa-solid fa-star"></i></span> per dollar</h3>
                            <p>With Starbucks® Rewards Visa® Card</p>
                            <div className="content">
                                <img src={EarnStars5} alt="" />
                                <div className="text">
                                    <h4>Earn Stars even faster</h4>
                                    <p>Earn Stars on all purchases you make with
                                        our <a href="/">
                                            credit card
                                            <span><i className="fa-solid fa-up-right-from-square"></i></span>
                                        </a> opens
                                        in new window in and outside of Starbucks. Earn 1 Star per $1
                                        when you digitally preload your Starbucks Card with your Starbucks®
                                        Rewards Visa® Card, and earn 2 Stars per $1 when you pay with that
                                        preloaded Starbucks Card.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="rewards-section">
                    <h2>Star Codes</h2>
                    <p className="intro">Yesssss. You've got Stars in your hand. Enter your code here and we'll add
                        Stars to your account.</p>
                    <form onSubmit={(e) => {e.preventDefault()}}>
                        <div className={"star-code-input " + input.active + " " + input.error + " " + input.haveText}>
                            <div className="star-code-form">
                                <label htmlFor="star-codes">*Enter your Star Code</label>
                                <input id="star-codes" type="text" onChange={HandleChange} />
                            </div>
                            <p><span><i className="fa-solid fa-xmark"></i></span>Please enter a Star code.</p>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </section>

                <section className="rewards-section">
                    <h2>Questions</h2>
                    <p className="intro">We want to help in any way we can. You can ask your barista anytime or we've
                        answered the most commonly asked
                        questions <a href="/">
                            right over here
                            <span><i className="fa-solid fa-up-right-from-square"></i></span>
                        </a>
                    </p>
                </section>

                <section className="rewards-section">
                    <p>At participating stores. Restrictions apply.</p>
                    <div>
                        <h4>EARNING STARS</h4>
                        <p>Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks
                            Card reloads.</p>
                        <p>Earn 1 Star per $1 spent when you scan your member barcode in the app,
                            then pay with cash, credit/debit cards or mobile wallets at participating
                            stores. You can also earn 1 Star per $1 spent when you link a payment
                            method and pay directly through the app.</p>
                        <p>Earn 2 Stars per $1 spent when you load funds and pay with your digital
                            Starbucks Card in the app. You can also earn 2 Stars per $1 spent when
                            you pay in-person at a participating store with your registered physical
                            Starbucks Card or scan your member barcode in the app, and then use any
                            physical Starbucks Card (regardless of whether it is registered) to complete
                            the purchase.</p>
                    </div>
                    <div>
                        <h4>TERMS OF USE</h4>
                        <p>
                            For full program details
                            visit <a href="/">
                                starbucks.com/rewards/terms
                                <span><i className="fa-solid fa-up-right-from-square"></i></span>
                            </a>
                        </p>
                        <p>* Earn 1 Star per $1 when digitally loading your Starbucks Card with your
                            Starbucks® Rewards Visa® Card: See your Card Rewards Program Agreement 
                            or more details.</p>
                        <p>Starbucks® Rewards benefits are available at participating Starbucks stores.
                            Not all stores have the ability to honor Rewards at this time. Visit
                            the <a href="/">
                                Starbucks Store Locator
                                <span><i className="fa-solid fa-up-right-from-square"></i></span>
                            </a> and
                        search for locations honoring “Redeem Rewards”.</p>
                        <p>Deposit and credit card products provided by JPMorgan Chase Bank, N.A. Member FDIC</p>
                    </div>
                    <div>
                        <h4>BENEFITS</h4>
                        <p>Free refills available during same in-store visit only. To qualify for the
                            Birthday Reward, you must have made at least one Star-earning transaction.</p>
                    </div>
                    <div>
                        <h4>REDEEMING REWARDS</h4>
                        <p>Rewards cannot be redeemed for alcoholic beverages or multi-serve items.
                            Not all stores honor tiered Rewards. Select stores redeem 150 Stars for
                            free food or drink items only.</p>
                    </div>
                </section>
            </main>
        </>
    )
}