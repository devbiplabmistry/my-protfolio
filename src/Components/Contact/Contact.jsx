import { BiLogoLinkedin, BiMessageRoundedMinus } from 'react-icons/bi';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_5pnyh3m', 'template_rck40tr', form.current, 'sR5VG4cZjOQSFdb8l')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });  
    }
    return (
        <>
            <NavBar></NavBar>
            <h1 data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className="font-Poppins font-extrabold text-blue text-6xl text-center mt-48">GET IN <span className="text-green-700">TOUCH </span></h1>
            <div className="flex lg:flex-row sm:flex-col sm:ms-24 md:sm-36 lg:ms-0 gap-4 ">
                <div className="w-1/2 mt-36 mb-36" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <h1 className='font-Poppins font-extrabold mb-4 text-3xl text-gray-600'>DON'T BE SHY !</h1>
                    <p className='font-Poppins font-normal text-base text-gray-500 mb-2'>Feel free to get in touch with me. I am always open to <br /> discussing new projects, creative ideas or opportunities to be <br /> part of your visions.</p>
                    <p className='font-Poppins font-semibold text-lg text-blue'>ADDRESS POINT: <span className='font-Poppins font-normal text-blue-700 text-base'>Kolkata, India</span > </p>
                    <p className='font-Poppins font-semibold text-lg text-blue'>MAIL ME: <span className='font-Poppins font-normal text-blue-700 text-base'>dev.biplabmistry@gmail.com</span > </p>
                    <p className='font-Poppins font-semibold text-lg text-blue'>PHONE ME: <span className='font-Poppins font-normal text-blue-700 text-base'>+916290220695</span> </p>
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
                    <div data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className="hero lg:mt-36 mb-36 sm:-ms-24 md:-ms-8 lg:ms-0 sm:-mt-24 ">
                        <form ref={form} onSubmit={sendEmail} className='bg-blue-500 gap-6 grid grid-cols-2 p-8 rounded-md'>
                            <label className='font-Poppins font-bold text-2xl ps-3 text-white'>Name</label>
                            <input type="text" name="user_name" className='bg-slate-500 rounded-lg p-2 text-white' />
                            <label className='font-Poppins font-bold text-2xl ps-3 text-white'>Email</label>
                            <input type="email" name="user_email" className='bg-slate-500 rounded-lg p-2 text-white' />
                            <label className='font-Poppins font-bold text-2xl ps-3 text-white '>Message</label>
                            <textarea name="message" className='bg-slate-500 rounded-lg p-2 text-white' />
                            <input type="submit" value="Send" className='btn btn-primary block mx-auto' />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;