import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { HomeIcon } from "@heroicons/react/24/outline";
export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        <HomeIcon className="h-7 w-7 text-neutral-800 cursor-pointer" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <span className="cursor-pointer">
          <FaLinkedin></FaLinkedin>
        </span>
        <span className="cursor-pointer">
          <FaGithub></FaGithub>
        </span>
        <span className="cursor-pointer">
          <FaXTwitter></FaXTwitter>
        </span>
        <span className="cursor-pointer">
          <FaInstagram></FaInstagram>
        </span>
      </div>
    </nav>
  );
};
