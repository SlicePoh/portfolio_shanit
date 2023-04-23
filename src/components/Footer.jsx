import React,{ useRef } from 'react'
import s from '../style'
import {FaFacebook,FaInstagram,FaLinkedin,FaGithub,FaHandPointDown} from 'react-icons/fa'
import {BiDownload} from 'react-icons/bi'
import cv from '../assets/cv.pdf'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Footer = () => {

    const notify1 = () => toast.success('Resume Downloaded', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    const notify2 = () => toast.success('Message Sent!!!', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_g4r7qye', 'template_2dzficj', form.current, 'FpSH-34SHnzQh7xyf')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className='tail'>
            <div className={`${s.flexCenter} `} data-aos="zoom-in" data-aos-duration="700">
                <a href={cv} onClick={notify1} download="Resume" className={`${s.flexCenter} flex w-60 p-4 border-2 text-cold-pink text-lg border-cold-pink rounded-lg font-bold`}>
                    <span>Download CV </span>
                    <BiDownload className="ml-4 text-2xl"/>
                </a>
            </div>
            <div className={`head ${s.flexCenter} my-8 text-white text-4xl font-semibold `} data-aos="fade-right" data-aos-duration="700">
                My Socials
            </div>
            <div className={`${s.flexCenter} text-3xl text-cold-pink`}>
                <a className={`cursor-pointer m-10`} data-aos="fade-down" data-aos-duration="700" href="https://www.facebook.com/shanit.paul.71/" target="_blank" rel="noreferrer">
                    <FaFacebook/>
                </a>
                <a className={`cursor-pointer m-10`} data-aos="fade-down" data-aos-duration="700" href="https://www.linkedin.com/in/shanit-paul-746026205/" target="_blank" rel="noreferrer">
                    <FaLinkedin/>
                </a>
                <a className={`cursor-pointer m-10`} data-aos="fade-down" data-aos-duration="700" href="https://www.instagram.com/_s_h_a_n_i_t_/" target="_blank" rel="noreferrer">
                    <FaInstagram/>
                </a>
                <a className={`cursor-pointer m-10`} data-aos="fade-down" data-aos-duration="700" href="https://github.com/SlicePoh" target="_blank" rel="noreferrer">
                    <FaGithub/>
                </a>
            </div>
            <div className={`head ${s.flexCenter} my-8 text-white text-3xl font-semibold `} data-aos="fade-right" data-aos-duration="700">
                Write me a message
                <FaHandPointDown className='mx-6'/>
            </div>
            <div className={`${s.flexCenter }`}>
                <div className={`${s.flexStart} flex-col`}>
                    <form ref={form} onSubmit={sendEmail} className={`${s.flexStart} flex-col`}>
                        <div className="text-lg text-white text-center p-2 font-semibold">Your Name</div>
                        <input type="text" name="user_name" className={`bg-cold-pink w-[650px] p-2 h-10 rounded-xl text-center `} placeholder="Enter your name here"/>
                        <div className="text-lg text-white text-center p-2 font-semibold">Your Email</div>
                        <input type="email" name="user_email" className={`bg-cold-pink w-[650px] p-2 h-10 rounded-xl text-center `} placeholder="Enter your email here" />
                        <div className="text-lg text-white text-center p-2 font-semibold">Your Message</div>
                        <textarea name="message" className={`bg-cold-pink w-[650px] p-2 h-40 rounded-xl text-center `} placeholder="Write your message here" />
                        <button type="submit" onClick={notify2} className={`${s.flexCenter} w-[650px] p-2 h-10 rounded-xl my-6 bg-hot-pink font-semibold `}>Send</button>
                        <ToastContainer/>
                    </form> 
                </div>
            </div>
        </div>
    )
}
