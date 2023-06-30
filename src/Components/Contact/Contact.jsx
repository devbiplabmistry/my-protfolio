import {BiLogoLinkedin, BiMessageRoundedMinus } from 'react-icons/bi';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
const Contact = () => {
    return (
        <>
        <NavBar></NavBar>
          <h1 className="font-Poppins font-extrabold text-black text-6xl text-center mt-48">GET IN <span className="text-green-700">TOUCH </span></h1>
        <div className="flex gap-4">
        
            <div className="w-1/2 mt-36 mb-36">
                <h1 className='font-Poppins font-extrabold mb-4 text-3xl text-gray-950'>DON'T BE SHY !</h1>
                <p className='font-Poppins font-normal text-base text-gray-500 mb-2'>Feel free to get in touch with me. I am always open to <br /> discussing new projects, creative ideas or opportunities to be <br /> part of your visions.</p>
                <p className='font-Poppins font-semibold text-lg text-black'>ADDRESS POINT: <span className='font-Poppins font-normal text-blue-700 text-base'>Kolkata, India</span > </p>
                <p className='font-Poppins font-semibold text-lg text-black'>MAIL ME: <span className='font-Poppins font-normal text-blue-700 text-base'>dev.biplabmistry@gmail.com</span > </p>
                <p className='font-Poppins font-semibold text-lg text-black'>PHONE ME: <span className='font-Poppins font-normal text-blue-700 text-base'>+916290220695</span> </p>
             <div className='flex gap-8 mt-8 mx-auto text-center'>
          <div className='w-8 h-8 rounded-full bg-blue-500 flex justify-center items-center'>
          <Link to="https://www.linkedin.com/in/mistrybiplab/"><BiLogoLinkedin className='text-sm text-white'></BiLogoLinkedin></Link>
          </div>
          <div className='w-8 h-8 rounded-full bg-blue-500 flex justify-center items-center'>
          <Link to="https://github.com/devbiplabmistry"><BsGithub className='text-sm text-white'></BsGithub></Link>
          </div>
             </div>
            </div>
            <div>
                <div className="hero mt-36 mb-36">
                        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                            <div className="card-body grid grid-cols-2 w-full gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text  capitalize font-Poppins font-normal text-base text-green-950 items-center">Name</span>
                                    </label>
                                    <input type="text" placeholder="Ex. John Deo" className="input input-bordered  capitalize font-Poppins font-normal text-base text-green-950 items-center" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text  capitalize font-Poppins font-normal text-base text-green-950 items-center">Email</span>
                                    </label>
                                    <input type="email" placeholder="Ex.name@example.com" className="input input-bordered  capitalize font-Poppins font-normal text-base text-green-950 items-center" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text  capitalize font-Poppins font-normal text-base text-green-950 items-center">Subject</span>
                                    </label>
                                    <input type="text" placeholder="Ex.create website" className="input input-bordered  capitalize font-Poppins font-normal text-base text-green-950 items-center" />
                                </div>
                                <textarea className="textarea textarea-secondary  capitalize font-Poppins font-normal text-base text-green-950 items-center" placeholder="Type Details here..."></textarea>
                            </div>
                            <button className="btn btn-outline btn-primary inline-block mx-auto mb-8"><p className='flex capitalize font-Poppins font-normal text-base text-green-950 items-center gap-1'>Send Message <BiMessageRoundedMinus></BiMessageRoundedMinus></p></button>
                        </div>
                  
                </div>
            </div>
        </div>
</>
    );
};

export default Contact;