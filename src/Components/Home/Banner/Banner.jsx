import Img from '../../../assets/protfolio.jpg';
import React from 'react';
import { AiOutlineFilePdf, AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import resume from '../../../assets/Biplab_resume_MERN_developer.pdf'
import '@wcj/dark-mode';

import './Banner.css'

const Banner = () => {




  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<span style='color: yellow; font-size: 50px; font-weight: bold; fontFamily: 'Roboto';'>I'M BIPLAB.</span>",
        "<span style='color: yellow; font-size: 50px; font-weight: bold; fontFamily: 'Roboto';'> I'M FULL STACK DEVELOPER.</span>",
        "<span style='color: yellow; font-size: 50px; font-weight: bold; fontFamily: 'Roboto';'> I'M MERN STACK DEVELOPER.</span>",
        "<span style='color: yellow; font-size: 50px; font-weight: bold; fontFamily: 'Roboto';'> I'M REACT DEVELOPER.</span>"
      ],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  return (
    <>
     <dark-mode   permanent light="Light" dark="Dark"></dark-mode>
      <div className='flex justify-evenly items-center gap-3 mt-24 mb-24'>
        <div className="img w-1/3">
          <img src={Img} alt="Img" className="w-full h-full rounded-lg" />
        </div>
        <div className="content w-1/2">
          <h2 className='font-Roboto font-medium text-3xl text-green-600'>Welcome to My World</h2>
          <h5 className='font-Roboto font-medium text-3xl text-green-600 '>
            <img src="https://cliply.co/wp-content/uploads/2019/06/391906110_WAVING_HAND_400px.gif" alt="" className='w-8' />
          </h5>
          <span ref={el} />
          <p className='text-base font-Poppins text-green-600'>I will have the opportunity to pursue a challenging career in any dynamic Organization. I have experience working in teams. Prove my talent, skills, knowledge and my ability to develop a professional career. I always ensure my skills are kept up to date within this rapidly changing industry.</p>
          <Link to="/contact"><button className="btn  btn-success mr-3 mt-3 cursor-pointer font-Roboto text-white text-lg">Hire Me <AiOutlinePlus></AiOutlinePlus> </button></Link>
          <Link to={resume} download target='blank' ><button className="btn btn-outline btn-success mt-3 cursor-pointer font-Roboto text-white text-lg">Get Resume <AiOutlineFilePdf></AiOutlineFilePdf></button></Link>

        </div>

      </div>
    </>
  );
};

export default Banner;
