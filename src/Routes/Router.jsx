import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../Components/About/About";
import Protfolio from "../Components/Protfolio/Protfolio";
import Blog from "../Components/Blog/Blog";
import Contact from "../Components/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path:'/',
                element:<Main></Main>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/protfolio',
                element:<Protfolio></Protfolio>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
    ],
    },
]);
export default router;