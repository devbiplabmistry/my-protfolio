import protfolio1 from '../../assets/protfolio-1.png'
import protfolio2 from '../../assets/protfolio-2.png'
import protfolio3 from '../../assets/protfolio-3.png'
import NavBar from '../NavBar/NavBar';
const ServiceCard = () => {
    return (
        <>
        <NavBar></NavBar>
        <div className='grid grid-cols-3 mt-11'>
        <div className="card w-96 bg-base-100 shadow-xl image-full ">
        <figure><img src={protfolio1} alt="Shoes" /></figure>
        <div className="card-body text-center">
        <h2 className='font-Poppins text-2xl text-orange-400 font-medium'>Website Development</h2>
          <p className='font-Poppins text-base text-white font-medium'>Study design briefs and determine requirements Schedule projects and define budget constraints Conceptualize visuals based on requirements Prepare rough drafts and present ideas Develop illustrations, logos and other designs using software or by hand Use the appropriate colors and layouts for each graphic Work with copywriters and creative director to produce final design Test graphics across various media Amend designs after feedback Ensure final graphics and layouts are visually appealing and on-brand</p>
        </div>
      </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full ">
        <figure><img src={protfolio2} alt="Shoes" /></figure>
        <div className="card-body text-center">
        <h2 className='font-Poppins text-2xl text-orange-400 font-medium'>Full Stack Website Build</h2>
          <p className='font-Poppins text-base text-white font-medium'>Obcaecati, quam? Collaborate with product management and engineering to define and implement innovative solutions for the product direction, visuals and experience Execute all visual design stages from concept to final hand-off to engineering Conceptualize original ideas that bring simplicity and user friendliness to complex design roadblocks Create wireframes, storyboards, user flows, process flows and site maps to effectively communicate interaction and design ideas Present and defend designs and key milestone deliverables to peers and executive level stakeholders Conduct user research and evaluate user feedback</p>
        </div>
      </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full ">
        <figure><img src={protfolio3} alt="Shoes"  /></figure>
        <div className="card-body text-center">
        <h2 className='font-Poppins text-2xl text-orange-400 font-medium'>Web Apps Build</h2>
          <p className='font-Poppins text-base text-white font-medium'>Obcaecati, quam? Artistic eye for design Ability to think creatively Mathematical aptitude and strong problem-solving skills Excellent IT and programming skills Excellent organisational, time and project management skills Accuracy and attention to detail An understanding of the latest trends and their role in a commercial environment Self-development skills to keep up to date with fast-changing trends Professional approach to time, costs and deadlines</p>
        </div>
      </div>
      </div>
      </>
    );
};

export default ServiceCard;
