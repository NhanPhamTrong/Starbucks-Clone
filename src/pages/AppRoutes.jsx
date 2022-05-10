
import { GiftCards } from "./GiftCards/GiftCards";
import { Home } from "./Home/Home";
import { Menu } from "./Menu/Menu";
import { Rewards } from "./Rewards/Rewards";

export const AppRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/gift-cards",
        element: <GiftCards />
    },
    {
        path: "/menu",
        element: <Menu />
    },
    {
        path: "/rewards",
        element: <Rewards />
    }
];