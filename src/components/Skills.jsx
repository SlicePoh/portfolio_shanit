import React from "react";
import s from "../style";
import {FaReact, FaBootstrap, FaCss3Alt, FaHtml5, FaJava, FaNodeJs, FaFigma} from "react-icons/fa"
import { MdStorage,} from "react-icons/md"
import {BsGit, BsTools} from "react-icons/bs"
import {TbBrandReactNative, TbBrandJavascript, TbBrandMongodb, TbSql, TbBrandVscode} from "react-icons/tb"
import {SiTailwindcss, SiCanva, SiExpress, SiFramer,SiDocker } from "react-icons/si"
import {RiImageEditFill} from "react-icons/ri"
import { motion } from "framer-motion";
export const Skills = () => {
  return (
    <div>
      <div className={`tail ${s.flexCenter} text-cold-pink  flex-col my-6`}>
        <div
          className="head my-8 text-white text-xl md:text-4xl lg:text-6xl font-semibold "
          data-aos="fade-left"
        >
          Skills
        </div>

        <div className={`${s.flexCenter} w-5/6 flex-wrap my-4 text-sm md:text-base`}>
          <motion.div
            className={`m-2 p-4 md:p-10 w-72 md:w-80 h-80 md:h-[420px] border-4 border-cold-pink hover:border-hot-pink hover:text-hot-pink rounded-xl flex justify-center flex-col `}
            data-aos="zoom-out-right"
            data-aos-duration="1500"
            whileHover={{
              rotate: 10,
              scale: 1.01,
            }}
            transition={{
              type: "tween",
              stiffness: 200,
            }}
          >
            <div className={`${s.flexCenter} my-6 text-2xl md:text-4xl font-bold`}>
              <RiImageEditFill className="mx-2 md:mx-4" />
              <div>Frontend</div>
            </div>

            <div className={`${s.flexBetween}`}>
              <div>HTML5</div>
              <FaHtml5 className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>CSS3</div>
              <FaCss3Alt className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>Javascript</div>
              <TbBrandJavascript className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>React js</div>
              <FaReact className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>Bootstrap</div>
              <FaBootstrap className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>Tailwind CSS</div>
              <SiTailwindcss className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>React Native</div>
              <TbBrandReactNative className="text-lg md:text-xl my-1 md:my-2" />
            </div>
          </motion.div>
          <motion.div
            className={`m-2 p-4 md:p-10 w-72 md:w-80 h-80 md:h-[420px] border-4 border-cold-pink hover:border-hot-pink hover:text-hot-pink rounded-xl flex justify-between flex-col `}
            data-aos="zoom-out"
            data-aos-duration="1500"
            whileHover={{
              rotate: 10,
              scale: 1.01,
            }}
          >
            <div className={`${s.flexCenter} my-6 text-2xl md:text-4xl  font-bold`}>
              <MdStorage className="mx-2 md:mx-4" />
              <div>Backend</div>
            </div>

            <div className={`${s.flexBetween}`}>
              <div>Node js</div>
              <FaNodeJs className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>Mongo DB</div>
              <TbBrandMongodb className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>Express js</div>
              <SiExpress className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>SQL</div>
              <TbSql className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>Java</div>
              <FaJava className="text-lg md:text-xl my-1 md:my-2" />
            </div>
          </motion.div>
          <motion.div
            className={`m-2 p-4 md:p-10 w-72 md:w-80 h-80 md:h-[420px] border-4 border-cold-pink hover:border-hot-pink hover:text-hot-pink rounded-xl flex justify-center flex-col  `}
            data-aos="zoom-out-left"
            data-aos-duration="1500"
            whileHover={{
              rotate: 10,
              scale: 1.01,
            }}
          >
            <div className={`${s.flexCenter} my-6 text-4xl font-bold`}>
              <BsTools className="m-2 md:m-4" />
              <div>Tools</div>
            </div>

            <div className={`${s.flexBetween}`}>
              <div>Figma</div>
              <FaFigma className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>Canva</div>
              <SiCanva className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>Docker</div>
              <SiDocker className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>Framer Motion</div>
              <SiFramer className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>Git</div>
              <BsGit className="text-lg md:text-xl my-1 md:my-2" />
            </div>
            <div className={`${s.flexBetween}`}>
              <div>VS Code</div>
              <TbBrandVscode className="text-lg md:text-xl my-1 md:my-2" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
