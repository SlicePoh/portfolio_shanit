import React,{useState} from 'react'
import mypic from '../assets/mypic.png'
import s from '../style'
import { motion } from "framer-motion";
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Education } from './Education'
const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  };
export const Home = () => {
    const [isAnimating,setIsAnimating]=useState(false);
    const [anime,setAnime]=useState(false);
    return (
        <div className={` bg-slate-900 p-10`}>
            <div className={` w-[150px] h-[150px] ${s.flexCenter} mx-auto overflow-hidden bg-trans rounded-3xl `} >
                <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="item stroke-2 line stroke-white overflow-visible w-24  "
                >
                    <motion.path
                        d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                        variants={icon}
                        initial={"visible"
                        }
                        onClick={()=>{
                            setAnime(!anime);
                        }}
                        animate={{
                            rotate: -90,
                            opacity: anime? 1 : 0,
                            pathLength: anime? 1 : 0,
                            fill: anime? "rgba(255, 255, 255, 1)": "rgba(255, 255, 255, 0)"
                        }}
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
                    />
                </motion.svg>
            </div>
            <motion.div className={`Shanti ${s.flexCenter} bg-white`}></motion.div>
            <div className={`${s.flexCenter} text-center overflow-hidden  h-[800px] text-8xl md:text:3xl text-white font-extrabold`}>
                Scroll to read the next part
            </div>
          
            <div className={`${s.flexCenter} flex-col wrapper mb-40`}>
                <div className="text-8xl relative tracking-wide text-[#0e3742] w-full text-center ">Heyyy</div>
                <div className="glow-text my-20 text-slate-600  text-[100px] font-normal tracking-wide "><span>I</span>m<span>Shanit</span></div>
                <div className={`p-10 ${s.flexCenter} flex-col`} >
                    <motion.img
                        initial={{x:-1000}} 
                        onScroll={{
                            x: 200
                        }}
                        animate={{
                            x: isAnimating? 500 : -500,
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
            {/* <div className={`Education ${s.flexCenter} flex-col`}>
                <div className="my-8 text-white text-4xl font-semibold ">
                    Educational Qualification...
                </div>
                <div className={`${s.flexCenter} ml-32`}>
                    <div className={`w-28 h-24 mt-20 p-4 rounded-lg font-bold bg-slate-200 ${s.flexCenter}`} data-aos="fade-up-right">
                        School
                    </div>
                    <div className="w-16 rounded-sm mt-16 h-1 mx-4 bg-white" data-aos="fade-right"></div>
                    <div className={`w-20 h-20 mt-20 rounded-lg font-bold bg-slate-200 ${s.flexCenter}`} data-aos="zoom-in" data-aos-duration="500">
                        <FaSchool className="text-6xl"/>
                    </div>
                    <div className="w-16 rounded-sm mt-16 h-1 mx-4 bg-white" data-aos="fade-left"></div>
                    <div className={`w-60 h-32 mt-20 p-4 rounded-lg font-bold bg-slate-200 border-4 border-hot-pink ${s.flexCenter}`} data-aos="fade-down-left">
                        Gopal Govinda Academy, Barrackpore Misson 2005-2017
                    </div>
                </div>


                <div className="w-1 rounded-sm h-16  bg-white" data-aos="fade-up"></div>


                <div className={`${s.flexCenter} mr-4` }>
                    <div className={`w-60 h-32  p-4 rounded-xl font-bold bg-slate-200 border-4 border-hot-pink ${s.flexCenter}`} data-aos="flip-down">
                        West Bengal Board of Secondary Education ( 88% )
                    </div>
                    <div className="w-16 rounded-sm  h-1 mx-4 bg-white" data-aos="fade-right"></div>
                    <div className={`w-20 h-20 mr-80 rounded-full text-lg font-bold bg-slate-200 ${s.flexCenter}`} data-aos="zoom-in" data-aos-duration="500">
                        WBBSE
                    </div>
                    
                </div>


                <div className="w-1 rounded-sm h-16  bg-white" data-aos="fade-up"></div>


                <div className={`${s.flexCenter} ml-28`}>
                    <div className={`w-32 h-24  p-4 rounded-xl font-bold bg-slate-200 ${s.flexCenter}`} data-aos="fade-up-right">
                        High School
                    </div>
                    <div className="w-16 rounded-sm  h-1 mx-4 bg-white" data-aos="fade-right"></div>
                    <div className={`w-20 h-20 rounded-full font-bold bg-slate-200 ${s.flexCenter}`} data-aos="zoom-in" data-aos-duration="500">
                        <HiBuildingOffice2 className="text-6xl"/>
                    </div>
                    <div className="w-16 rounded-sm  h-1 mx-4 bg-white" data-aos="fade-left"></div>
                    <div className={`w-60 h-32  p-4 rounded-xl font-bold bg-slate-200 border-4 border-hot-pink ${s.flexCenter}`} data-aos="fade-down-left">
                        Ramakrishna Vivekananda Misson Vidyabhawan, Barrackpore, 2017-2019
                    </div>
                </div>


                <div className="w-1 rounded-sm h-16 bg-white" data-aos="fade-up"></div>

                <div className={`${s.flexCenter} mr-4`}>
                    <div className={`w-60 h-32  p-4 rounded-xl font-bold bg-slate-200 border-4 border-hot-pink ${s.flexCenter}`} data-aos="flip-down">
                        West Bengal Council of Higher Secondary Education ( 83% )
                    </div>
                    <div className="w-16 rounded-sm  h-1 mx-4 bg-white" data-aos="fade-right"></div>
                    <div className={`w-20 h-20 mr-80 rounded-full text-lg font-bold bg-slate-200 ${s.flexCenter}`} data-aos="zoom-in" data-aos-duration="500">
                        WBCHSE
                    </div>
                    
                </div>
            
                <div className="w-1 rounded-sm h-16 bg-white" data-aos="fade-up"></div>

                <div className={`${s.flexCenter} ml-24`}>
                    <div className={`w-36 h-24 p-6 rounded-lg font-bold bg-slate-200 ${s.flexCenter}`} data-aos="fade-up-right">
                        College(B.Tech)
                    </div>
                    <div className="w-16 rounded-sm  h-1 mx-4 bg-white" data-aos="fade-right"></div>
                    <div className={`w-20 h-20  rounded-lg font-bold bg-slate-200 ${s.flexCenter}`} data-aos="zoom-in" data-aos-duration="500">
                        <MdSchool className="text-6xl"/>
                    </div>
                    <div className="w-16 rounded-sm  h-1 mx-4 bg-white" data-aos="fade-left"></div>
                    <div className={`w-60 h-32 p-6 rounded-lg font-bold bg-slate-200 border-4 border-hot-pink ${s.flexCenter}`} data-aos="fade-down-left">
                        Academy of Technology, Adisaptagram, 2020-2024
                    </div>
                </div>

                <div className="w-1 rounded-sm h-16 bg-white" data-aos="fade-up"></div>

                <div className={`${s.flexCenter} mt-4` }>
                    <div className={`w-48 h-20  p-4 rounded-xl font-bold bg-slate-200 border-4 border-hot-pink ${s.flexCenter}`} data-aos="flip-down">
                        9.42-(upto 5th Sem)
                    </div>
                    <div className="w-16 rounded-sm  h-1 mx-4 bg-white" data-aos="fade-right"></div>
                    <div className={`w-20 h-20 mr-72 rounded-full text-xl font-bold bg-slate-200 ${s.flexCenter}`} data-aos="zoom-in" data-aos-duration="500">
                        CGPA
                    </div>
                </div>
            </div>
            <div className={`Skills ${s.flexCenter} text-cold-pink  flex-col my-6`}>

                    <div className="my-8 text-white text-4xl font-semibold " data-aos="fade-left">Skills</div>

                    <div className={`${s.flexCenter} flex-wrap my-4`}>
                        <motion.div className={`m-2 p-10 w-80 h-[420px] border-4 border-cold-pink hover:border-hot-pink hover:text-hot-pink rounded-xl flex justify-center flex-col  `}
                            data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1500"

                            whileHover={{
                                rotate: 10,
                                scale: 1.01
                            }}
                            transition={{
                                type: "tween",
                                stiffness: 200
                            }}
                        >
                            <div className={`${s.flexCenter} my-6 text-4xl font-bold`}>
                                <RiImageEditFill className="mx-4"/>
                                <div>Frontend</div>
                            </div>

                            <div className={`${s.flexBetween}`}>
                                <div >HTML5</div>
                                <FaHtml5 className="text-xl my-2" />
                            </div>
                            <div className={`${s.flexBetween}`}>
                                <div>CSS3</div>
                                <FaCss3Alt className="text-xl my-2" />
                            </div>
                            <div className={`${s.flexBetween}`}>
                                <div>Javascript</div>
                                <TbBrandJavascript className="text-xl my-2" />
                            </div>
                            <div className={`${s.flexBetween}`}>
                                <div>React js</div>
                                <FaReact className="text-xl my-2"/>
                            </div>
                            <div className={`${s.flexBetween}`}>
                                <div>Bootstrap</div>
                                <FaBootstrap className="text-xl my-2" />
                            </div>
                            <div className={`${s.flexBetween}`}>
                                <div>Tailwind CSS</div>
                                <SiTailwindcss className="text-xl my-2"/>
                            </div>
                            <div className={`${s.flexBetween}`}>
                                <div>React Native</div>
                                <TbBrandReactNative className="text-xl my-2"/>
                            </div>
                        </motion.div>
                        <motion.div className={`m-2 p-10 w-80 h-[420px] border-4 border-cold-pink hover:border-hot-pink hover:text-hot-pink rounded-xl flex justify-between flex-col  `}
                            data-aos="flip-up"
                            data-aos-duration="1000"

                            whileHover={{
                                rotate: 10,
                                scale: 1.01
                            }}
                            transition={{
                                type: "tween",
                                stiffness: 200
                            }}
                        >
                            <div className={`${s.flexCenter} my-6 text-4xl  font-bold`}>
                                <MdStorage className="mx-4"/>
                                <div>Backend</div>
                            </div>

                            <div className={`${s.flexBetween}`}>
                                <div>Node js</div>
                                <FaNodeJs className="text-xl my-2"/>
                            </div>
                            <div className={`${s.flexBetween}`}>
                                <div>Mongo DB</div>
                                <TbBrandMongodb className="text-xl my-2" />
                            </div>
                            <div className={`${s.flexBetween}`}>
                                <div>Express js</div>
                                <SiExpress className="text-xl my-2" />
                            </div>
                            <div className={`${s.flexBetween}`}>
                                <div>SQL</div>
                                <TbSql className="text-xl my-2" />
                            </div>
                            <div className={`${s.flexBetween}`}>
                                <div>Java</div>
                                <FaJava className="text-xl my-2"/>
                            </div>
                        </motion.div>
                        <motion.div className={`m-2 p-10 w-80 h-[420px] border-4 border-cold-pink hover:border-hot-pink hover:text-hot-pink rounded-xl flex justify-center flex-col  `} 
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1500"

                            whileHover={{
                                rotate: 10,
                                scale: 1.01
                            }}
                            transition={{
                                type: "tween",
                                stiffness: 200
                            }}
                        >
                            <div className={`${s.flexCenter} my-6 text-4xl font-bold`}>
                                <BsTools className="m-4"/>
                                <div>Tools</div>
                            </div>
                            
                            <div className={`${s.flexBetween}`}>
                                <div>Figma</div>
                                <FaFigma className="text-xl my-2" />
                            </div>
                            <div className={`${s.flexBetween}`}>
                                <div>Canva</div>
                                <SiCanva className="text-xl my-2" />
                            </div>
                            <div className={`${s.flexBetween}`}>
                                <div>Framer Motion</div>
                                <SiFramer className="text-xl my-2" />
                            </div>
                            <div className={`${s.flexBetween}`}>
                                <div>Git</div>
                                <BsGit className="text-xl my-2" />
                            </div>
                            <div className={`${s.flexBetween}`}>
                                <div>VS Code</div>
                                <TbBrandVscode className="text-xl my-2" />
                            </div>
                                
                        </motion.div>
                    </div>
            </div>
            <div className={`Projects ${s.flexCenter} text-cold-pink  flex-col my-6`}>
                    <div className="my-8 text-white text-4xl font-semibold " data-aos="fade-right">Projects</div>
                    <div className={`${s.flexCenter} flex-wrap `}>
                        <div className={`${s.flexCenter} flex-col text-cold-pink m-10 rounded-2xl w-[450px] h-[550px] border-2 border-hot-pink `}>
                            <img className="h-52 rounded-2xl w-[350px] " src={soft} alt="dashboard" />
                            <div className="text-2xl font-semibold ">Software Dashboard</div>
                            <div className={`${s.flexCenter} flex-col`}>
                                <span>Tech-Stacks :-</span>
                                <ul>
                                    <li>ReactJS</li>
                                    <li>Javascript</li>
                                    <li>Tailwind CSS</li>
                                    <li>ChartJS</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${s.flexCenter} flex-col text-cold-pink m-10 rounded-2xl w-[450px] h-[550px] border-2 border-hot-pink `}>
                            <img className="h-52 rounded-2xl w-[350px] " src={tech} alt="page" />
                            <div className="text-2xl font-semibold ">Tech Conference Webpage</div>
                            <div className={`${s.flexCenter} flex-col`}>
                                <span>Tech-Stacks :-</span>
                                <ul>
                                    <li>React</li>
                                    <li>Javascript</li>
                                    <li></li>
                                    <li>Tailwind CSS</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${s.flexCenter} flex-col text-cold-pink m-10 rounded-2xl w-[450px] h-[550px] border-2 border-hot-pink `}>
                            <img className="h-52 rounded-2xl w-[350px] " src={calc} alt="calculator" />
                            <div className="text-2xl font-semibold ">Calculator</div>
                            <div className={`${s.flexCenter} flex-col`}>
                                <span>Tech-Stacks :-</span>
                                <ul>
                                    <li>React</li>
                                    <li>Javascript</li>
                                    <li></li>
                                    <li>Tailwind CSS</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${s.flexCenter} flex-col text-cold-pink m-10 rounded-2xl w-[450px] h-[550px] border-2 border-hot-pink `}>
                            <img className="h-52 rounded-2xl w-[350px] " src={reg} alt="form" />
                            <div className="text-2xl font-semibold ">Student Registration Form</div>
                            <div className={`${s.flexCenter} flex-col`}>
                                <span>Tech-Stacks :-</span>
                                <ul>
                                    <li>React</li>
                                    <li>Javascript</li>
                                    <li></li>
                                    <li>Tailwind CSS</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${s.flexCenter} flex-col text-cold-pink m-10 rounded-2xl w-[450px] h-[550px] border-2 border-hot-pink `}>
                            <img className="h-52 rounded-2xl w-[350px] " src={todo} alt="list" />
                            <div className="text-2xl font-semibold ">To-Do List</div>
                            <div className={`${s.flexCenter} flex-col`}>
                                <span>Tech-Stacks :-</span>
                                <ul>
                                    <li>React</li>
                                    <li>Javascript</li>
                                    <li></li>
                                    <li>Tailwind CSS</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${s.flexStart} m-10 rounded-2xl w-[450px] h-[550px] border-2 border-hot-pink `}></div>
                    </div>
            </div> */}
            
        </div>
    )
}
