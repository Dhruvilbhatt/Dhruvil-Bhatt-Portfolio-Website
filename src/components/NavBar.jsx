import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 2,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-40">
      <div>
        <h1 className="text-3xl galaxyPhone:text-5xl font-signature ml-2">Dhruvil Bhatt</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-red-700 duration-[250ms]"
          >
            <Link to={link} smooth duration={800}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-gray-200 duration-[200ms]"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={800}
              >
                {link}
              </Link>
            </li>
          ))}
          <div className="flex space-x-4 cursor-pointer">
            <a
              href="https://www.linkedin.com/in/dhruvil-bhatt-b8b682177/"
              className="text-gray-400 hover:text-gray-200 duration-[200ms]"
              target="_blank"
              rel="noreferrer"
            >
              <>
                <FaLinkedin size={40} />
              </>
            </a>
            <a
              href="https://github.com/Dhruvilbhatt"
              className="text-gray-400 hover:text-gray-200 duration-[200ms]"
              target="_blank"
              rel="noreferrer"
            >
              <>
                <FaGithub size={40} />
              </>
            </a>
            <a
              href="mailto:bhattdb@uci.edu"
              className="text-gray-400 hover:text-gray-200 duration-[200ms]"
              target="_blank"
              rel="noreferrer"
            >
              <>
                <HiOutlineMail size={40} />
              </>
            </a>
            <a
              href="/Resume_Dhruvil_Bhatt.pdf"
              className="text-gray-400 hover:text-gray-200 duration-[200ms]"
              target="_blank"
              rel="noreferrer"
            >
              <>
                <BsFillPersonLinesFill size={40} />
              </>
            </a>
          </div>
        </ul>
      )}
    </div>

  );
};

export default NavBar;