import { lazy } from "react";

const routeter = [
{
    path: "/",
    component: lazy(() => import("@components/HomePage/HomePage")) // Lazy load HomePage component
}
]
export default routeter;