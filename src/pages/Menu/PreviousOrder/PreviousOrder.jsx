import "../MenuComponentStyle.scss";
import { Header } from "../../../components/Header/Header";
import { MenuLinks } from "../../../components/MenuLinks/MenuLinks";
import { Footer } from "../../../components/Footer/Footer";
import { ChooseStore } from "../../../components/ChooseStore/ChooseStore";
import moonPhases from "../../../assets/images/PreviousOrder/moon-phases.webp";

export const PreviousOrder = () => {
    document.title = "Previous orders: Starbucks Coffee Company";

    return (
        <>
            <Header menuActive="active"/>
            <MenuLinks previousActive="active" />
            <main id="Menu-previous">
                <div className="container">
                    <h1>Previous Orders</h1>
                    <img src={moonPhases} alt="" />
                    <h2>When history repeats itself</h2>
                    <p>Previous orders will appear here to quickly order again.</p>
                    <div>
                        <a href="/">Sign in</a>
                        <a href="/">Join now</a>
                    </div>
                </div>
            </main>
            <Footer footerPaddingBottom="7rem" />
            <ChooseStore />
        </>
    )
}