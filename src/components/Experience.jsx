import React from 'react'
import s from '../style'
import { motion } from "framer-motion";
import abhyaz from '../assets/abhyaz.png'
import sv from '../assets/sv.png'
import sccse from '../assets/sccse.png'

export const Experience = () => {
  return (
    <div className={` ${s.flexCenter} flex-col text-xs md:text-sm`}>
      <div className="head my-8 text-white text-xl md:text-4xl lg:text-6xl font-bold " data-aos="fade-right" data-aos-duration="500">
        Experiences
      </div>
      <div className={`${s.flexCenter} flex-wrap text-xs md:text-base`}>
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
          className={`${s.flexBetween} flex-col text-cold-pink m-3 md:m-8 rounded-2xl w-[250px] md:w-[350px] h-[350px] md:h-[470px]  border-2 border-hot-pink p-5`}>
          <div className={`${s.flexCenter}`}>
            <img src={sv} alt="sv" className="w-10 md:w-20 h-10 md:h-20 object-cover mx-1" />
            <div className="text-2xl md:text-4xl font-semibold my-2">Skillvalley</div>
          </div>
            <div className="text-lg md:text-2xl font-semibold my-2">Product Developer</div>
          <div className=" my-2">
            •	Conducted interviews with several <strong className='text-hot-pink'>content writers</strong> and writing space CEOs identifying pain points of the problem.
          </div>
          <div className=" my-2">
            •	<strong className='text-hot-pink'>Led</strong> the Frontend department directing all the end-to-end processes to ensure a user friendly UI using <strong className='text-hot-pink'>Figma</strong> and <strong className='text-hot-pink'>Tailwind CSS</strong>.
          </div>
          <div className=" my-2">
            •	Deliverables:  Incorporated <strong className='text-hot-pink'>Quill API</strong> to make the text editor, developed the APIs for the <strong className='text-hot-pink'>Real-time collaboration</strong> feature.
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
          className={`${s.flexBetween} flex-col text-cold-pink m-3 md:m-8 rounded-2xl w-[250px] md:w-[350px] h-[350px] md:h-[470px]  border-2 border-hot-pink p-5`}>
          <div className={`${s.flexCenter} flex-col`}>
            <img src={abhyaz} alt="abhyaz" className="w-20 md:w-40 mx-1 md:mx-3 h-10 md:h-16" />
          <div className="text-lg md:text-2xl font-semibold my-4 md:my-6">Project Intern</div>
          </div>
          <div className=" mt-6">
            •	Deliverables: Optimized and improved the <strong className='text-hot-pink'>SEO of 3 pages</strong> of Abhyaz by an impressive <strong className='text-hot-pink'>40%</strong>.
          </div>
          <div className=" my-2">
            •	Products Led: Conceptualized and created a new site <a href="https://cnctrain.com/" className='text-hot-pink'>CNC Train</a> using <strong className='text-hot-pink'>ZOHO editor </strong>with another intern in 2 weeks.
          </div>
          <div className=" my-2">
            •	Strategized marketing campaigns and posters for Abhyaz during its expansion.
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
        className={`${s.flexBetween} flex-col text-cold-pink m-3 md:m-8 rounded-2xl w-[250px] md:w-[350px] h-[350px] md:h-[470px]  border-2 border-hot-pink p-5`}>

        <div className={`${s.flexCenter}`}>
          <img src={sccse} alt="sccse" className="w-8 md:w-16 mx-1 md:mx-3 h-8 md:h-16" />
          <div className="text-lg md:text-2xl font-semibold my-4 md:my-6">Student's Chapter CSE</div>
        </div>
          <div className=" my-2">
            •	Organised and Volunteered in 5 events like Tech Quiz, Alumni connect, Hackathon etc. engaging more than <strong className='text-hot-pink'>500+ students</strong>.
          </div>
          <div className=" my-2">
            •	<strong className='text-hot-pink'>Tech Member at SC-CSE</strong>, managed to develop features for the official website of the Students’ Chapter. || <a href="https://www.sccseaot.com/" className='text-hot-pink'>Site Link</a>
          </div>
          <div className=" my-2">
            •	<strong className='text-hot-pink'>Design Member at SC-CSE</strong>, designing content for promotion and editing promotional videos as well.
          </div>

      </motion.div>
      </div>
    </div>
  )
}
