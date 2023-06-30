
import { Outlet } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import NavBar from "../Components/NavBar/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Home></Home>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;