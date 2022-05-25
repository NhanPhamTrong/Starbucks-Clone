import { GiftCards } from "./GiftCards/GiftCards";
import { Home } from "./Home/Home";
import { Menu } from "./Menu/Menu";
import { Featured } from "./Menu/Featured/Featured";
import { PreviousOrder } from "./Menu/PreviousOrder/PreviousOrder";
import { FavoriteProducts } from "./Menu/FavoriteProducts/FavoriteProducts";
import { Rewards } from "./Rewards/Rewards";

export const AppRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/gift",
        element: <GiftCards />
    },
    {
        path: "/menu",
        element: <Menu />
    },
    {
        path: "/rewards",
        element: <Rewards />
    },
    {
        path: "/menu/featured",
        element: <Featured />
    },
    {
        path: "/menu/previous",
        element: <PreviousOrder />
    },
    {
        path: "/menu/favorites",
        element: <FavoriteProducts />
    }
];