import Img  from '../../../assets/protfolio.jpg'
const Banner = () => {
    return (
        <div className='flex justify-evenly items-center gap-3'>
            <div className="img w-1/2">
                <img src={Img} alt="Img" className="w-full h-full rounded-lg" />
            </div>
            <div className="content w-1/2">
                <h2>Welcome to My World</h2>
                <h5>Hi there,</h5>
                <p>I will have the opportunity to pursue a challenging career in any dynamic Organization. I have experience working in teams. Prove my talent, skills, knowledge and my ability to develop a professional career. I always ensure my skills are kept up to date within this rapidly changing industry.</p>
            </div>
        </div>
    );
};

export default Banner;