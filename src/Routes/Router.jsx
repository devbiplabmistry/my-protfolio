
import {  createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Protfolio from "../Components/Protfolio/Protfolio";
import Blog from "../Components/Blog/Blog";
import Contact from "../Components/Contact/Contact";
import Main from "../Layouts/Main";
import ServiceCard from "../Components/ServiceCard/ServiceCard";
import ProtfolioCard from "../Components/ProtfolioCard/ProtfolioCard";



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
                element:<About></About>,
               
            },
            {
                path:'/about/s',
                element:<ServiceCard></ServiceCard>
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
                path:'/protfolioCard',
                element:<ProtfolioCard></ProtfolioCard>
            },
           
            {
                path:'/contact',
                element:<Contact></Contact>
            },
          
          
    ],
    },
]);
export default router;