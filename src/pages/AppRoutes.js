import { Home } from "./Home/Home";
import { Rewards } from "./Rewards/Rewards";

export const AppRoutes = [
    {
        path: "Starbucks-Clone",
        element: <Home />
    },
    {
        path: "Starbucks-Clone/rewards",
        element: <Rewards />
    }
];