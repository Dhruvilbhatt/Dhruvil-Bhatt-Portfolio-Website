import React from "react";
import HeroImage from "../assets/Image_Website.jpg";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-full py-16 w-full bg-gradient-to-b from-[#004e92] to-[#000428]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white !leading-[3.5rem] mt-4">
            Hey there! This is Dhruvil Bhatt
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
            I am currently a graduate student at the University of California, Irvine pursuing a masters degree in Computer Science. I attained my BTech degree in ICT with minors in Computational Science from DA-IICT,
            India during 2018 - 2022.
          </p>

          {/* <div>
            <Link
              to="portfolio"
              smooth
              duration={800}
              className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div> */}
        </div>

        {/* <div className="">
          <img
            src={HeroImage}
            alt="my profile"
            className="md:mx-auto md:w-1/2 md:rounded-xl md:hover:scale-105 md:duration-200 md:cursor-pointer"
          />
        </div> */}
        <div className="ml-5 -mt-2 md:mt-0">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-[200px] lg:w-[280px] object-contain hover:scale-105 cursor-pointer duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;