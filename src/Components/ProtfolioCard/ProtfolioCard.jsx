
import summerCamp from '../../assets/summercamp.png'
import toy from '../../assets/toyMarketplace.png'
import recipee from '../../assets/ChefRecipee.png'

const ProtfolioCard = () => {
    return (
        <div className='grid grid-cols-3 gap-3 -top-3 protfolioCard'>

            <div className="card w-96 bg-base-100 shadow-xl p1">
                <figure className="px-10 pt-10">
                <img src={summerCamp} alt="Shoes" />
                </figure>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                <img src={toy} alt="Shoes" />
                </figure>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                <img src={recipee} alt="Shoes" />
                </figure>
            </div>
        </div>
    );
};

export default ProtfolioCard;