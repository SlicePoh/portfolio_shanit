import React from 'react'
import s from '../style'
import { motion } from 'framer-motion'
import soft from '../assets/soft.png'
import qnect from '../assets/qnect.png'
import xpns from '../assets/xpns.png'
import keep from '../assets/keep.png'
import vewrite from '../assets/vewrite.png'
import port1 from '../assets/port1.png'
import { BsArrowUpRightSquare } from 'react-icons/bs'

export const Projects = () => {
    return (
        <div>
            <div className={`tail ${s.flexCenter} text-hot-pink flex-col my-6`}>
                <div className="head my-8 text-white text-xl md:text-4xl lg:text-6xl font-semibold " data-aos="fade-right">Projects</div>
                <div className={`${s.flexCenter} flex-wrap text-xs md:text-base `}>
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
                        className={`${s.flexCenter} flex-col text-cold-pink m-4 md:m-10 rounded-2xl w-[270px] md:w-[450px] h-[350px] md:h-[550px] border-2 border-hot-pink `}>
                        <img className="h-32 md:h-52 rounded-2xl object-cover border-2 border-hot-pink w-[200px] md:w-[350px] " src={qnect} alt="page" />
                        <div className="text-lg md:2xl font-semibold my-4 md:my-6">Qnect</div>
                        <div className="text-center md:text-lg px-10 ">
                         A <strong className='text-hot-pink'>QNA</strong> platform for college students to connect with their <strong className='text-hot-pink'>peers</strong>, <strong className='text-hot-pink'>seniors</strong>, and <strong className='text-hot-pink'>alumni</strong>.
                        </div>
                        <div className={`${s.flexBetween}`}>
                            <div className={`${s.flexCenter} mr-16 md:mr-28 py-10 md:py-20 flex-col`}>
                                <span className="font-semibold mb-2">Tech-Stacks :-</span>
                                <ul>
                                    <li>React</li>
                                    <li>Nodejs</li>
                                    <li>Expressjs</li>
                                    <li>Mongodb</li>
                                    <li>Tailwind CSS</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className={`${s.flexCenter} text-center p-3 border-2 font-light border-cold-pink rounded-lg`}>
                                    <i>On progress</i>
                                </div>
                                <div className={`${s.flexBetween} p-3 border-2 border-cold-pink rounded-lg font-bold`}>
                                    <a href="https://github.com/SlicePoh/qnect.git" target="_blank" rel="noreferrer">
                                        <button className={`w-10 md:w-24 h-6 md:h-10 cursor-pointer`}>Github Link</button>
                                    </a>
                                    <BsArrowUpRightSquare />
                                </div>
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
                            duration: 0.1
                        }}
                        className={`${s.flexCenter} flex-col text-cold-pink m-4 md:m-10 rounded-2xl w-[270px] md:w-[450px] h-[350px] md:h-[550px] border-2 border-hot-pink `}>
                        <img className="h-32 md:h-52 rounded-2xl border-2 border-hot-pink w-[200px] md:w-[350px] " src={vewrite} alt="page" />
                        <div className="text-lg md:2xl font-semibold my-4 md:my-6">Vewrite</div>
                        <div className="text-center md:text-lg px-10 ">
                        A site to give content writers an exclusive platform where they can <strong className='text-hot-pink'>write</strong>, <strong className='text-hot-pink'>edit</strong>, <strong className='text-hot-pink'>store</strong>, and <strong className='text-hot-pink'>showcase</strong> their work.
                        </div>
                        <div className={`${s.flexBetween}`}>
                            <div className={`${s.flexCenter} mr-16 md:mr-28 py-10 md:py-20 flex-col`}>
                                <span className="font-semibold mb-2">Tech-Stacks :-</span>
                                <ul>
                                    <li>Firebase</li>
                                    <li>Miro</li>
                                    <li>Figma</li>
                                    <li>React</li>
                                    <li>Tailwind CSS</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className={`${s.flexBetween} p-3 border-2 border-cold-pink rounded-lg font-bold`}>
                                    <a href="https://vewrite.vercel.app/" target="_blank" rel="noreferrer">
                                        <button className={`w-10 md:w-24 h-6 md:h-10 cursor-pointer`}>Live Link</button>
                                    </a>
                                    <BsArrowUpRightSquare />
                                </div>
                                <div className={`${s.flexBetween} p-3 border-2 border-cold-pink rounded-lg font-bold`}>
                                    <a href="https://github.com/SlicePoh/Vewrite.git" target="_blank" rel="noreferrer">
                                        <button className={`w-10 md:w-24 h-6 md:h-10 cursor-pointer`}>Github Link</button>
                                    </a>
                                    <BsArrowUpRightSquare />
                                </div>
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
                            duration: 0.1
                        }}
                        className={`${s.flexCenter} flex-col text-cold-pink m-4 md:m-10 rounded-2xl w-[270px] md:w-[450px] h-[350px] md:h-[550px] border-2 border-hot-pink `}>
                        <img className="h-32 md:h-52 rounded-2xl border-2 border-hot-pink w-[200px] md:w-[350px] " src={keep} alt="page" />
                        <div className="text-lg md:2xl font-semibold my-4 md:my-6">Keep</div>
                        <div className="text-center md:text-lg px-10 ">
                            A <strong className='text-hot-pink'>full stack</strong> web app for taking notes and storing them in an attractive UI that is <strong className='text-hot-pink'>fully responsive</strong> on any device.
                        </div>
                        <div className={`${s.flexBetween}`}>
                            <div className={`${s.flexCenter} mr-16 md:mr-28 py-10 md:py-20 flex-col`}>
                                <span className="font-semibold mb-2">Tech-Stacks :-</span>
                                <ul>
                                    <li>React</li>
                                    <li>Nodejs</li>
                                    <li>Expressjs</li>
                                    <li>Mongodb</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className={`${s.flexBetween} p-3 border-2 border-cold-pink rounded-lg font-bold`}>
                                    <a href="https://keep-slice.netlify.app/" target="_blank" rel="noreferrer">
                                        <button className={`w-10 md:w-24 h-6 md:h-10 cursor-pointer`}>Live Link</button>
                                    </a>
                                    <BsArrowUpRightSquare />
                                </div>
                                <div className={`${s.flexBetween} p-3 border-2 border-cold-pink rounded-lg font-bold`}>
                                    <a href="https://github.com/SlicePoh/crud" target="_blank" rel="noreferrer">
                                        <button className={`w-10 md:w-24 h-6 md:h-10 cursor-pointer`}>Github Link</button>
                                    </a>
                                    <BsArrowUpRightSquare />
                                </div>
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
                            duration: 0.1
                        }}
                        className={`${s.flexCenter} flex-col text-cold-pink m-4 md:m-10 rounded-2xl w-[270px] md:w-[450px] h-[350px] md:h-[550px] border-2 border-hot-pink `}>
                        <img className="h-32 md:h-52 rounded-2xl border-2 border-hot-pink w-[200px] md:w-[350px] " src={xpns} alt="calculator" />
                        <div className="text-lg md:2xl font-semibold my-4 md:my-6">X-pence</div>
                        <div className="text-center md:text-lg px-10 ">
                            An expense tracker app that stores and display your transactions in a proper way.
                        </div>
                        <div className={`${s.flexBetween}`}>
                            <div className={`${s.flexCenter} mr-16 md:mr-28 py-10 md:py-20 flex-col`}>
                                <span className="font-semibold mb-2">Tech-Stacks :-</span>
                                <ul>
                                    <li>Redux</li>
                                    <li>Tailwind CSS</li>
                                    <li>Moment js</li>
                                    <li>Toastify</li>
                                    <li>react-modal</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className={`${s.flexBetween} p-3 border-2 border-cold-pink rounded-lg font-bold`}>
                                    <a href="https://x-pence-slice.netlify.app/" target="_blank" rel="noreferrer">
                                        <button className={`w-10 md:w-24 h-6 md:h-10 cursor-pointer`}>Go to site</button>
                                    </a>
                                    <BsArrowUpRightSquare />
                                </div>
                                <div className={`${s.flexBetween} p-3 border-2 border-cold-pink rounded-lg font-bold`}>
                                    <a href="https://github.com/SlicePoh/expense_tracker.git" target="_blank" rel="noreferrer">
                                        <button className={`w-10 md:w-24 h-6 md:h-10 cursor-pointer`}>Github Link</button>
                                    </a>
                                    <BsArrowUpRightSquare />
                                </div>
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
                            duration: 0.1
                        }}
                        className={`${s.flexCenter} flex-col text-cold-pink m-4 md:m-10 rounded-2xl w-[270px] md:w-[450px] h-[350px] md:h-[550px] border-2 border-hot-pink `}>
                        <img className="h-32 md:h-52 rounded-2xl border-2 border-hot-pink w-[200px] md:w-[350px] " src={soft} alt="dashboard" />
                        <div className="text-lg md:2xl font-semibold my-4 md:my-6">Software Dashboard</div>
                        <div className="text-center md:text-lg px-10 ">
                            A Dashboard consisting of various data pictorial data representation in forms of graphs and charts.
                        </div>
                        <div className={`${s.flexBetween}`}>
                            <div className={`${s.flexCenter} mr-16 md:mr-28 py-10 md:py-20 flex-col`}>
                                <span className="font-semibold mb-2">Tech-Stacks :-</span>
                                <ul>
                                    <li>ChartJS</li>
                                    <li>React</li>
                                    <li>Framer Motion</li>
                                    <li>Javascript</li>
                                    <li>Tailwind CSS</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className={`${s.flexBetween} p-3 border-2 border-cold-pink rounded-lg font-bold`}>
                                    <a href="https://github.com/SlicePoh/software-dashboard.git" target="_blank" rel="noreferrer">
                                   
                                        <button className={`w-10 md:w-24 h-6 md:h-10 cursor-pointer`}>Live Link</button>
                                    </a>
                                    <BsArrowUpRightSquare />
                                </div>
                                <div className={`${s.flexBetween} p-3 border-2 border-cold-pink rounded-lg font-bold`}>
                                    <a href="https://github.com/SlicePoh/software-dashboard.git" target="_blank" rel="noreferrer">
                                        <button className={`w-10 md:w-24 h-6 md:h-10 cursor-pointer`}>Github Link</button>
                                    </a>
                                    <BsArrowUpRightSquare />
                                </div>
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
                            duration: 0.1
                        }}
                        className={`${s.flexCenter} flex-col text-cold-pink m-4 md:m-10 rounded-2xl w-[270px] md:w-[450px] h-[350px] md:h-[550px] border-2 border-hot-pink `}>
                        <img className="h-32 md:h-52 rounded-2xl border-2 border-hot-pink w-[200px] md:w-[350px] " src={port1} alt="folio" />
                        <div className="text-lg md:2xl font-semibold my-4 md:my-6">Portfolio</div>
                        <div className="text-center md:text-lg px-10 ">
                            An interactive portfolio with smooth animations and transitions made totally by me.
                        </div>
                        <div className={`${s.flexBetween}`}>
                            <div className={`${s.flexCenter} mr-16 md:mr-28 py-10 md:py-20 flex-col`}>
                                <span className="font-semibold mb-2">Tech-Stacks :-</span>
                                <ul>
                                    <li>React</li>
                                    <li>Email JS</li>
                                    <li>Framer Motion</li>
                                    <li>AOS</li>
                                    <li>Toastify</li>
                                </ul>
                            </div>
                            <div className={`${s.flexBetween} p-4 border-2 border-cold-pink rounded-lg font-bold`}>
                                <a href="https://github.com/SlicePoh/portfolio_shanit.git" target="_blank" rel="noreferrer">
                                    <button className={`w-10 md:w-24 h-6 md:h-10 cursor-pointer`}>Github</button>
                                </a>
                                <BsArrowUpRightSquare />
                            </div>

                        </div>
                    </motion.div>
                   
                </div>
            </div>
        </div>
    )
}
