import { HERO_CONTENT } from "../constants";
import profile from "../assets/profile.png";
import { motion } from "motion/react";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
export const Hero = () => {
  return (
    <div className="lg:mb-35 ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start md:justify-center md:items-center lg:justify-start lg:items-start ">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl text-neutral-800 "
            >
              Vrushabh Damle
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-400 via-slate-700 to-purple-700 bg-clip-text text-4xl tracking-tight text-transparent flex justify-center items-center "
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-4  tracking-tight font-light text-neutral-700 text-xl "
            >
              {HERO_CONTENT}
            </motion.p>
            <div className=" max-w-xl py-2 tracking-tight flex justify-start items-start text-neutral-700  text-2xl">
              dwrushabh@gmail.com
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <div className="flex justify-start items-start sm:justify-center sm:items-center md:justify-center md:items-center lg:justify-end lg:items-end ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              src={profile}
              alt="profile"
              className="rounded-4xl  mt-3 sm:h-80 sm:mt-3.5 md:h-80 md:mt-3.5  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
