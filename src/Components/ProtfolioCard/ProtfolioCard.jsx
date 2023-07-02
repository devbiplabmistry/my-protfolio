
import summerCamp from '../../assets/summercamp.png';
import toy from '../../assets/toyMarketplace.png';
import recipee from '../../assets/ChefRecipee.png';
import { useState } from 'react';
const ProtfolioCard = () => {
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const [hoveredIndex2, setHoveredIndex2] = useState(-1);
    const [hoveredIndex3, setHoveredIndex3] = useState(-1);
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };
    const handleMouseEnter2 = (index) => {
        setHoveredIndex2(index);
    };
    const handleMouseEnter3 = (index) => {
        setHoveredIndex3(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(-1);
    };
    const handleMouseLeave2 = () => {
        setHoveredIndex2(-1);
    };
    const handleMouseLeave3 = () => {
        setHoveredIndex3(-1);
    };
    return (
        <div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1  sm:ms-24 lg:ms-0 md:ms-36 gap-3 -top-3  my-12'>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className="card card-1  w-96 bg-base-100 shadow-xl p1 "
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={handleMouseLeave}>
                    <figure className="px-10 pt-10">
                        <img src={summerCamp} alt="Shoes" />
                    </figure>
                    {hoveredIndex === 0 && (
                        <div className="overlay-text absolute top-0 bg-blue-50 p-8 left-0">
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
                    )}
                </div>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="card w-96 bg-base-100 shadow-xl" onMouseEnter={() => handleMouseEnter2(0)}
                    onMouseLeave={handleMouseLeave2}>
                    <figure className="px-10 pt-10">
                        <img src={toy} alt="Shoes" />
                    </figure>
                    {hoveredIndex2 === 0 && (
                        <div className="overlay-text absolute top-0 bg-blue-50 p-8 left-0">
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
                    )}
                </div>
                <div data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className="card w-96 bg-base-100 shadow-xl"
                    onMouseEnter={() => handleMouseEnter3(0)}
                    onMouseLeave={handleMouseLeave3}>
                    <figure className="px-10 pt-10">
                        <img src={recipee} alt="Shoes" />
                    </figure>
                    {hoveredIndex3 === 0 && (
                        <div className="overlay-text absolute top-0 bg-blue-50 p-8 left-0">
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
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProtfolioCard;