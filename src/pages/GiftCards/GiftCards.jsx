import "./GiftCards.scss";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import anytime1 from "../../assets/images/GiftCards/Anytime-1.webp";
import anytime2 from "../../assets/images/GiftCards/Anytime-2.webp";
import anytime3 from "../../assets/images/GiftCards/Anytime-3.webp";
import appreciation1 from "../../assets/images/GiftCards/Appreciation-1.webp";
import appreciation2 from "../../assets/images/GiftCards/Appreciation-2.webp";
import appreciation3 from "../../assets/images/GiftCards/Appreciation-3.webp";
import appreciation4 from "../../assets/images/GiftCards/Appreciation-4.webp";
import appreciation5 from "../../assets/images/GiftCards/Appreciation-5.webp";
import bestFriend1 from "../../assets/images/GiftCards/Best-friend-1.webp";
import bestFriend2 from "../../assets/images/GiftCards/Best-friend-2.webp";
import bestFriend3 from "../../assets/images/GiftCards/Best-friend-3.webp";
import bestFriend4 from "../../assets/images/GiftCards/Best-friend-4.webp";
import birthday1 from "../../assets/images/GiftCards/Birthday-1.webp";
import birthday2 from "../../assets/images/GiftCards/Birthday-2.webp";
import birthday3 from "../../assets/images/GiftCards/Birthday-3.webp";
import birthday4 from "../../assets/images/GiftCards/Birthday-4.webp";
import birthday5 from "../../assets/images/GiftCards/Birthday-5.webp";
import birthday6 from "../../assets/images/GiftCards/Birthday-6.webp";
import bulkGiftCard from "../../assets/images/GiftCards/bulk-gift-cards.webp";
import community1 from "../../assets/images/GiftCards/Community-1.webp";
import community2 from "../../assets/images/GiftCards/Community-2.webp";
import community3 from "../../assets/images/GiftCards/Community-3.webp";
import encouragement1 from "../../assets/images/GiftCards/Encouragement-1.webp";
import encouragement2 from "../../assets/images/GiftCards/Encouragement-2.webp";
import encouragement3 from "../../assets/images/GiftCards/Encouragement-3.webp";
import encouragement4 from "../../assets/images/GiftCards/Encouragement-4.webp";
import father1 from "../../assets/images/GiftCards/Father-1.webp";
import father2 from "../../assets/images/GiftCards/Father-2.webp";
import father3 from "../../assets/images/GiftCards/Father-3.webp";
import father4 from "../../assets/images/GiftCards/Father-4.webp";
import father5 from "../../assets/images/GiftCards/Father-5.webp";
import feature1 from "../../assets/images/GiftCards/Featured-1.webp";
import feature2 from "../../assets/images/GiftCards/Featured-2.webp";
import feature3 from "../../assets/images/GiftCards/Featured-3.webp";
import feature4 from "../../assets/images/GiftCards/Featured-4.webp";
import feature5 from "../../assets/images/GiftCards/Featured-5.webp";
import feature6 from "../../assets/images/GiftCards/Featured-6.webp";
import feature7 from "../../assets/images/GiftCards/Featured-7.webp";
import feature8 from "../../assets/images/GiftCards/Featured-8.webp";
import feature9 from "../../assets/images/GiftCards/Featured-9.webp";
import feature10 from "../../assets/images/GiftCards/Featured-10.webp";
import feature11 from "../../assets/images/GiftCards/Featured-11.webp";
import feature12 from "../../assets/images/GiftCards/Featured-12.webp";
import feature13 from "../../assets/images/GiftCards/Featured-13.webp";
import feature14 from "../../assets/images/GiftCards/Featured-14.webp";
import feature15 from "../../assets/images/GiftCards/Featured-15.webp";
import feature16 from "../../assets/images/GiftCards/Featured-16.webp";
import feature17 from "../../assets/images/GiftCards/Featured-17.webp";
import feature18 from "../../assets/images/GiftCards/Featured-18.webp";
import graduation1 from "../../assets/images/GiftCards/Graduation-1.webp";
import graduation2 from "../../assets/images/GiftCards/Graduation-2.webp";
import graduation3 from "../../assets/images/GiftCards/Graduation-3.webp";
import love1 from "../../assets/images/GiftCards/Love-1.webp";
import love2 from "../../assets/images/GiftCards/Love-2.webp";
import love3 from "../../assets/images/GiftCards/Love-3.webp";
import love4 from "../../assets/images/GiftCards/Love-4.webp";
import militaryAppreciation1 from "../../assets/images/GiftCards/Military-appreciation-1.webp";
import militaryAppreciation2 from "../../assets/images/GiftCards/Military-appreciation-2.jpg";
import militaryAppreciation3 from "../../assets/images/GiftCards/Military-appreciation-3.webp";
import recognition1 from "../../assets/images/GiftCards/Recognition-1.webp";
import recognition2 from "../../assets/images/GiftCards/Recognition-2.webp";
import recognition3 from "../../assets/images/GiftCards/Recognition-3.webp";
import recognition4 from "../../assets/images/GiftCards/Recognition-4.webp";
import spring1 from "../../assets/images/GiftCards/Spring-1.webp";
import spring2 from "../../assets/images/GiftCards/Spring-2.webp";
import spring3 from "../../assets/images/GiftCards/Spring-3.webp";
import spring4 from "../../assets/images/GiftCards/Spring-4.webp";
import teacherAppreciation1 from "../../assets/images/GiftCards/Teacher-appreciation-1.webp";
import teacherAppreciation2 from "../../assets/images/GiftCards/Teacher-appreciation-2.webp";
import teacherAppreciation3 from "../../assets/images/GiftCards/Teacher-appreciation-3.webp";
import teacherAppreciation4 from "../../assets/images/GiftCards/Teacher-appreciation-4.webp";
import thankYou1 from "../../assets/images/GiftCards/Thank-you-1.webp";
import thankYou2 from "../../assets/images/GiftCards/Thank-you-2.webp";
import thankYou3 from "../../assets/images/GiftCards/Thank-you-3.webp";
import thankYou4 from "../../assets/images/GiftCards/Thank-you-4.webp";
import thankYou5 from "../../assets/images/GiftCards/Thank-you-5.webp";
import workplace1 from "../../assets/images/GiftCards/Workplace-1.webp";
import workplace2 from "../../assets/images/GiftCards/Workplace-2.webp";
import workplace3 from "../../assets/images/GiftCards/Workplace-3.webp";
import workplace4 from "../../assets/images/GiftCards/Workplace-4.webp";
import workplace5 from "../../assets/images/GiftCards/Workplace-5.webp";
import { useState, useEffect } from "react";

export const GiftCards = () => {
    document.title = "Starbucks Gift Cards: Starbucks Coffee Company";

    const giftCard = [
        {
            title: "Featured",
            cardList: [feature1, feature2, feature3, feature4, feature5,feature6, feature7, feature8,
                feature9, feature10, feature11, feature12, feature13, feature14, feature15, feature16, feature17, feature18]
        },
        {
            title: "Teacher appreciation",
            cardList: [teacherAppreciation1, teacherAppreciation2, teacherAppreciation3, teacherAppreciation4]
        },
        {
            title: "Birthday",
            cardList: [birthday1, birthday2, birthday3, birthday4, birthday5, birthday6]
        },
        {
            title: "Thank you",
            cardList: [thankYou1, thankYou2, thankYou3, thankYou4, thankYou5]
        },
        {
            title: "Military appreciation",
            cardList: [militaryAppreciation1, militaryAppreciation2, militaryAppreciation3]
        },
        {
            title: "Graduation",
            cardList: [graduation1, graduation2, graduation3]
        },
        {
            title: "Appreciation",
            cardList: [appreciation1, appreciation2, appreciation3, appreciation4, appreciation5]
        },
        {
            title: "Workplace",
            cardList: [workplace1, workplace2, workplace3, workplace4, workplace5]
        },
        {
            title: "Best friend's day",
            cardList: [bestFriend1, bestFriend2, bestFriend3, bestFriend4]
        },
        {
            title: "Father's day",
            cardList: [father1, father2, father3, father4, father5]
        },
        {
            title: "Encouragement",
            cardList: [encouragement1, encouragement2, encouragement3, encouragement4]
        },
        {
            title: "Spring",
            cardList: [spring1, spring2, spring3, spring4]
        },
        {
            title: "Love",
            cardList: [love1, love2, love3, love4]
        },
        {
            title: "Recognition",
            cardList: [recognition1, recognition2, recognition3, recognition4]
        },
        {
            title: "Community",
            cardList: [community1, community2, community3]
        },
        {
            title: "Any time",
            cardList: [anytime1, anytime2, anytime3]
        }
    ];

    const GetNumberOfShownCards = () => {
        if (window.innerWidth < 475) {
            return 2
        }
        else if (window.innerWidth < 1024) {
            return 3
        }
        else {
            return 4
        }
    }

    const GetSlideWidth = () => {
        if (window.innerWidth < 475) {
            return "calc(((17px + 0.5rem + 1rem - 100vw)) * "
        }
        else if (window.innerWidth < 786) {
            return "calc(((17px  + 0.5rem + 1rem + 2.5rem) - 100vw) * "
        }
        else if (window.innerWidth < 1024) {
            return "calc(((17px + 1rem + 2.5rem + 6.625rem) - 100vw) * "
        }
        else if (window.innerWidth < 1280) {
            return "calc(((17px + 1.5rem + (2.5rem - 0.5rem) + 6.625rem) - 100vw) * "
        }
        else {
            return "calc(((17px + 1.5rem + 2.5rem + 2rem + 6.125rem) - 100vw) * "
        }
    }

    const [cardSection, setCardSection] = useState(() => {
        const list = [];

        for (let i = 0; i < giftCard.length; i++) {
            list.push(0);
        }

        return {
            numberOfShownCards: GetNumberOfShownCards(), // Number of cards shown on the screen
            slidePosition: list, // Position of card sections' ul slide when clicking button
            slideWidth: GetSlideWidth() // Width of card sections' ul slide when clicking buttons (based on width of li in GiftCards.scss)
        }
    });

    const [cardShown, setCardShown] = useState(() => {
        const list = [];

        for (let i = 0; i < giftCard.length; i++) {
            list.push([]);
            for (let j = 0; j < giftCard[i].cardList.length; j++) {
                if (j >= 0 && j < cardSection.numberOfShownCards) {
                    list[i].push("shown");
                }
                else {
                    list[i].push("");
                }
            }
        }

        return list
    });

    const CheckButtonDisplay = () => {
        for (let i = 0; i < giftCard.length; i++) {
            if (cardSection.slidePosition[i] === 0) {
                document.querySelectorAll(".left-btn")[i].style.display = "none";
            }
            else {
                document.querySelectorAll(".left-btn")[i].style.display = "block";
            }

            if (giftCard[i].cardList.length - cardSection.slidePosition[i] * cardSection.numberOfShownCards <= cardSection.numberOfShownCards) {
                document.querySelectorAll(".right-btn")[i].style.display = "none";
            }
            else {
                document.querySelectorAll(".right-btn")[i].style.display = "block";
            }
        }
    }

    const CheckCardDisplay = () => {
        for (let i = 0; i < giftCard.length; i++) {
            for (let j = 0; j < giftCard[i].cardList.length; j++) {
                cardShown[i][j] = "";
            }
            for (let j = cardSection.slidePosition[i] * cardSection.numberOfShownCards; j < (cardSection.slidePosition[i] + 1) * cardSection.numberOfShownCards; j++) {
                cardShown[i][j] = "shown";
            }
        }

        setCardShown(cardShown);
    }

    const HandleResize = () => {
        cardSection.numberOfShownCards = GetNumberOfShownCards();
        cardSection.slideWidth = GetSlideWidth();

        for (let i = 0; i < cardSection.slidePosition.length; i++) {
            if (cardSection.slidePosition[i] > giftCard[i].cardList.length / cardSection.numberOfShownCards - 1) {
                cardSection.slidePosition[i] = giftCard[i].cardList.length / cardSection.numberOfShownCards - 1;
            }
        }

        setCardSection(prevValue => ({
            numberOfShownCards: prevValue.numberOfShownCards,
            slidePosition: [...prevValue.slidePosition],
            slideWidth: prevValue.slideWidth
        }))

        CheckCardDisplay();
        CheckButtonDisplay();
    }

    useEffect(() => {
        CheckCardDisplay();
        CheckButtonDisplay();

        window.addEventListener("resize", HandleResize);

        return () => {
            window.removeEventListener("resize", HandleResize);
        }
    });

    const ClickLeftArrow = (e) => {
        e.preventDefault();

        const order = parseInt(e.target.closest(".card-section").getAttribute("order"));

        if (cardSection.slidePosition[order] >= 1) {
            cardSection.slidePosition[order] -= 1;
        }
        else if (cardSection.slidePosition[order] < 1 && cardSection.slidePosition[order] > 0) {
            cardSection.slidePosition[order] = 0;
        }

        setCardSection(prevValue => ({
            numberOfShownCards: prevValue.numberOfShownCards,
            slidePosition: [...prevValue.slidePosition],
            slideWidth: prevValue.slideWidth
        }));
        
        CheckCardDisplay();
        CheckButtonDisplay();
    }

    const ClickRightArrow = (e) => {
        e.preventDefault();
        
        const order = parseInt(e.target.closest(".card-section").getAttribute("order"));

        if ((cardSection.slidePosition[order] + 1) * cardSection.numberOfShownCards < giftCard[order].cardList.length) {
            if (giftCard[order].cardList.length - (cardSection.slidePosition[order] + 1) * cardSection.numberOfShownCards < cardSection.numberOfShownCards) {
                cardSection.slidePosition[order] += ((giftCard[order].cardList.length % cardSection.numberOfShownCards) / cardSection.numberOfShownCards);
            }
            else {
                cardSection.slidePosition[order] += 1;
            }
        }

        setCardSection(prevValue => ({
            numberOfShownCards: prevValue.numberOfShownCards,
            slidePosition: [...prevValue.slidePosition],
            slideWidth: prevValue.slideWidth
        }));

        CheckCardDisplay();
        CheckButtonDisplay();
    }

    return (
        <>
            <Header giftCardsActive="active"/>
            <main id="Gift-cards">
                {giftCard.map((giftCard, index) => {
                    if (index !== 0) {
                        return (
                            <section key={index}>
                                <div className="title">                        
                                    <h1>{giftCard.title}</h1>
                                    <Link to="/">See all</Link>
                                </div>
                                <div className="card-section" order={index}>
                                    <ul style={{"left" : cardSection.slideWidth + cardSection.slidePosition[index] + ")"}}>
                                        {giftCard.cardList.map((cardList, ind) => (
                                            <li key={ind}>
                                                <Link className={cardShown[index][ind]} to="/">
                                                    <img src={cardList} alt="" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="left-btn" type="button" style={{"display" : "block"}} onClick={ClickLeftArrow}>
                                        <span><i className="fa-solid fa-angle-left"></i></span>
                                    </button>
                                    <button className="right-btn" type="button" onClick={ClickRightArrow}>
                                        <span><i className="fa-solid fa-angle-right"></i></span>
                                    </button>
                                </div>
                            </section>
                        )
                    }
                    else {
                        return (
                            <section key={index}>
                                <div className="title">                        
                                    <h1>{giftCard.title}</h1>
                                    <Link to="/">See all</Link>
                                </div>
                                <div className="card-section" order={index}>
                                    <ul style={{"left" : cardSection.slideWidth + cardSection.slidePosition[index] + ")"}}>
                                        {giftCard.cardList.map((cardList, ind) => (
                                            <li key={ind}>
                                                <Link className={cardShown[index][ind]} to="/">
                                                    <img src={cardList} alt="" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="left-btn" type="button" onClick={ClickLeftArrow}>
                                        <span><i className="fa-solid fa-angle-left"></i></span>
                                    </button>
                                    <button className="right-btn" type="button" onClick={ClickRightArrow}>
                                        <span><i className="fa-solid fa-angle-right"></i></span>
                                    </button>
                                </div>

                                <div className="container">
                                    <h1>Got a gift card?</h1>
                                    <p>Earn 2<span><i className="fa-solid fa-star"></i></span> per 1$</p>
                                    <div>
                                        <Link className="link-btn" to="/">Add or Reload</Link>
                                        <Link className="link-btn" to="/">Check balance</Link>
                                    </div>
                                    <div>
                                        <Link to="/">Card Terms & Conditions <span><i className="fa-solid fa-up-right-from-square"></i></span></Link>
                                    </div>
                                </div>
                            </section>
                        )
                    }
                })}

                <section>
                    <img src={bulkGiftCard} alt="" />
                    <div className="content">
                        <h2>Gift Cards in Bulk</h2>
                        <p>There's an easier way to buy Starbucks Cards in bulk! Give a Starbucks
                            Card to gift, reward, incentivize, or show appreciation towards your
                            customers, clients and team members.</p>
                        <Link className="link-btn" to="/">Shop now</Link>
                    </div>
                </section>

                <section>
                    <h2>GIFT CARD SUPPORT</h2>
                    <p>Use the links below to manage eGifts you have sent or received, or view our
                        full Card Terms & Conditions.</p>
                    <div>
                        <Link className="link-btn" to="/">eGift Support</Link>
                        <Link className="link-btn" to="/">See Terms & Conditions</Link>
                        <Link className="link-btn" to="/">eGift FAQs</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}