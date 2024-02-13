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

            I'm a dynamic computer science professional with a Master's degree from the University of California, Irvine, and a Bachelor's from DA-IICT, India. With a track record of success in software development, data analysis, and machine learning, I thrive on solving complex problems and delivering innovative solutions.
            My diverse experiences include internships at Synaptics Incorporated (CA), HuddleUp (NY), Indian Institute of Technology (IIT) - Bombay, where I engineered Azure-based applications, worked as a full-stack engineer, served as an open-source contributor, and led teams in data curation projects. Proficient in AWS (certified Cloud Practitioner), Azure, Java, Python, and more, I stay updated with the latest technologies to drive continuous improvement.
            Outside of work, I'm passionate about research, contributing to publications in computational finance, parallel computing, and computational plasma. I'm driven by a commitment to push the boundaries of technology and make a positive impact through collaborative projects.
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