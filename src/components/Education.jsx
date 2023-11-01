import React from 'react'
import s from '../style'
import {FaSchool} from "react-icons/fa"
import {MdSchool} from "react-icons/md"
import {HiBuildingOffice2} from "react-icons/hi2"
import { motion } from 'framer-motion'

export const Education = () => {
  return (
    <div>
        <div className={`tail ${s.flexCenter} flex-col text-[10px] md:text-base`}>
                <div className="head my-8 text-white text-xl md:text-6xl font-bold " data-aos="fade-right" data-aos-duration="500">
                    Educational Qualification
                </div>
                <div className={`${s.flexCenter} ml-[55px] md:ml-32`}>
                    <div className={`w-10 md:w-28 h-[30px] md:h-24 mt-24 md:mt-20 p-2 md:p-4 rounded-lg font-semibold bg-cold-pink ${s.flexCenter}`} data-aos="fade-up-right">
                        School
                    </div>
                    <div className="w-6 md:w-16 rounded-sm mt-24 md:mt-16 h-1 mx-1 md:mx-4 bg-cold-pink" data-aos="fade-right"></div>
                    <div className={`w-10 md:w-20 h-10 md:h-20 mt-24 md:mt-20 rounded-lg font-bold bg-cold-pink ${s.flexCenter}`} data-aos="zoom-in" data-aos-duration="500">
                        <FaSchool className="text-3xl md:text-6xl"/>
                    </div>
                    <div className="w-6 md:w-16 rounded-sm mt-24 md:mt-16 h-1 mx-1 md:mx-4 bg-cold-pink" data-aos="fade-left"></div>
                    <div className={`w-24 md:w-60 h-20 md:h-32 mt-20 p-1 md:p-4 rounded-lg font-bold bg-cold-pink border-4 border-hot-pink ${s.flexCenter}`} data-aos="fade-down-left">
                        Gopal Govinda Academy, Barrackpore Misson 2005-2017
                    </div>
                </div>


                <div className="w-1 rounded-sm h-10 md:h-16  bg-cold-pink" data-aos="fade-up"></div>


                <div className={`${s.flexCenter} ml-48 md:ml-0 md:mr-4` }>
                    <div className={`w-24 md:w-60 h-20 md:h-32  p-1 md:p-4 rounded-xl font-bold bg-cold-pink border-4 border-hot-pink ${s.flexCenter}`} data-aos="flip-down">
                        West Bengal Board of Secondary Education ( 88% )
                    </div>
                    <div className="w-6 md:w-16 rounded-sm h-1 mx-1 md:mx-4 bg-cold-pink" data-aos="fade-right"></div>
                    <motion.div 
                        whileHover={{
                            rotate: 360
                        }}
                        transition={{
                            duration: 0.1
                        }}
                    className={`w-10 md:w-20 h-10 md:h-20 mr-80 rounded-full font-bold bg-cold-pink ${s.flexCenter}`} data-aos="zoom-in" data-aos-duration="500">
                        WBBSE
                    </motion.div>
                    
                </div>


                <div className="w-1 rounded-sm h-10 md:h-16  bg-cold-pink" data-aos="fade-up"></div>


                <div className={`${s.flexCenter} ml-[45px] md:ml-28`}>
                    <div className={`w-16 md:w-32 h-10 md:h-24 p-1 md:p-4 rounded-lg font-bold bg-cold-pink ${s.flexCenter}`} data-aos="fade-up-right">
                        High School
                    </div>
                    <div className="w-6 md:w-16 rounded-sm  h-1 mx-1 md:mx-4 bg-cold-pink" data-aos="fade-right"></div>
                    
                    <div className={`w-10 md:w-20 h-10 md:h-20  rounded-xl font-bold bg-cold-pink ${s.flexCenter}`} data-aos="zoom-in" data-aos-duration="500">
                        <HiBuildingOffice2 className="text-3xl md:text-6xl"/>
                    </div>
                    <div className="w-6 md:w-16 rounded-sm  h-1 mx-1 md:mx-4 bg-cold-pink" data-aos="fade-right"></div>
                    <div className={`w-[105px] md:w-60 h-20 md:h-32 p-1 md:p-4 rounded-xl font-bold bg-cold-pink border-4 border-hot-pink ${s.flexCenter}`} data-aos="fade-down-left">
                        Ramakrishna Vivekananda Misson, Barrackpore, 2017-2019
                    </div>
                </div>

                <div className="w-1 rounded-sm h-10 md:h-16  bg-cold-pink" data-aos="fade-up"></div>

                <div className={`${s.flexCenter} ml-48 md:ml-0 md:mr-4`}>
                    <div className={`w-24 md:w-60 h-20 md:h-32  p-1 md:p-4 rounded-xl font-bold bg-cold-pink border-4 border-hot-pink ${s.flexCenter}`} data-aos="flip-down">
                        West Bengal Council of Higher Secondary Education ( 83% )
                    </div>
                    <div className="w-6 md:w-16 rounded-sm  h-1 mx-1 md:mx-4 bg-cold-pink" data-aos="fade-right"></div>
                    <motion.div 
                        whileHover={{
                            rotate: 360
                        }}
                        transition={{
                            duration: 0.1
                        }}
                    className={`w-10 md:w-20 h-10 md:h-20 mr-80 rounded-full font-bold bg-cold-pink ${s.flexCenter}`} data-aos="zoom-in" data-aos-duration="500">
                        WBCHSE
                    </motion.div>
                    
                </div>
            
                <div className="w-1 rounded-sm h-10 md:h-16 bg-cold-pink" data-aos="fade-up"></div>

                <div className={`${s.flexCenter} ml-[46px] md:ml-28`}>
                    <div className={`w-[50px] md:w-32 h-10 md:h-24 p-1 md:p-4 rounded-lg font-bold bg-cold-pink text-center`} data-aos="fade-up-right">
                        College (B.Tech)
                    </div>
                    <div className="w-6 md:w-16 rounded-sm  h-1 mx-1 md:mx-4 bg-cold-pink" data-aos="fade-right"></div>
                    <div className={`w-10 md:w-20 h-10 md:h-20 rounded-lg font-bold bg-cold-pink ${s.flexCenter}`} data-aos="zoom-in" data-aos-duration="500">
                        <MdSchool className="text-3xl md:text-6xl"/>
                    </div>
                    <div className="w-6 md:w-16 rounded-sm  h-1 mx-1 md:mx-4 bg-cold-pink" data-aos="fade-right"></div>
                    <div className={`w-24 md:w-60 h-20 md:h-32 p-1 md:p-4 rounded-lg font-bold bg-cold-pink border-4 border-hot-pink ${s.flexCenter}`} data-aos="fade-down-left">
                        Academy of Technology, Adisaptagram, 2020-2024
                    </div>
                </div>

                <div className="w-1 rounded-sm h-10 md:h-16 bg-cold-pink" data-aos="fade-up"></div>

                <div className={`${s.flexCenter} mt-0 md:mt-4 ml-40 md:ml-0` }>
                    <div className={`w-24 md:w-48 h-16 md:h-20 p-1 md:p-4 rounded-xl font-bold bg-cold-pink border-4 border-hot-pink ${s.flexCenter}`} data-aos="flip-down">
                        9.17-(upto 6th Sem)
                    </div>
                
                    <div className="w-6 md:w-16 rounded-sm  h-1 mx-1 md:mx-4 mb-4 md:mb-0 bg-cold-pink" data-aos="fade-right"></div>
                    <motion.div 
                        whileHover={{
                            rotate: 360
                        }}
                        transition={{
                            duration: 0.1
                        }}
                    className={`w-10 md:w-20 h-10 md:h-20 mr-72 mb-4 md:mb-0 rounded-full font-bold bg-cold-pink ${s.flexCenter}`} data-aos="zoom-in" data-aos-duration="500">
                        CGPA
                    </motion.div>
                </div>
            </div>
    </div>
  )
}
