import { Home } from "./Home/Home";
import { Rewards } from "./Rewards/Rewards";

export const AppRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/rewards",
        element: <Rewards />
    }
];