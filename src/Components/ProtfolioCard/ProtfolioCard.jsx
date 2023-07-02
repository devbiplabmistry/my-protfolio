
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
                        <div
                            className="overlay-text   bg-[rgba(0,0,0,0.6)]  rounded-2xl top-8  absolute
                          bg-transparent p-8 left-0 ">
                            <h2 className="text-center text-white  text-2xl mb-3 font-Poppins capitalize">summer Camp</h2>
                            <p className='px-8 font-Poppins text-sm text-white '>This is a manufacturing website site. Here users can log in to make sure to authorize users to order products, give reviews, and update their profiles. Can pay for ordered products. There is also an admin panel in the dashboard where the admin can make admin, manage orders and add products. Fully responsive. Payment gateway has been added.</p>
                            <h3 className='font-Poppins font-semibold text-white text-lg my-4'>Used Technology</h3>
                            <div className="grid grid-cols-2 gap-3 w-[280px] mx-auto">
                                <p className="px-8 font-Poppins font-normal text-base text-white rounded-lg border border-white inline-block">React.js</p>
                                <p className="px-8 font-Poppins font-normal text-base text-white rounded-lg border border-white inline-block">Node.js</p>
                                <p className="px-8 font-Poppins font-normal text-base text-white rounded-lg border border-white inline-block">MongoDB</p>
                                <p className="px-8 font-Poppins font-normal text-base text-white rounded-lg border border-white inline-block">Express.js</p>
                                <p className="px-8 font-Poppins font-normal text-base text-white rounded-lg border border-white inline-block">Stripe</p>
                                <p className="px-8 font-Poppins font-normal text-base text-white rounded-lg border border-white inline-block">Firebase</p>
                                <p className="px-8 font-Poppins font-normal text-base text-white rounded-lg border border-white inline-block">Tailwind</p>
                                <p className="px-8 font-Poppins font-normal text-base text-white rounded-lg border border-white inline-block">Vercel</p>
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
                        <div
                            className="overlay-text  bg-[rgba(0,0,0,0.6)]   rounded-2xl top-8  absolute
                       bg-transparent p-8 left-0 ">
                            <h2 className="text-center text-white  text-2xl mb-3 font-Poppins capitalize">Toy-Market-Place</h2>
                            <p className='px-8 font-Poppins text-sm text-white '>
                                Discover our tailored platform for toy enthusiasts, with interactive features, personalized profiles, and seamless shopping. Curate your toy collection, track wishlist and purchases, and engage with a vibrant community. Find joy in building your own toy kingdom on our captivating platform, where every click is an adventure into the world of toys.</p>
                                <h3 className='font-Poppins font-semibold text-white text-lg my-4'>Used Technology</h3>
                            <div className="grid grid-cols-2 gap-3 w-[280px] mx-auto">
                                <p className="px-8 font-Poppins font-normal text-base text-white rounded-lg border border-white inline-block">React.js</p>
                                <p className="px-8 font-Poppins font-normal text-base text-white rounded-lg border border-white inline-block">Node.js</p>
                                <p className="px-8 font-Poppins font-normal text-base text-white rounded-lg border border-white inline-block">MongoDB</p>
                                <p className="px-8 font-Poppins font-normal text-base text-white rounded-lg border border-white inline-block">Express.js</p>
                                <p className="px-8 font-Poppins font-normal text-base text-white rounded-lg border border-white inline-block">Firebase</p>
                                <p className="px-8 font-Poppins font-normal text-base text-white rounded-lg border border-white inline-block">Tailwind</p>
                                <p className="px-8 font-Poppins font-normal text-base text-white rounded-lg border border-white inline-block">Vercel</p>
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
                        <div
                            className="overlay-text bg-[rgba(0,0,0,0.6)]  rounded-2xl top-8  absolute
                         bg-transparent p-8 left-0 ">
                            <h2 className="text-center  text-white  text-2xl mb-3 font-Poppins capitalize">Chief-Recipe-Hunter</h2>
                            <p className='px-8   font-Poppins text-sm text-white '>Delve into a world of authentic flavors and cultural diversity with exclusive access to expert chefs' traditional recipes. Discover the history, ingredients, and techniques of specific cuisines, immersing yourself in their rich culinary heritage. Expand your culinary knowledge and savor the delights of traditional cuisine on our platform. </p>
                            <h3 className='font-Poppins font-semibold text-white text-lg my-4'>Used Technology</h3>
                            <div className="grid grid-cols-2 gap-3 w-[280px] mx-auto">
                                <p className="px-8 font-Poppins font-normal text-base text-white rounded-lg border border-white inline-block">React.js</p>
                                <p className="px-8 font-Poppins font-normal text-base text-white rounded-lg border border-white inline-block">Node.js</p>
                                <p className="px-8 font-Poppins font-normal text-base text-white rounded-lg border border-white inline-block">MongoDB</p>
                                <p className="px-8 font-Poppins font-normal text-base text-white rounded-lg border border-white inline-block">Express.js</p>
                                <p className="px-8 font-Poppins font-normal text-base text-white rounded-lg border border-white inline-block">Firebase</p>
                                <p className="px-8 font-Poppins font-normal text-base text-white rounded-lg border border-white inline-block">Tailwind</p>
                                <p className="px-8 font-Poppins font-normal text-base text-white rounded-lg border border-white inline-block">Vercel</p>
                                <p className="px-8 font-Poppins font-normal text-base text-white rounded-lg border border-white inline-block">Netlify</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProtfolioCard;