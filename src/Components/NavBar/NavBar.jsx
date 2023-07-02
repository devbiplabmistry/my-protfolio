import { AiOutlineHome } from "react-icons/ai";
import { BsBagPlus } from "react-icons/bs";
import { ImBlog } from "react-icons/im";
import { GrContactInfo } from "react-icons/gr";
import { Link } from "react-router-dom";
import './NavBar.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GoPersonFill } from 'react-icons/go';

AOS.init();

const NavBar = () => {
    return (
        <div>  
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="fixed right-3 top-1/4 bg-orange-300 sm:rounded-full  z-50">
                <ul className="menu p-8 h-full text-base-content gap-6  flex justify-center">
            <Link to="/" className="text-3xl mb-4 nav-link">
                <AiOutlineHome></AiOutlineHome>
            <span className="text font-Poppins text-base ">Home</span>
            </Link>
                    <Link to="/about" className="text-2xl  font-Roboto nav-link mb-4">
                        <GoPersonFill></GoPersonFill>
                    <span className="text font-Poppins text-base ">About</span>
                    </Link>
                    <Link to="/protfolio" className="text-3xl nav-link mb-4">
                        <BsBagPlus ></BsBagPlus>
                    <span className="text font-Poppins text-base ">Protfolio</span>    
                    </Link>
                    <Link  className="text-3xl nav-link mb-4"to="/blog">
                        <ImBlog ></ImBlog>
                    <span className="text font-Poppins text-base ">Blog</span>   
                    </Link>
                    <Link to="/contact" className="text-3xl nav-link ">
                        <GrContactInfo ></GrContactInfo>
                    <span className="text font-Poppins text-base ">Contact</span>  
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;