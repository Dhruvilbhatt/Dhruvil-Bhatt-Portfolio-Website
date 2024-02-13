import React from 'react'
import DA from "../assets/portfolio/DA.jpg";
import UCI from "../assets/portfolio/UCI.png";

const customStyle = {
    backgroundColor: "#23252f",
    boxShadow: "0 4px 8px 0 rgb(255,165,0)",
    backdropFilter: "blur( 20px )",
    // webkit-backdrop-filter: "blur( 20px )",
    borderRadius: "4px",
    // border: "1px solid rgba( 255, 255, 255, 0.18 )"
}

function Teaching() {
    return (
        <div
            name="teaching"
            className="w-full bg-gradient-to-b from-[#ADFF2F] to-[#cc14c3] text-white flex flex-col"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-white text-white">
                        Teaching Experience
                    </p>
                    {/* <p className="py-6 text-black text-lg">Check out some of my work right here!</p> */}
                </div>
            </div>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col lg:flex-row w-full items-center justify-between space-x-4">
                <img
                    src={UCI}
                    alt=""
                    className="hidden lg:inline-block w-[20%] rounded-md duration-200 hover:scale-105 cursor-pointer"
                />
                <div style={customStyle} className="p-4 flex flex-col space-y-2">
                    <div className='flex flex-col space-y-1 text-sky-400'>
                        <h1 className='text-2xl'><span className='font-bold'>University of California - Irvine</span>, Irvine, California</h1>
                        <h1 className='text-lg italic'>Teaching Assistant</h1>
                        <h1 className='text-lg'>September 2023 - December 2023</h1>
                    </div>
                    <div>
                        <h1>• Teaching Assistant for the MSWE (Master of Software Engineering) 245P (GUI Programming), and MSWE 250P (Web Programming). </h1>
                        <h1>• MSWE 245P GUI Programming: Exploration of interactive software with substantial graphical user interface elements. Topics include: libraries and frameworks for GUI programming, layout design and alternatives, and event-driven programming.</h1>
                        <h1>• MSWE 250P Web Programming: Exploration of the concepts, terminology, and popular frameworks for developing full-stack web applications. Students develop simple applications using multiple development stacks, and deploy them on the cloud.</h1>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col lg:flex-row w-full items-center justify-between space-x-4">
                <img
                    src={UCI}
                    alt=""
                    className="hidden lg:inline-block w-[20%] rounded-md duration-200 hover:scale-105 cursor-pointer"
                />
                <div style={customStyle} className="p-4 flex flex-col space-y-2">
                    <div className='flex flex-col space-y-1 text-sky-400'>
                        <h1 className='text-2xl'><span className='font-bold'>University of California - Irvine</span>, Irvine, California</h1>
                        <h1 className='text-lg italic'>Teaching Assistant</h1>
                        <h1 className='text-lg'>April 2023 - June 2023</h1>
                    </div>
                    <div>
                        <h1>• Teaching Assistant for the STATS 8 course (Introduction to Biological Statistics).</h1>
                        <h1>• Introductory statistical techniques used to collect and analyze experimental and observational data from health sciences and biology. Includes exploration of data, probability and sampling distributions, statistical inference for means and proportions, linear regression, and analysis of variance.</h1>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col lg:flex-row w-full items-center justify-between space-x-4">
                <img
                    src={DA}
                    alt=""
                    className="hidden lg:inline-block w-[20%] rounded-md duration-200 hover:scale-105 cursor-pointer"
                />
                <div style={customStyle} className="p-4 flex flex-col space-y-2">
                    <div className='flex flex-col space-y-1 text-sky-400'>
                        <h1 className='text-2xl'><span className='font-bold'>DA-IICT</span>, Gandhinagar, India</h1>
                        <h1 className='text-lg italic'>Teaching Assistant</h1>
                        <h1 className='text-lg'>August 2021 - December 2021</h1>
                    </div>
                    <div>
                        <h1>• Teaching Assistant for the course on Computational Finance, which involves formulation of lab assignments, and coding contests based on the concepts of finance for the MSc Data Science batch at DA-IICT.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teaching;