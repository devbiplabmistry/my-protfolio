import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ProtfolioCard from "../ProtfolioCard/ProtfolioCard";
const Protfolio = () => {
    const menu =
        <ul className="mt-12 flex">
            <li>  <Link to="/protfoliocard" className="font-Poppins font-semibold text-lg text-gray-950 mr-4">ALL</Link></li>
            <li>  <Link className="font-Poppins font-semibold text-lg text-gray-950 mr-4">PROTFOLIO</Link></li>
            <li><Link className="font-Poppins font-semibold text-lg text-gray-950 mr-4">SHOP</Link></li>
            <li> <Link className="font-Poppins font-semibold text-lg text-gray-950 mr-4">APP</Link></li>
            <li><Link className="font-Poppins font-semibold text-lg text-gray-950 mr-4">WEB</Link></li>
        </ul>
    return (
        <div>
            <NavBar></NavBar>
            <h1 data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className="font-Poppins font-extrabold text-6xl text-blue text-center my-28">MY LATEST  <span className="text-green-500">WORKS</span></h1>
            <div className="navbar bg-base-100">
                <div className="navbar-start hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden sm:flex sm:justify-center sm:ms-24 lg:ms-72">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                </div>
            </div>
            <ProtfolioCard></ProtfolioCard>
        </div>
    );
};

export default Protfolio;