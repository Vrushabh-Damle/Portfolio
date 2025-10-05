import { HERO_CONTENT } from "../constants";
import profile from "../assets/profile.png";
export const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col items-center md:items-center md:justify-center lg:justify-center lg:items-start">
            <h1 className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl flex justify-start">
              Vrushabh Damle
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent flex justify-start">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-4 font-light tracking-tighter flex justify-center items-center">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center ">
            <img
              src={profile}
              alt="profile"
              className="rounded-4xl  mt-3 sm:h-80 sm:mt-3.5 md:h-80 md:mt-3.5 md:ml-7 lg:ml-7"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
