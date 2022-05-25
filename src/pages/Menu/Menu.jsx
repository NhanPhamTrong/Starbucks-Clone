import "./Menu.scss";
import { Header } from "../../components/Header/Header";
import { MenuLinks } from "../../components/MenuLinks/MenuLinks";
import { Footer } from "../../components/Footer/Footer";
import { ChooseStore } from "../../components/ChooseStore/ChooseStore";
import coffee1 from "../../assets/images/Menu/Coffee-1.webp";
import coffee2 from "../../assets/images/Menu/Coffee-2.jpg";
import drink1 from "../../assets/images/Menu/Drink-1.webp";
import drink2 from "../../assets/images/Menu/Drink-2.webp";
import drink3 from "../../assets/images/Menu/Drink-3.webp";
import drink4 from "../../assets/images/Menu/Drink-4.webp";
import drink5 from "../../assets/images/Menu/Drink-5.webp";
import drink6 from "../../assets/images/Menu/Drink-6.webp";
import drink7 from "../../assets/images/Menu/Drink-7.webp";
import food1 from "../../assets/images/Menu/Food-1.webp";
import food2 from "../../assets/images/Menu/Food-2.webp";
import food3 from "../../assets/images/Menu/Food-3.webp";
import food4 from "../../assets/images/Menu/Food-4.webp";
import food5 from "../../assets/images/Menu/Food-5.webp";
import giftCard1 from "../../assets/images/Menu/Menu-gift-card-1.webp";
import giftCard2 from "../../assets/images/Menu/Menu-gift-card-2.webp";
import giftCard3 from "../../assets/images/Menu/Menu-gift-card-3.webp";
import merchandise1 from "../../assets/images/Menu/Merchandise-1.webp";
import merchandise2 from "../../assets/images/Menu/Merchandise-2.webp";
import merchandise3 from "../../assets/images/Menu/Merchandise-3.webp";
import merchandise4 from "../../assets/images/Menu/Merchandise-4.webp";
import merchandise5 from "../../assets/images/Menu/Merchandise-5.webp";

export const Menu = () => {
    document.title = "Featured menu: Starbucks Coffee Company";

    const menu = [
        {
            title: "Drinks",
            class: "drink",
            content: [
                {
                    image: drink1,
                    name: "Hot Coffees"
                },
                {
                    image: drink2,
                    name: "Hot Teas"
                },
                {
                    image: drink3,
                    name: "Hot Drinks"
                },
                {
                    image: drink4,
                    name: "Frappuccino® Blended Beverages"
                },
                {
                    image: drink5,
                    name: "Cold Coffees"
                },
                {
                    image: drink6,
                    name: "Iced Teas"
                },
                {
                    image: drink7,
                    name: "Cold Drinks"
                }
            ]
        },
        {
            title: "Food",
            class: "food",
            content: [
                {
                    image: food1,
                    name: "Hot Breakfast"
                },
                {
                    image: food2,
                    name: "Bakery"
                },
                {
                    image: food3,
                    name: "Lunch"
                },
                {
                    image: food4,
                    name: "Snacks & Sweets"
                },
                {
                    image: food5,
                    name: "Oatmeal & Yogurt"
                }
            ]
        },
        {
            title: "At Home Coffee",
            class: "at-home-coffee",
            content: [
                {
                    image: coffee1,
                    name: "Whole Bean"
                },
                {
                    image: coffee2,
                    name: "VIA® Instant"
                }
            ]
        },
        {
            title: "Merchandise",
            class: "merchandise",
            content: [
                {
                    image: merchandise1,
                    name: "Cold Cups"
                },
                {
                    image: merchandise2,
                    name: "Tumblers"
                },
                {
                    image: merchandise3,
                    name: "Mugs"
                },
                {
                    image: merchandise4,
                    name: "Water Bottles"
                },
                {
                    image: merchandise5,
                    name: "Other"
                }
            ]
        },
        {
            title: "Gift Cards",
            class: "gift-card",
            content: [
                {
                    image: giftCard1,
                    name: "Happy Birthday"
                },
                {
                    image: giftCard2,
                    name: "Thank You"
                },
                {
                    image: giftCard3,
                    name: "Traditional"
                }
            ]
        }
    ];

    return (
        <>
            <Header menuActive="active"/>
            <MenuLinks allProductsActive="active" />
            <main id="Menu">
                <div className="main-content">
                    <div className="menu">
                        <h1>Menu</h1>
                        {menu.map((menu, index) => (
                            <div className={menu.class} key={index}>
                                <h2>{menu.title}</h2>
                                <hr />
                                <ul>
                                    {menu.content.map((content, index) => (
                                        <li key={index}>
                                            <a href="/">
                                                <img src={content.image} alt="" />
                                                <p>{content.name}</p>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="side-menu">
                        {menu.map((menu, index) => (
                            <div key={index}>
                                <h3>{menu.title}</h3>
                                <ul>
                                    {menu.content.map((content, index) => (
                                        <li key={index}>
                                            <a href="/">{content.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer footerPaddingBottom="7rem" />
            <ChooseStore />
        </>
    )
}