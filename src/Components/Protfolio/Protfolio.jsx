import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import './Protfolio.css'
import ProtfolioCard from "../ProtfolioCard/ProtfolioCard";

const Protfolio = () => {

    const menu =
        <div className="mt-12 ">
            <Link to="/protfoliocard" className="font-Poppins font-semibold text-lg text-gray-950 mr-4">ALL</Link>
            <Link className="font-Poppins font-semibold text-lg text-gray-950 mr-4">PROTFOLIO</Link>
            <Link className="font-Poppins font-semibold text-lg text-gray-950 mr-4">SHOP</Link>
            <Link className="font-Poppins font-semibold text-lg text-gray-950 mr-4">APP</Link>
            <Link className="font-Poppins font-semibold text-lg text-gray-950 mr-4">WEB</Link>
        </div>


    return (
        <div>
            <NavBar></NavBar>
            <h1 className="font-Poppins font-extrabold text-6xl text-black text-center mt-28">MY LATEST  <span className="text-green-500">WORKS</span></h1>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {menu}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>

            <ProtfolioCard></ProtfolioCard>
                <div className="text1 mx-auto absolute top-[350px] left-8 w-[380px] text-center">
                    <h2 className="text-center">summer Camp</h2>
                    <p>This is a manufacturing website site. Here users can log in to make sure to authorize users to order products, give reviews, and update their profiles. Can pay for ordered products. There is also an admin panel in the dashboard where the admin can make admin, manage orders and add products. Fully responsive. Payment gateway has been added.</p>
                    <h3>Used Technology</h3>
                   <div className="grid grid-cols-2 gap-3 w-[280px] mx-auto">
                   <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                    <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                    <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                    <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                    <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                    <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                    <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                    <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                   </div>
                </div>



                {/* <div className="protfolio-text2 mx-auto absolute top-12 left-1 w-[380px] text-center mx-auto">
                    <h2 className="text-center">summer Camp</h2>
                    <p>This is a manufacturing website site. Here users can log in to make sure to authorize users to order products, give reviews, and update their profiles. Can pay for ordered products. There is also an admin panel in the dashboard where the admin can make admin, manage orders and add products. Fully responsive. Payment gateway has been added.</p>
                    <h3>Used Technology</h3>
                   <div className="grid grid-cols-2 gap-3 w-[280px] mx-auto">
                   <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                    <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                    <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                    <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                    <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                    <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                    <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                    <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                   </div>
                </div> */}




                {/* <div className="protfolio-text3 mx-auto absolute top-12 left-1 w-[380px] text-center mx-auto">
                    <h2 className="text-center">summer Camp</h2>
                    <p>This is a manufacturing website site. Here users can log in to make sure to authorize users to order products, give reviews, and update their profiles. Can pay for ordered products. There is also an admin panel in the dashboard where the admin can make admin, manage orders and add products. Fully responsive. Payment gateway has been added.</p>
                    <h3>Used Technology</h3>
                   <div className="grid grid-cols-2 gap-3 w-[280px] mx-auto">
                   <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                    <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                    <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                    <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                    <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                    <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                    <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                    <p className="px-8 font-Poppins font-normal text-base text-blue-700 rounded-lg border border-green-800 inline-block">Firebase</p>
                   </div>
                </div> */}
    








        </div>
    );
};

export default Protfolio;