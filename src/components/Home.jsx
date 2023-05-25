import React,{useState} from 'react'
import mypic from '../assets/mypic.png'
import s from '../style'
import { motion } from "framer-motion";
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Education } from './Education'
import { Footer } from './Footer';
import { Experience } from './Experience';

export const Home = () => {
    const [isAnimating,setIsAnimating]=useState(false);

    return (
        <div className={` bg-slate-950 w-full px-6 md:p-10 overflow-hidden`}>
            
            <div className={`head ${s.flexCenter} text-center overflow-hidden h-[600px] md:h-[800px] text-3xl md:text-7xl lg:text-[100px]  text-white font-extrabold`} data-aos="fade-down" data-aos-duration="1000">
                Scroll to read the next part
            </div>
          
            <div className={`${s.flexCenter} flex-col wrapper mb-40`}>
                <div className="hey head text-4xl md:text-7xl lg:text-[100px]" data-aos="fade-left" data-aos-duration="1000">
                    <span>H</span>
                    <span>i</span>
                    <span>i</span>
                    <span>,</span>
                </div>
                <div className="head glow-text my-10 md:my-20 text-slate-600 text-4xl md:text-7xl lg:text-[100px] font-normal tracking-wide " data-aos="fade-right" data-aos-duration="800">
                    <span>I</span>m<span>Shanit</span>
                </div>
                <div className={`p-10 ${s.flexCenter} block md:hidden flex-col`} data-aos="zoom-out-left" data-aos-duration="1000" >
                    <motion.img
                        animate={{
                            scale: isAnimating? 1 : 1.2,
                            rotate: isAnimating ? 360 : 0,
                        }}
                        onClick={()=>{
                            setIsAnimating(!isAnimating);
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            
                        }}
                    className={`bg-cold-pink rounded-full border-2 md:border-4 border-hot-pink w-36 z-50 `} src={mypic} alt="no"/>
                </div>
                <div className={`p-10 ${s.flexCenter} hidden md:block flex-col`} data-aos="zoom-out-left" data-aos-duration="1000" >
                    <motion.img
                        initial={{x:-1000}} 
                        animate={{
                            x: isAnimating? 350 : -350,
                            rotate: isAnimating ? 360 : 0,
                        }}
                        onClick={()=>{
                            setIsAnimating(!isAnimating);
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            
                        }}
                    className={`bg-cold-pink rounded-full border-2 md:border-4 border-hot-pink md:w-60 lg:w-80 z-50 `} src={mypic} alt="no"/>
                </div>
                <div className='tail flex text-3xl md:text-[60px]'>
                    <div className=" font-normal text-white my-[25px]" data-aos="fade-up" data-aos-duration="700" >I'm a</div>
                    <ul data-aos="fade-left" data-aos-duration="700" className={`dynamic-txts`} >
                        <li><span>Student</span></li>
                        <li><span>Developer</span></li>
                        <li><span>Designer</span></li>
                        <li><span>Problem Solver</span></li>
                    </ul>
                </div>
            </div>
          
            <Education/>
            <Skills/>
            <Projects/>
            <Experience/>
            <Footer/>
        </div>
    )
}
