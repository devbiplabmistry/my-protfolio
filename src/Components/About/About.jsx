

import NavBar from "../NavBar/NavBar";
import CountUp from 'react-countup';
import { TbAntennaBars5 } from 'react-icons/tb';
import { MdIncompleteCircle } from 'react-icons/md';
import { GiHappySkull } from 'react-icons/gi';
import { LiaAwardSolid } from 'react-icons/lia';
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
const About = () => {
  const HTMLPercentage = 94;
  const CSSPercentage = 98;
  const JAVASCRIPTPercentage = 75;
  const JQUERYPercentage = 79;
  const BOOTSTRAPPercentage = 96;
  const TAILWINDPercentage = 88;
  const MONGODBPercentage = 53;
  const EXPRESSPercentage = 53;
  const REACTPercentage = 97;
  const NODEPercentage = 69;
  const GRAPHICSPercentage = 77;
  const NEXTPercentage = 71;
  return (
    <div className="mb-12">
      <NavBar></NavBar>
      <h1 className="font-Roboto font-extrabold text-5xl uppercase text-center mt-36">about <span className="text-green-600">me</span></h1>

      <h2 className="text-4xl uppercase font-Poppins font-bold mt-52 text-center mb-10 ">personal information</h2>
      <div className="flex justify-evenly">
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

          <Link to="/about/s"> <button className="btn btn-outline btn-secondary block mx-auto mt-10">Services</button> </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="experience w-64 h-36 border  flex justify-center items-center flex-col rounded-xl">
            <CountUp
              duration={5}
              start={0}
              end={1}
              style={{ fontFamily: 'Poppins', fontSize: '50px', color: 'blue', font: 'bold', }}
              suffix="+"
            />
            <h2 className="font-Poppins font-medium text-xl text-black"> <TbAntennaBars5 className="inline-block"> </TbAntennaBars5> <span>  YEARS OF EXPERIENCE</span></h2>
          </div>
          <div className="experience w-64 h-36 border flex-col flex justify-center items-center rounded-xl">
            <CountUp
              duration={5}
              start={0}
              end={20}
              style={{ fontFamily: 'Poppins', fontSize: '50px', color: 'blue', font: 'bold', }}
              suffix="+"
            />

            <h2 className="font-Poppins font-medium text-xl text-black"> <MdIncompleteCircle className="inline-block"> </MdIncompleteCircle> <span>COMPLETE PROJECTS</span></h2>

          </div>
          <div className="experience w-64 h-36 border flex-col  flex justify-center items-center rounded-xl">
            <CountUp
              duration={5}
              start={0}
              end={18}
              style={{ fontFamily: 'Poppins', fontSize: '50px', color: 'blue', font: 'bold', }}
              suffix="+"
            />

            <h2 className="font-Poppins font-medium text-xl text-black"> <GiHappySkull className="inline-block"> </GiHappySkull> <span>HAPPY CUSTOMERS</span></h2>
          </div>
          <div className="experience w-64 h-36 border flex-col flex justify-center items-center rounded-xl">
            <CountUp
              duration={5}
              start={1}
              end={12}
              style={{ fontFamily: 'Poppins', fontSize: '50px', color: 'blue', font: 'bold', }}
              suffix="+"
            />
            <h2 className="font-Poppins font-medium text-xl text-black"> <LiaAwardSolid className="inline-block"> </LiaAwardSolid> <span></span>AWARDS WON</h2>
          </div>
        </div>
      </div>
      <div className="mt-28" >
        <h2 className="my-skill text-center text-black font-Poppins font-extrabold text-5xl">My Skills</h2>
      </div>
      <div className="grid grid-cols-4 gap-11 mt-11">
        <div style={{ width: 150, height: 150, textAlign: 'center' }}>
          <CircularProgressbar
            value={HTMLPercentage}
            text={`${HTMLPercentage}%`}
            styles={buildStyles({
              textColor: "red",
              pathColor: "turquoise",
              trailColor: "gold"
            })}
          />
          <h3>HTML</h3>
        </div>
        <div style={{ width: 150, height: 150, textAlign: 'center' }}>
          <CircularProgressbar
            value={CSSPercentage}
            text={`${CSSPercentage}%`}
            styles={buildStyles({
              textColor: "red",
              pathColor: "turquoise",
              trailColor: "gold"
            })}
          />
          <h3>CSS</h3>
        </div>
        <div style={{ width: 150, height: 150, textAlign: 'center' }}>
          <CircularProgressbar
            value={JAVASCRIPTPercentage}
            text={`${JAVASCRIPTPercentage}%`}
            styles={buildStyles({
              textColor: "red",
              pathColor: "turquoise",
              trailColor: "gold"
            })}
          />
          <h3>JAVASCRIPT</h3>
        </div>
        <div style={{ width: 150, height: 150, textAlign: 'center' }}>
          <CircularProgressbar
            value={JQUERYPercentage}
            text={`${JQUERYPercentage}%`}
            styles={buildStyles({
              textColor: "red",
              pathColor: "turquoise",
              trailColor: "gold"
            })}
          />
          <h3>JQUERY</h3>
        </div>
        <div style={{ width: 150, height: 150, textAlign: 'center' }}>
          <CircularProgressbar
            value={BOOTSTRAPPercentage}
            text={`${BOOTSTRAPPercentage}%`}
            styles={buildStyles({
              textColor: "red",
              pathColor: "turquoise",
              trailColor: "gold"
            })}
          />
          <h3>BOOTSTRAP</h3>
        </div>
        <div style={{ width: 150, height: 150, textAlign: 'center' }}>
          <CircularProgressbar
            value={TAILWINDPercentage}
            text={`${TAILWINDPercentage}%`}
            styles={buildStyles({
              textColor: "red",
              pathColor: "turquoise",
              trailColor: "gold"
            })}
          />
          <h3>TAILWIND</h3>
        </div>
        <div style={{ width: 150, height: 150, textAlign: 'center' }}>
          <CircularProgressbar
            value={MONGODBPercentage}
            text={`${MONGODBPercentage}%`}
            styles={buildStyles({
              textColor: "red",
              pathColor: "turquoise",
              trailColor: "gold"
            })}
          />
          <h3>MONGODB</h3>
        </div>
        <div style={{ width: 150, height: 150, textAlign: 'center' }}>
          <CircularProgressbar
            value={EXPRESSPercentage}
            text={`${EXPRESSPercentage}%`}
            styles={buildStyles({
              textColor: "red",
              pathColor: "turquoise",
              trailColor: "gold"
            })}
          />
          <h3>EXPRESS JS</h3>
        </div>
        <div style={{ width: 150, height: 150, textAlign: 'center' }}>
          <CircularProgressbar
            value={REACTPercentage}
            text={`${REACTPercentage}%`}
            styles={buildStyles({
              textColor: "red",
              pathColor: "turquoise",
              trailColor: "gold"
            })}
          />
          <h3>REACT JS</h3>
        </div>
        <div style={{ width: 150, height: 150, textAlign: 'center' }}>
          <CircularProgressbar
            value={NODEPercentage}
            text={`${NODEPercentage}%`}
            styles={buildStyles({
              textColor: "red",
              pathColor: "turquoise",
              trailColor: "gold"
            })}
          />
          <h3>NODE JS</h3>
        </div>
        <div style={{ width: 150, height: 150, textAlign: 'center' }}>
          <CircularProgressbar
            value={GRAPHICSPercentage}
            text={`${GRAPHICSPercentage}%`}
            styles={buildStyles({
              textColor: "red",
              pathColor: "turquoise",
              trailColor: "gold"
            })}
          />
          <h3>GRAPHICS</h3>
        </div>
        <div style={{ width: 150, height: 150, textAlign: 'center' }}>
          <CircularProgressbar
            value={NEXTPercentage}
            text={`${NEXTPercentage}%`}
            styles={buildStyles({
              textColor: "red",
              pathColor: "turquoise",
              trailColor: "gold"
            })}
          />
          <h3>NEXT JS</h3>
        </div>
      </div>
      {/*  */}
      <div>
        <h2 className="text-4xl uppercase font-Poppins font-bold mt-52 text-center mb-10 ">Education & Experience</h2>
        <div className="flex gap-8 justify-evenly items-center ">
          <div>
            <h3 className="font-Roboto font-semibold text-2xl text-green-400">Working Process Of Fest</h3>
            <p className="font-Poppins font-medium text-base text-blue-400">Here’s your guide to the tech fest 2021 process. <br /> Go through all the steps to know the exact <br /> process of the fest.</p>
          </div>
          <div>
            <h2 className="font-Poppins font-medium text-base text-blue-400">B.sc in Physics at University of Calcutta</h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;