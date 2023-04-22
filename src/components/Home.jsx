import React,{useState} from 'react'
import mypic from '../assets/mypic.png'
import s from '../style'
import { motion } from "framer-motion";
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Education } from './Education'

export const Home = () => {
    const [isAnimating,setIsAnimating]=useState(false);

    return (
        <div className={` bg-slate-950 w-fit p-10 overflow-hidden`}>
            
            <div className={`head ${s.flexCenter} text-center overflow-hidden h-[800px] text-3xl md:text-8xl text-white font-extrabold`} data-aos="fade-down" data-aos-duration="1000">
                Scroll to read the next part
            </div>
          
            <div className={`${s.flexCenter} flex-col wrapper mb-40`}>
                <div className="hey text-8xl " data-aos="fade-left" data-aos-duration="1000">
                    <span>H</span>
                    <span>e</span>
                    <span>y</span>
                    <span>y</span>
                    <span>y</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </div>
                <div className="glow-text my-20 text-slate-600  text-[100px] font-normal tracking-wide " data-aos="fade-right" data-aos-duration="800">
                    <span>I</span>m<span>Shanit</span>
                </div>
                <div className={`p-10 ${s.flexCenter} flex-col`} data-aos="zoom-out-left" data-aos-duration="1000" >
                    <motion.img
                        initial={{x:-1000}} 
                        animate={{
                            x: isAnimating? 250 : -250,
                            rotate: isAnimating ? 360 : 0,
                        }}
                        onClick={()=>{
                            setIsAnimating(!isAnimating);
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            
                        }}
                    className={`bg-gray-400 rounded-3xl border-2 border-gray-500 w-60 z-50 `} src={mypic} alt="no"/>
                </div>
                <div className='flex'>
                    <div className="static-txt text-[60px] font-normal text-white " data-aos="fade-up" data-aos-duration="700" >I'm a</div>
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
        </div>
    )
}
