import "./MenuLinks.scss";
import { Link } from "react-router-dom";

export const MenuLinks = (props) => {
    return (
        <div id="menu-link">
            <ul>
                <li className={props.allProductsActive}>
                    <Link to="/menu">All products</Link>
                </li>
                <li>
                    <Link to="/menu/featured">Featured</Link>
                </li>
                <li className={props.previousActive}>
                    <Link to="/menu/previous">Previous Orders</Link>
                </li>
                <li className={props.favoritesActive}>
                    <Link to="/menu/favorites">Favorite Products</Link>
                </li>
            </ul>
        </div>
    )
}