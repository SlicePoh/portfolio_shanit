import React from 'react'
import s from '../style'
import {FaSchool} from "react-icons/fa"
import {MdSchool} from "react-icons/md"
import {HiBuildingOffice2} from "react-icons/hi2"


export const Education = () => {
  return (
    <div>
        <div className={`Education ${s.flexCenter} flex-col`}>
                <div className="my-8 text-white text-4xl font-semibold " data-aos="fade-right" data-aos-duration="500">
                    Educational Qualification...
                </div>
                <div className={`${s.flexCenter} ml-32`}>
                    <div className={`w-28 h-24 mt-20 p-4 rounded-lg font-bold bg-cold-pink ${s.flexCenter}`} data-aos="fade-up-right">
                        School
                    </div>
                    <div className="w-16 rounded-sm mt-16 h-1 mx-4 bg-cold-pink" data-aos="fade-right"></div>
                    <div className={`w-20 h-20 mt-20 rounded-lg font-bold bg-cold-pink ${s.flexCenter}`} data-aos="zoom-in" data-aos-duration="500">
                        <FaSchool className="text-6xl"/>
                    </div>
                    <div className="w-16 rounded-sm mt-16 h-1 mx-4 bg-cold-pink" data-aos="fade-left"></div>
                    <div className={`w-60 h-32 mt-20 p-4 rounded-lg font-bold bg-cold-pink border-4 border-hot-pink ${s.flexCenter}`} data-aos="fade-down-left">
                        Gopal Govinda Academy, Barrackpore Misson 2005-2017
                    </div>
                </div>


                <div className="w-1 rounded-sm h-16  bg-cold-pink" data-aos="fade-up"></div>


                <div className={`${s.flexCenter} mr-4` }>
                    <div className={`w-60 h-32  p-4 rounded-xl font-bold bg-cold-pink border-4 border-hot-pink ${s.flexCenter}`} data-aos="flip-down">
                        West Bengal Board of Secondary Education ( 88% )
                    </div>
                    <div className="w-16 rounded-sm  h-1 mx-4 bg-cold-pink" data-aos="fade-right"></div>
                    <div className={`w-20 h-20 mr-80 rounded-full text-lg font-bold bg-cold-pink ${s.flexCenter}`} data-aos="zoom-in" data-aos-duration="500">
                        WBBSE
                    </div>
                    
                </div>


                <div className="w-1 rounded-sm h-16  bg-cold-pink" data-aos="fade-up"></div>


                <div className={`${s.flexCenter} ml-28`}>
                    <div className={`w-32 h-24  p-4 rounded-xl font-bold bg-cold-pink ${s.flexCenter}`} data-aos="fade-up-right">
                        High School
                    </div>
                    <div className="w-16 rounded-sm  h-1 mx-4 bg-cold-pink" data-aos="fade-right"></div>
                    <div className={`w-20 h-20 rounded-xl font-bold bg-cold-pink ${s.flexCenter}`} data-aos="zoom-in" data-aos-duration="500">
                        <HiBuildingOffice2 className="text-6xl"/>
                    </div>
                    <div className="w-16 rounded-sm  h-1 mx-4 bg-cold-pink" data-aos="fade-left"></div>
                    <div className={`w-60 h-32  p-4 rounded-xl font-bold bg-cold-pink border-4 border-hot-pink ${s.flexCenter}`} data-aos="fade-down-left">
                        Ramakrishna Vivekananda Misson Vidyabhawan, Barrackpore, 2017-2019
                    </div>
                </div>


                <div className="w-1 rounded-sm h-16 bg-cold-pink" data-aos="fade-up"></div>

                <div className={`${s.flexCenter} mr-4`}>
                    <div className={`w-60 h-32  p-4 rounded-xl font-bold bg-cold-pink border-4 border-hot-pink ${s.flexCenter}`} data-aos="flip-down">
                        West Bengal Council of Higher Secondary Education ( 83% )
                    </div>
                    <div className="w-16 rounded-sm  h-1 mx-4 bg-cold-pink" data-aos="fade-right"></div>
                    <div className={`w-20 h-20 mr-80 rounded-full text-lg font-bold bg-cold-pink ${s.flexCenter}`} data-aos="zoom-in" data-aos-duration="500">
                        WBCHSE
                    </div>
                    
                </div>
            
                <div className="w-1 rounded-sm h-16 bg-cold-pink" data-aos="fade-up"></div>

                <div className={`${s.flexCenter} ml-24`}>
                    <div className={`w-36 h-24 p-6 rounded-lg font-bold bg-cold-pink ${s.flexCenter}`} data-aos="fade-up-right">
                        College(B.Tech)
                    </div>
                    <div className="w-16 rounded-sm  h-1 mx-4 bg-cold-pink" data-aos="fade-right"></div>
                    <div className={`w-20 h-20  rounded-lg font-bold bg-cold-pink ${s.flexCenter}`} data-aos="zoom-in" data-aos-duration="500">
                        <MdSchool className="text-6xl"/>
                    </div>
                    <div className="w-16 rounded-sm  h-1 mx-4 bg-cold-pink" data-aos="fade-left"></div>
                    <div className={`w-60 h-32 p-6 rounded-lg font-bold bg-cold-pink border-4 border-hot-pink ${s.flexCenter}`} data-aos="fade-down-left">
                        Academy of Technology, Adisaptagram, 2020-2024
                    </div>
                </div>

                <div className="w-1 rounded-sm h-16 bg-cold-pink" data-aos="fade-up"></div>

                <div className={`${s.flexCenter} mt-4` }>
                    <div className={`w-48 h-20  p-4 rounded-xl font-bold bg-cold-pink border-4 border-hot-pink ${s.flexCenter}`} data-aos="flip-down">
                        9.42-(upto 5th Sem)
                    </div>
                    <div className="w-16 rounded-sm  h-1 mx-4 bg-cold-pink" data-aos="fade-right"></div>
                    <div className={`w-20 h-20 mr-72 rounded-full text-xl font-bold bg-cold-pink ${s.flexCenter}`} data-aos="zoom-in" data-aos-duration="500">
                        CGPA
                    </div>
                </div>
            </div>
    </div>
  )
}
