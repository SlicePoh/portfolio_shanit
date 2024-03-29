import React,{ useRef } from 'react'
import s from '../style'
import {FaInstagram,FaLinkedin,FaGithub,FaHandPointDown} from 'react-icons/fa'
import {SiGeeksforgeeks, SiLeetcode, SiPeerlist} from 'react-icons/si'
import {BiDownload} from 'react-icons/bi'
import cv from '../assets/cv.pdf'
import emailjs from '@emailjs/browser';
import email from '../assets/email.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiTwitterXFill } from 'react-icons/ri'


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
            <div className={`head ${s.flexCenter} my-10 md:my-16 text-white text-xl md:text-4xl font-semibold `} data-aos="fade-right" data-aos-duration="700">
                My Socials
            </div>
            <div className={`${s.flexCenter} text-xl md:text-3xl text-cold-pink`}>
                <a className={`cursor-pointer m-3 md:m-8`} data-aos="fade-down" data-aos-duration="700" href="https://www.linkedin.com/in/shanitpaul/" target="_blank" rel="noreferrer">
                    <FaLinkedin/>
                </a>
                <a className={`cursor-pointer m-3 md:m-8`} data-aos="fade-down" data-aos-duration="700" href="https://github.com/SlicePoh" target="_blank" rel="noreferrer">
                    <FaGithub/>
                </a>
                <a className={`cursor-pointer m-3 md:m-8`} data-aos="fade-down" data-aos-duration="700" href="https://peerlist.io/shanit" target="_blank" rel="noreferrer">
                    <SiPeerlist/>
                </a>
                <a className={`cursor-pointer m-3 md:m-8`} data-aos="fade-down" data-aos-duration="700" href="https://www.instagram.com/_s_h_a_n_i_t_/" target="_blank" rel="noreferrer">
                    <FaInstagram/>
                </a>
                <a className={`cursor-pointer m-3 md:m-8`} data-aos="fade-down" data-aos-duration="700" href="https://twitter.com/slicepoh" target="_blank" rel="noreferrer">
                    <RiTwitterXFill/>
                </a>
                <a className={`cursor-pointer m-3 md:m-8`} data-aos="fade-down" data-aos-duration="700" href="https://leetcode.com/ShanitPaul/" target="_blank" rel="noreferrer">
                    <SiLeetcode/>
                </a>
                <a className={`cursor-pointer m-3 md:m-8`} data-aos="fade-down" data-aos-duration="700" href="https://auth.geeksforgeeks.org/user/slicepoh/practice" target="_blank" rel="noreferrer">
                    <SiGeeksforgeeks/>
                </a>
            </div>
            <div className={`${s.flexCenter} `} data-aos="zoom-in" data-aos-duration="1000">
                <a href={cv} onClick={notify1} download="Shanit's resume" className={`${s.flexCenter} my-10 flex w-40 md:w-60 p-2 md:p-4 border-2 text-cold-pink text-base md:text-lg border-cold-pink rounded-lg font-bold`}>
                    <span>Get Resume</span>
                    <BiDownload className="ml-2 md:ml-4 text-xl md:text-2xl"/>
                </a>
            </div>
            <div className={`head ${s.flexCenter} my-8 text-white text-xl md:text-3xl font-semibold `} data-aos="fade-right" data-aos-duration="700">
                <img src={email} alt="email" className="w-5 md:w-10 mx-1 md:mx-3"/>
                Write me a message
                <FaHandPointDown className='mx-1 md:mx-3'/>
            </div>
            <div className={`${s.flexCenter }`}>
                <div className={`${s.flexStart} flex-col`}>
                    <form ref={form} onSubmit={sendEmail} className={`${s.flexCenter} flex-col`}>
                        <div className="text-sm md:text-lg text-white text-center p-2 font-semibold">Your Name</div>
                        <input type="text" name="user_name" className={`bg-cold-pink w-[250px] md:w-[650px] p-2 h-8 text-sm md:text-lg md:h-10 rounded-lg text-center `} placeholder="Enter your name here"/>
                        <div className="text-sm md:text-lg text-white text-center p-2 font-semibold">Your Email</div>
                        <input type="email" name="user_email" className={`bg-cold-pink w-[250px] md:w-[650px] p-2 h-8 text-sm md:text-lg md:h-10 rounded-lg text-center `} placeholder="Enter your email here" />
                        <div className="text-sm md:text-lg text-white text-center p-2 font-semibold">Your Message</div>
                        <textarea name="message" className={`bg-cold-pink w-[250px] md:w-[650px] p-2 h-28 text-sm md:text-lg md:h-40 rounded-lg text-center `} placeholder="Write your message here" />
                        <button type="submit" onClick={notify2} className={`${s.flexCenter} w-[250px] md:w-[650px] p-2 h-8 md:h-10 rounded-xl my-6 bg-hot-pink font-semibold `}>Send</button>
                        <ToastContainer/>
                    </form> 
                </div>
            </div>
            <div className={`${s.flexCenter} text-center mt-20 mb-5 text-xs md:text-sm text-slate-500`}>
                copyrights @2023 shanitpaul. All Rights Reserved
            </div>
        </div>
    )
}
