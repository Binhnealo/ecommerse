import { lazy } from "react";

const routeter = [
{
    path: "/",
    component: lazy(() => import("@components/HomePage/HomePage")) // Lazy load HomePage component
},
{
    path: "/shop",
    component: lazy(() => import("@pages/OurShop/OurShop")) // Lazy load OurShop component
},
{
    path: "/cart",
    component: lazy(() => import("@pages/Cart/Cart")) // Lazy load Cart component
}
]
export default routeter;