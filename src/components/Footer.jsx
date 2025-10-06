import { FaStar } from "react-icons/fa";
import { motion } from "motion/react";

export const Footer = () => {
  return (
    <div>
      <div className="flex justify-center ">
        <a
          href="https://github.com/Vrushabh-Damle/Portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center rounded-full bg-neutral-800 p-3 text-white transition-colors group mt-4"
        >
          <FaStar className="text-xl" />

          {/* Tooltip */}
          <span className="absolute bottom-12 left-1/2 -translate-x-1/2 scale-0 rounded-md bg-neutral-800 px-3 py-1 text-sm text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
            Star this repo
          </span>
        </a>
      </div>
      <div className="flex justify-center">
        <div className="mb-6 mt-4">
          <i className="text-xl font-light text-neutral-600 ">
            {" "}
            Made with ❤️ by Vrushabh Damle
          </i>
        </div>
      </div>
    </div>
  );
};
