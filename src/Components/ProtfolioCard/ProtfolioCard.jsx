
import summerCamp from '../../assets/summercamp.png'
import toy from '../../assets/toyMarketplace.png'
import recipee from '../../assets/ChefRecipee.png'
const ProtfolioCard = () => {
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 sm:ms-24 lg:ms-0 md:ms-36 gap-3 -top-3 protfolioCard my-12'>
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className="card w-96 bg-base-100 shadow-xl p1">
                <figure className="px-10 pt-10">
                    <img src={summerCamp} alt="Shoes" />
                </figure>
            </div>
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={toy} alt="Shoes" />
                </figure>
            </div>
            <div data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={recipee} alt="Shoes" />
                </figure>
            </div>
        </div>
    );
};

export default ProtfolioCard;