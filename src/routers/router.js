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
},
{
    path: "/product/:id",
    component: lazy(() => import("@pages/DetailProduct/DetailProduct")) // Lazy load DetailProduct component
},
{
    path: "/about-us",
    component: lazy(() => import("@pages/AboutUs/AboutUs")) // Lazy load AboutUs component
},
]
export default routeter;