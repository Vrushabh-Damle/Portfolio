import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { HomeIcon } from "@heroicons/react/24/outline";
export const Navbar = () => {
  const handleHomeClick = () => {
    window.location.reload();
  };
  return (
    <nav className="mb-20 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        <HomeIcon
          className="h-7 w-7 text-neutral-800 cursor-pointer"
          onClick={handleHomeClick}
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-neutral-800">
        <span className="cursor-pointer">
          <a
            href="https://www.linkedin.com/in/vrushabh-damle-2a1817216/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-blue-700 transition-colors"
          >
            <FaLinkedin />
          </a>
        </span>
        <span className="cursor-pointer">
          <a
            href="https://github.com/Vrushabh-Damle"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-gray-700 transition-colors"
          >
            <FaGithub />
          </a>
        </span>
        <span className="cursor-pointer">
          <a
            href="https://x.com/vrushabhstwtt"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-black transition-colors"
          >
            <FaXTwitter />
          </a>
        </span>
        <span className="cursor-pointer">
          <a
            href="https://www.instagram.com/vrushabh_damle/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-pink-600 transition-colors"
          >
            <FaInstagram />
          </a>
        </span>
      </div>
    </nav>
  );
};
