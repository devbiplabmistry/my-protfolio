

import NavBar from "../NavBar/NavBar";
import CountUp from 'react-countup';
import { TbAntennaBars5 } from 'react-icons/tb';
import { MdIncompleteCircle } from 'react-icons/md';
import { GiHappySkull } from 'react-icons/gi';
import { LiaAwardSolid } from 'react-icons/lia';
import { Link } from "react-router-dom";
import { SkillBar } from 'react-skills';

const About = () => {
  return (
    <div className="mb-12">
      <NavBar></NavBar>
      <h1 data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className="font-Roboto font-extrabold text-5xl uppercase text-center mt-36">about <span className="text-green-600">me</span></h1>

      <h2 data-aos="zoom-in-right" className="text-4xl mb-24 uppercase font-Poppins font-bold mt-52 text-center mb-10 ">personal information</h2>
      <div className="flex sm:flex-col lg:flex-row justify-evenly" data-aos="flip-up">
        <div>
          <div className="information flex items-center justify-center  gap-6 ">
            <div className="ml-4">
              <h3 className="font-Poppins font-semibold text-xl text-blue-700 mb-2">Name: <span className="text-orange-300 text-sm">Biplab Mistry</span></h3>
              <h3 className="font-Poppins font-semibold text-xl text-blue-700 mb-2">Nationality: <span className="text-orange-300 text-sm ">Indian</span></h3>
              <h3 className="font-Poppins font-semibold text-xl text-blue-700">Address: <span className="text-orange-300 text-sm">Kolkata</span></h3>
            </div>
            <div>
              <h3 className="font-Poppins font-semibold text-xl text-blue-700 mb-2">Freelance: <span className="text-orange-300 text-sm">Available</span></h3>
              <h3 className="font-Poppins font-semibold text-xl text-blue-700 mb-2">Email: <span className="text-orange-300  text-sm">dev.biplabmistry@gmail.com</span></h3>
              <h3 className="font-Poppins font-semibold text-xl text-blue-700">Languages: <span className="text-orange-300 text-sm">English,Hindi,Bengali</span></h3>
            </div>
          </div>

          <Link to="/about/s"> <button className="btn btn-outline btn-secondary sm:my-12 lg:my-4 block mx-auto mt-10">Services</button> </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 mx-auto">
          <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className="experience w-64 h-36 border  flex justify-center items-center flex-col rounded-xl">
            <CountUp
              duration={5}
              start={0}
              end={1}
              style={{ fontFamily: 'Poppins', fontSize: '50px', color: 'blue', font: 'bold', }}
              suffix="+"
            />
            <h2 className="font-Poppins font-medium text-xl text-blue"> <TbAntennaBars5 className="inline-block"> </TbAntennaBars5> <span>  YEARS OF EXPERIENCE</span></h2>
          </div>
          <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className="experience w-64 h-36 border flex-col flex justify-center items-center rounded-xl">
            <CountUp
              duration={5}
              start={0}
              end={20}
              style={{ fontFamily: 'Poppins', fontSize: '50px', color: 'blue', font: 'bold', }}
              suffix="+"
            />

            <h2 className="font-Poppins font-medium text-xl text-blue"> <MdIncompleteCircle className="inline-block"> </MdIncompleteCircle> <span>COMPLETE PROJECTS</span></h2>

          </div>
          <div data-aos="fade-up"
            data-aos-duration="3000" className="experience w-64 h-36 border flex-col  flex justify-center items-center rounded-xl">
            <CountUp
              duration={5}
              start={0}
              end={18}
              style={{ fontFamily: 'Poppins', fontSize: '50px', color: 'blue', font: 'bold', }}
              suffix="+"
            />

            <h2 className="font-Poppins font-medium text-xl text-blue"> <GiHappySkull className="inline-block"> </GiHappySkull> <span>HAPPY CUSTOMERS</span></h2>
          </div>
          <div data-aos="fade-up"
            data-aos-duration="3000" className="experience w-64 h-36 border flex-col flex justify-center items-center rounded-xl">
            <CountUp
              duration={5}
              start={1}
              end={12}
              style={{ fontFamily: 'Poppins', fontSize: '50px', color: 'blue', font: 'bold', }}
              suffix="+"
            />
            <h2 className="font-Poppins font-medium text-xl text-blue"> <LiaAwardSolid className="inline-block"> </LiaAwardSolid> <span></span>AWARDS WON</h2>
          </div>
        </div>
      </div>
      <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className="mt-28" >
        <h2 className="my-skill text-center text-blue font-Poppins font-extrabold text-5xl">My Skills</h2>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 sm:ms-24 lg:ms-0 gap-11 mt-11">
        <SkillBar name="HTML" level={100} color="#ff7b25" />
        <SkillBar name="CSS" level={100} color="#7FFF00" />
        <SkillBar name="JAVASCRIPT" level={80} color="#008B8B" />
        <SkillBar name="JQUERY" level={85} color="#8B008B" />
        <SkillBar name="BOOTSTRAP" level={95} color="#00CED1" />
        <SkillBar name="TAILWIND" level={96} color="#FF1493" />
        <SkillBar name="MONGODB" level={75} color="#228B22" />
        <SkillBar name="EXPRESS JS" level={79} color="#ADFF2F" />
        <SkillBar name="REACT JS" level={97} color="#FF69B4" />
        <SkillBar name="NODE JS" level={78} color="#00FF00" />
        <SkillBar name="NEXT JS" level={69} color="#C71585" />
        <SkillBar name="GRAPHICS" level={80} color="#FF4500" />
      </div>
      <div className="my-28">
        <div data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" className="mt-28 " >
          <h2 className="my-skill text-center text-blue font-Poppins font-extrabold text-5xl mb-28">Education & Experience</h2>
        </div>
        <div className="flex gap-8 justify-center items-center">
          <div data-aos="fade-up-right" className="experience">
            <h3 className="font-Poppins font-bold text-xl text-blue-700">WORKING PROCESS</h3>
            <h2 className="font-Poppins font-semibold text-lg text-orange-400">Working Process of Fest</h2>
            <p className="font-Poppins text-base text-blue-600 font-medium">Here’s your guide to the tech fest 2021 process.<br></br> Go through all the steps to know the exact process of the fest.</p>
          </div>
          <div data-aos="fade-up-left">
            <h1 className="font-Roboto text-3xl font-bold text-orange-400 ">B.sc in Physics At University Of Calcutta</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;