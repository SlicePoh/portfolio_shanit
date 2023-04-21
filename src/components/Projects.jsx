import React from 'react'
import s from '../style'
import soft from '../assets/soft.png'
import reg from '../assets/reg.png'
import calc from '../assets/calc.png'
import todo from '../assets/todo.png'
import tech from '../assets/tech.png'
export const Projects = () => {
  return (
    <div>
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
                </div>
    </div>
  )
}
