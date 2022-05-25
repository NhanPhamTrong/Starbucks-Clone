import "./Featured.scss";
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import featured1 from "../../../assets/images/Featured/Featured-1.jpg";
import featured2 from "../../../assets/images/Featured/Featured-2.jpg";
import featured3 from "../../../assets/images/Featured/Featured-3.jpg";
import featured4 from "../../../assets/images/Featured/Featured-4.jpg";
import featured5 from "../../../assets/images/Featured/Featured-5.jpg";
import featured6 from "../../../assets/images/Featured/Featured-6.jpg";
import featured7 from "../../../assets/images/Featured/Featured-7.jpg";

export const Featured = () => {
    const featured = [
        {
            image: featured1,
            title: "New Chocolate Cream Cold Brew",
            text: "Our super-smooth cold brew topped with silky, chocolaty cold foam."
        },
        {
            image: featured2,
            title: "Caramel Ribbon Crunch Frappuccino® blended beverage",
            text: "A blend of coffee, milk and ice with dark caramel sauce and a crunchy caramel-sugar topping."
        },
        {
            image: featured3,
            title: "Mocha Cookie Crumble Frappuccino® blended beverage",
            text: "Coffee, milk and ice join rich mocha sauce, Frappuccino® chips and a cookie-crumble topping."
        },
        {
            image: featured4,
            title: "Mango Dragonfruit Lemonade Starbucks Refreshers® beverage",
            text: "Sweet mango and dragonfruit flavors with lemonade and real diced dragonfruit."
        },
        {
            image: featured5,
            title: "Strawberry Açaí Lemonade Starbucks Refreshers® beverage",
            text: "Luscious strawberry and açaí flavors with lemonade and real sliced strawberries."
        },
        {
            image: featured6,
            title: "Unicorn Cake Pop",
            text: "A returning favorite with vanilla cake dipped in white chocolaty icing,  magically decorated."
        },
        {
            image: featured7,
            title: "New Lime-Frosted Coconut Bar",
            text: "Moist and chewy with lime frosting and white chocolaty drizzle sprinkled with dried coconut."
        }
    ];

    return (
        <>
            <Header />
            <main id="Menu-featured">
                <h1>Summer on my mind</h1>
                {featured.map((featured, index) => (
                    <section key={index}>
                        <img src={featured.image} alt="" />
                        <div className="content">
                            <h2>{featured.title}</h2>
                            <p>{featured.text}</p>
                            <a href="/">Order now</a>
                        </div>
                    </section>
                ))}
            </main>
            <Footer />
        </>
    )
}