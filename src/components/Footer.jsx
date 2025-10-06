import { AiFillStar } from "react-icons/ai";
import { motion } from "motion/react";
export const Footer = () => {
  return (
    <div className="pb-4">
      <div className="flex flex-wrap justify-center text-neutral-800 my-5 text-center text-4xl ">
        {" "}
        <div className="bg-neutral-900 text-neutral-50 p-3 rounded-4xl">
          <AiFillStar className="w-8 h-8" />
        </div>
      </div>
      <div className="text-center text-neutral-600 font-light text-xl mt-5">
        <i>Made with ❤️ by Vrushabh Damle</i>
      </div>
    </div>
  );
};
