import React from 'react'
import s from '../style'
import { motion  } from 'framer-motion'
import soft from '../assets/soft.png'
import reg from '../assets/reg.png'
import calc from '../assets/calc.png'
import todo from '../assets/todo.png'
import tech from '../assets/tech.png'
import port1 from '../assets/port1.png'
import {BsArrowUpRightSquare} from 'react-icons/bs'

export const Projects = () => {
    return (
        <div>
            <div className={`Projects ${s.flexCenter} text-hot-pink  flex-col my-6`}>
                <div className="my-8 text-white text-4xl font-semibold " data-aos="fade-right">Projects</div>
                <div className={`${s.flexCenter} flex-wrap `}>
                    <motion.div
                        data-aos="flip-left"
                        data-aos-duration="1500"
                        whileHover={{
                            color: '#ff1493',
                            scale: 1.1,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                        }}
                        className={`${s.flexCenter} flex-col text-cold-pink m-10 rounded-2xl w-[450px] h-[550px] border-2 border-hot-pink `}>
                        <img className="h-52 rounded-2xl border-2 border-hot-pink w-[350px] " src={soft} alt="dashboard" />
                        <div className="text-2xl font-semibold my-6">Software Dashboard</div>
                        <div className="text-center text-lg px-10 ">
                            A Dashboard consisting of various data pictorial data representation in forms of graphs and charts.
                        </div>
                        <div className={`${s.flexBetween}`}>
                            <div className={`${s.flexCenter} mr-40 py-20 flex-col`}>
                                <span>Tech-Stacks :-</span>
                                <ul>
                                    <li>ChartJS</li>
                                    <li>React</li>
                                    <li>Javascript</li>
                                    <li>Tailwind CSS</li>
                                    <li></li>
                                </ul>
                            </div>
                            <div className={`${s.flexBetween} p-4 border-2 border-cold-pink rounded-lg font-bold`}>
                                <a href="https://github.com/SlicePoh/software-dashboard.git" target="_blank" rel="noreferrer">
                                    <button className={`w-24 h-10 cursor-pointer`}>Go to git</button>
                                </a>
                                <BsArrowUpRightSquare/>
                            </div>    
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
                            type: "spring",
                            stiffness: 200,
                        }}
                        className={`${s.flexCenter} flex-col text-cold-pink m-10 rounded-2xl w-[450px] h-[550px] border-2 border-hot-pink `}>
                        <img className="h-52 rounded-2xl border-2 border-hot-pink w-[350px] " src={tech} alt="page" />
                        <div className="text-2xl font-semibold my-6">Tech Conference Webpage</div>
                        <div className="text-center text-lg px-10 ">
                            A basic front page for a tech-conference, highly reactive with mobile, laptop and other devices.
                        </div>
                        <div className={`${s.flexBetween}`}>
                            <div className={`${s.flexCenter} mr-40 py-20 flex-col`}>
                                <span>Tech-Stacks :-</span>
                                <ul>
                                    <li>React</li>
                                    <li>Javascript</li>
                                    <li>Tailwind CSS</li>   
                                    <li>Redux</li>
                                </ul>
                            </div>
                            <div className={`${s.flexBetween} p-4 border-2 border-cold-pink rounded-lg font-bold`}>
                                <a href="https://tech-conferenz.netlify.app/" target="_blank" rel="noreferrer">
                                <button className={`w-24 h-10 cursor-pointer`}>Go to site</button>
                                </a>
                                <BsArrowUpRightSquare/>
                            </div>    
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
                            type: "tween",
                            stiffness: 200,
                        }}
                        className={`${s.flexCenter} flex-col text-cold-pink m-10 rounded-2xl w-[450px] h-[550px] border-2 border-hot-pink `}>
                        <img className="h-52 rounded-2xl border-2 border-hot-pink w-[350px] " src={port1} alt="folio" />
                        <div className="text-2xl font-semibold my-6">Portfolio</div>
                        <div className="text-center text-lg px-10 ">
                            An interactive portfolio with smooth animations and transitions made totally by me.
                        </div>
                        <div className={`${s.flexBetween}`}>
                            <div className={`${s.flexCenter} mr-40 py-20 flex-col`}>
                                <span>Tech-Stacks :-</span>
                                <ul>
                                    <li>React</li>
                                    <li>Javascript</li>
                                    <li>Framer Motion</li>
                                    <li>AOS</li>
                                    <li>Tailwind CSS</li>
                                </ul>
                            </div>
                            <div className={`${s.flexBetween} p-4 border-2 border-cold-pink rounded-lg font-bold`}>
                                <a href="https://github.com/SlicePoh/portfolio_shanit.git" target="_blank" rel="noreferrer">
                                <button className={`w-24 h-10 cursor-pointer`}>Go to git</button>
                                </a>
                                <BsArrowUpRightSquare/>
                            </div>
                            
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
                            type: "tween",
                            stiffness: 200,
                        }}
                        className={`${s.flexCenter} flex-col text-cold-pink m-10 rounded-2xl w-[450px] h-[550px] border-2 border-hot-pink `}>
                        <img className="h-52 rounded-2xl border-2 border-hot-pink w-[350px] " src={reg} alt="form" />
                        <div className="text-2xl font-semibold my-6">Student Registration Form</div>
                        <div className="text-center text-lg px-10 ">
                            An interactive portfolio with smooth animations and transitions.
                        </div>
                        <div className={`${s.flexBetween}`}>
                            <div className={`${s.flexCenter} mr-40 py-20 flex-col`}>
                                <span>Tech-Stacks :-</span>
                                <ul>
                                    <li>React</li>
                                    <li>API</li>
                                    <li>CSS</li>
                                    <li>Tailwind CSS</li>
                                    <li>Javascript</li>
                                </ul>
                            </div>
                            <div className={`${s.flexBetween} p-4 border-2 border-cold-pink rounded-lg font-bold`}>
                                <a href="https://student-reg.netlify.app/" target="_blank" rel="noreferrer">
                                <button className={`w-24 h-10 cursor-pointer`}>Go to site</button>
                                </a>
                                <BsArrowUpRightSquare/>
                            </div>
                            
                        </div>
                    </motion.div>
                    <motion.div
                        data-aos="flip-left"
                        data-aos-duration="1500"
                        whileHover={{
                            color: '#ff1493',
                            scale: 1.1,
                        }}
                        transition={{
                            type: "tween",
                            stiffness: 200,
                        }}
                        className={`${s.flexCenter} flex-col text-cold-pink m-10 rounded-2xl w-[450px] h-[550px] border-2 border-hot-pink `}>
                        <img className="h-52 rounded-2xl border-2 border-hot-pink w-[350px] " src={todo} alt="list" />
                        <div className="text-2xl font-semibold my-6">To-Do List</div>
                        <div className="text-center text-lg px-10 ">
                            A Todo list where we can add tasks to be done , check them and remove them accordingly.
                        </div>
                        <div className={`${s.flexBetween}`}>
                                <div className={`${s.flexCenter} mr-40 py-20 flex-col`}>
                                    <span>Tech-Stacks :-</span>
                                    <ul>
                                        <li>Javascript</li>
                                        <li>React</li>
                                        <li>CSS</li>
                                        <li>Tailwind CSS</li>
                                        <li>HTML</li>
                                    </ul>
                                </div>
                            <div className={`${s.flexBetween} p-4 border-2 border-cold-pink rounded-lg font-bold`}>
                                <a href="https://taskmemo.netlify.app/" target="_blank" rel="noreferrer">
                                <button className={`w-24 h-10 cursor-pointer`}>Go to site</button>
                                </a>
                                <BsArrowUpRightSquare/>
                            </div>
                            
                        </div>
                    </motion.div>
                    <motion.div
                        data-aos="flip-left"
                        data-aos-duration="1500"
                        whileHover={{
                            color: '#ff1493',
                            scale: 1.1,
                        }}
                        transition={{
                            type: "tween",
                            stiffness: 200,
                        }}
                        className={`${s.flexCenter} flex-col text-cold-pink m-10 rounded-2xl w-[450px] h-[550px] border-2 border-hot-pink `}>
                        <img className="h-52 rounded-2xl border-2 border-hot-pink w-[350px] " src={calc} alt="calculator" />
                        <div className="text-2xl font-semibold my-6">Calculator</div>
                        <div className="text-center text-lg px-10 ">
                            A basic calculator with normal features of mathematics.
                        </div>
                        <div className={`${s.flexBetween}`}>
                            <div className={`${s.flexCenter} mr-40 py-20 flex-col`}>
                                <span>Tech-Stacks :-</span>
                                <ul>
                                    <li>React</li>
                                    <li>Tailwind CSS</li>
                                    <li>HTML</li>
                                    <li>Javascript</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                            <div className={`${s.flexBetween} p-4 border-2 border-cold-pink rounded-lg font-bold`}>
                                <a href="https://basickalculator.netlify.app/" target="_blank" rel="noreferrer">
                                    <button className={`w-24 h-10 cursor-pointer`}>Go to site</button>
                                </a>
                                <BsArrowUpRightSquare/>
                            </div>
                            
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
