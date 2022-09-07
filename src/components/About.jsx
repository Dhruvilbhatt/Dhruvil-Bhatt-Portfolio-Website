import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-[#000428] to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white">
            About
          </p>
        </div>

        <p className="text-base sm:text-lg items-center mt-0 sm:mt-10 justify-center">
          Being fascinated by the way in which a mobile app could guide a human even in the most remote area, I developed a strong liking towards technology right from my school days.
          I am a passionate problem solver with a firm belief that technology has immense potential to transform the human life for the better! I have done research internships
          in the domain of plasma tomography, computational finance, high performance computing, and computer vision. I have also worked at HuddleUp as a front-end engineer,
          and have done a summer internship at the Indian Institute of Technology (IIT) - Bombay.
        </p>

        <br />

        <p className="text-base sm:text-lg items-center  justify-center">
          Apart from being a tech enthusiast, I am a fervent drummer. I have deep love for percussion instruments, and an urge to catch to the beat of every song that I listen to!
          I have played drums for the opening performance of Amit Trivedi (Indian singer-composer), and Gajendra Verma (Indian singer). Football is another domain in which I could have
          a mignight discussion, and I have been following LaLiga, EPL, and Champions League keenly since 2012. I've also been a part of the Student Placement Cell at DA-IICT, and
          helped my juniors, seniors and batchmates to get their dream job.  
        </p>
      </div>
    </div>
  );
};

export default About;