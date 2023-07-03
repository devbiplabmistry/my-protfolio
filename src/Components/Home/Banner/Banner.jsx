import Img from '../../../assets/protfolio.jpg';
import React from 'react';
import { AiOutlineFilePdf, AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import resume from '../../../assets/Biplab_resume_MERN_developer.pdf'
import '@wcj/dark-mode';
import './Banner.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Controls, Player } from '@lottiefiles/react-lottie-player';
AOS.init();
const Banner = () => {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<span style='color: yellow; font-size:50px; font-weight: bold; fontFamily: 'Roboto';'>I'M BIPLAB.</span>",
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
      typed.destroy();
    };
  }, []);
  return (
    <>
      <dark-mode permanent light="Light" dark="Dark"></dark-mode>
      <div className='lg:flex lg:flex-row md:justify-evenly items-center gap-3 mt-24 mb-24 sm:flex sm:flex-col sm:justify-center sm:items-center'>
        <div data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500" className="img lg:w-1/3 sm:w-1/2 md:w-2/3" >
          {/* <img src={Img} alt="Img" className="w-full h-full rounded-lg" /> */}
          <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/private_files/lf30_obidsi0t.json"
            style={{ height: '600px', width: '500px' }}
          >
            <Controls
              visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player>

        </div>
        <div data-aos="fade-left" className="content lg:w-1/2 sm:w-full sm:ps-3 lg:ps-0" >
          <h2 className='font-Roboto font-medium text-6xl text-[tomato]'>Welcome to My World</h2>
          <h5 className='font-Roboto font-medium text-3xl text-green-600  bg-transparent'>
            <img src="https://cliply.co/wp-content/uploads/2019/06/391906110_WAVING_HAND_400px.gif" alt="" className='w-8' />
          </h5>
          <span ref={el} />
          <p className='text-base font-Poppins text-[#DAF7A6 ]'> I'm ready to take on a challenging career in a dynamic organization where I can showcase my skills,
            knowledge, and ability to grow professionally. I have experience working in teams and I make sure to
            keep my skills up to date in this ever-changing industry.</p>
          <Link to="/contact"><button className="btn  btn-success mr-3 mt-3 cursor-pointer font-Roboto text-white text-lg">Hire Me <AiOutlinePlus></AiOutlinePlus> </button></Link>
          <Link to={resume} download target='blank' ><button className="btn btn-outline btn-success mt-3 cursor-pointer font-Roboto  text-lg"><span className='hover:text-white'>Get Resume </span><AiOutlineFilePdf></AiOutlineFilePdf></button></Link>
        </div>
      </div>
    </>
  );
};

export default Banner;
