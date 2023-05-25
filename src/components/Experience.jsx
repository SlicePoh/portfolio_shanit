import React from 'react'
import s from '../style'
import { motion } from "framer-motion";
import abhyaz from '../assets/abhyaz.png'
import lgm from '../assets/lgm.png'
import sccse from '../assets/sccse.png'

export const Experience = () => {
  return (
    <div className={` ${s.flexCenter} flex-col text-xs md:text-sm`}>
      <div className="head my-8 text-white text-xl md:text-4xl lg:text-6xl font-bold " data-aos="fade-right" data-aos-duration="500">
        Experiences
      </div>
      <div className={`${s.flexCenter} flex-wrap text-xs md:text-base`}><motion.div
          data-aos="flip-right"
          data-aos-duration="1500"
          whileHover={{
            color: '#ff1493',
            scale: 1.1,
          }}
          transition={{
            duration: 0.1
          }}
          className={`${s.flexBetween} flex-col text-cold-pink m-3 md:m-8 rounded-2xl w-[250px] md:w-[350px] h-[250px] md:h-[500px]  border-2 border-hot-pink `}>

          <div className={`${s.flexCenter} flex-col mt-5 md:mt-8`}>
            <img src={sccse} alt="sccse" className="w-8 md:w-16 mx-1 md:mx-3 h-8 md:h-16" />
            <div className="text-lg md:text-2xl font-semibold my-4 md:my-6">Frontend Developer</div>
          </div>
          <div className="text-center px-4 md:px-10 my-6 ">
            Working on the official website for Students' Chapter CSE of out college. I Made the footer and Newsletter Section so far. I got to work together with so many skilled and gifted developers from our department.  
          </div>
          
        </motion.div>

        <motion.div
          data-aos="flip-right"
          data-aos-duration="1500"
          whileHover={{
            color: '#ff1493',
            scale: 1.1,
          }}
          transition={{
            duration: 0.1
          }}
          className={`${s.flexBetween} flex-col text-cold-pink m-3 md:m-8 rounded-2xl w-[250px] md:w-[350px] h-[350px] md:h-[500px]  border-2 border-hot-pink `}>
          <div className={`${s.flexCenter} flex-col mt-5 md:mt-8`}>
            <img src={abhyaz} alt="abhyaz" className="w-20 md:w-40 mx-1 md:mx-3 h-10 md:h-16" />
            <div className="text-lg md:text-2xl font-semibold my-4 md:my-6">Project Intern</div>
          </div>

          <div className="text-center px-4 md:px-10 my-6   ">
            Abhyaz provided me with actual industry level project working as professional with room for personal customizations as well. I worked with my mentor and peers who helped me with any difficulties and made my time here very enjoyable. Me and my teammate were working on the site - https://cnctrain.com/ . I learned a lot both in technical skills as well as communicational skills while working here.
          </div>
        </motion.div>
        <motion.div
          data-aos="flip-right"
          data-aos-duration="1500"
          whileHover={{
            color: '#ff1493',
            scale: 1.1,
          }}
          transition={{
            duration: 0.1
          }}
          className={`${s.flexBetween} flex-col text-cold-pink m-3 md:m-8 rounded-2xl w-[250px] md:w-[350px] h-[320px] md:h-[500px]  border-2 border-hot-pink `}>
          <div className={`${s.flexCenter} flex-col mt-5 md:mt-8`}>
            <img src={lgm} alt="lgm" className="w-24 md:w-40 mx-1 md:mx-3 h-10 md:h-16" />
            <div className="text-lg md:text-2xl font-semibold my-4 md:my-6">Frontend Intern</div>
          </div>
          <div className="text-center px-4 md:px-10 my-6   ">
            During this I Made 4 small projects and used React Js for the first time in a project .Learned about API calling , JSON and its properties as well as Problem solving in Javascript. Due to semester exams I had to juggle a lot of things together while making these projects. So I learned a lot about working under pressure and time management .
          </div>
        </motion.div>
        
      </div>
    </div>
  )
}
