import "../MenuComponentStyle.scss";
import { Header } from "../../../components/Header/Header";
import { MenuLinks } from "../../../components/MenuLinks/MenuLinks";
import { Footer } from "../../../components/Footer/Footer";
import { ChooseStore } from "../../../components/ChooseStore/ChooseStore";
import favTapes from "../../../assets/images/FavoriteProducts/fav-tapes.webp";

export const FavoriteProducts = () => {
    document.title = "Favorite products: Starbucks Coffee Company";

    return (
        <>
            <Header menuActive="active"/>
            <MenuLinks favoritesActive="active" />
            <main id="Menu-favorites">
                <div className="container">
                    <h1>Favorite Products</h1>
                    <img src={favTapes} alt="" />
                    <h2>Save your favorite mixes</h2>
                    <p>Use the heart to save customizations. Your favorites will appear here to order again.</p>
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