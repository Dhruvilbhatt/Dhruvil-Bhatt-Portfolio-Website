import React from 'react'
import chatApp from "../assets/portfolio/chat app.jpg";
import worldCuisine from "../assets/portfolio/worldCuisine.jpg";
import jobSearch from "../assets/portfolio/jobSearch.jpg";
import doclab from "../assets/portfolio/DocLab.png";

const customStyle = {
    backgroundColor: "#23252f",
    boxShadow: "0 4px 8px 0 rgb(255,0,0)",
    backdropFilter: "blur( 20px )",
    // webkit-backdrop-filter: "blur( 20px )",
    borderRadius: "4px",
    // border: "1px solid rgba( 255, 255, 255, 0.18 )"
}

function Projects() {
    return (
        <div
            name="projects"
            className="w-full text-white flex flex-col"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-white text-white">
                        Projects
                    </p>
                    {/* <p className="py-6 text-black text-lg">Check out some of my work right here!</p> */}
                </div>
            </div>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col lg:flex-row w-full items-center justify-between space-x-4">
                <div style={customStyle} className="p-4 flex flex-col space-y-2">
                    <div className='flex flex-col space-y-1 text-sky-400'>
                        <h1 className='text-2xl font-bold'>DocLab - Work Smarter, Collaborate Better</h1>
                        <h1 className='text-lg'>Tech Stack: <span className='italic'>AWS EC2, React.js, Node.js, Python, Flask, Quill.js, Socket.io, MongoDB</span></h1>
                    </div>
                    <div>
                        <h1>• Worked in a collaborative environment to develop DocLab, an innovative AI-powered document editor featuring auto text correction, paraphrasing, summarization, collaboration, and video calling support.</h1>
                        <h1>• Consolidated video calling and screen-sharing capabilities, ensuring a low video/audio latency of 300ms.</h1>
                        <h1>• Deployed the Flask-based AI model on AWS EC2 for scalable and reliable access to DocLab's AI features.</h1>
                        <h1>• Designed RESTful Web Services and APIs with Axios for seamless frontend-backend communication and MongoDB CRUD operations, ensuring fast page load time (&lt; 2 seconds).</h1>
                    </div>
                </div>
                <img
                    src={doclab}
                    alt=""
                    className="hidden lg:inline-block w-[200px] rounded-md duration-200 hover:scale-105 cursor-pointer"
                />
            </div>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col lg:flex-row w-full items-center justify-between space-x-4">
                <div style={customStyle} className="p-4 flex flex-col space-y-2">
                    <div className='flex flex-col space-y-1 text-sky-400'>
                        <h1 className='text-2xl font-bold'>Real-Time Chat App</h1>
                        <h1 className='text-lg'>Tech Stack: <span className='italic'>React, Node.js, MongoDB, Socket.io, CSS</span></h1>
                    </div>
                    <div>
                        <h1>• Coded a real time web app for chatting, synced with Google account. Users can converse with multiple contacts, and can see whether another person is currently logged in or not.</h1>
                        <h1>• Accomplished real-time communication using WebSockets and Node.js.</h1>
                        <h1>• Designed front-end of the web app leveraging Material UI components, and React.</h1>
                        <h1>• Handled user authentication and storage of user, conversation, and message information through MongoDB.</h1>
                    </div>
                </div>
                <img
                    src={chatApp}
                    alt=""
                    className="hidden lg:inline-block w-[200px] rounded-md duration-200 hover:scale-105 cursor-pointer"
                />
            </div>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col lg:flex-row w-full items-center justify-between space-x-4">
                <div style={customStyle} className="p-4 flex flex-col space-y-2">
                    <div className='flex flex-col space-y-1 text-sky-400'>
                        <h1 className='text-2xl font-bold'>Job Search Portal</h1>
                        <h1 className='text-lg'>Tech Stack: <span className='italic'>Next.js, MongoDB, Tailwind CSS</span></h1>
                    </div>
                    <div>
                        <h1>• Launched a responsive social media platform, allowing users to post job seeking/opening information.</h1>
                        <h1>• Accomplished theme toggle between 2 themes, and utilized Google API for the latest news posting feature.</h1>
                        <h1>• Executed MongoDB CRUD operations using Mongoose, and utilized Recoil to manage state of application and improve performance <a
                            href="https://job-search-website.vercel.app/home"
                            className="text-yellow-300 duration-[200ms] underline"
                            target="_blank"
                            rel="noreferrer"
                        >(Link to web app)</a>.</h1>
                    </div>
                </div>
                <img
                    src={jobSearch}
                    alt=""
                    className="hidden lg:inline-block w-[200px] rounded-md duration-200 hover:scale-105 cursor-pointer"
                />
            </div>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col lg:flex-row w-full items-center justify-between space-x-4">
                <div style={customStyle} className="p-4 flex flex-col space-y-2">
                    <div className='flex flex-col space-y-1 text-sky-400'>
                        <h1 className='text-2xl font-bold'>Hierarchical Clustering of World Cuisines</h1>
                        <h1 className='text-lg'>Tech Stack: <span className='italic'>Python, Pattern Mining, Postman API</span></h1>
                    </div>
                    <div>
                        <h1>• Characterized the unique features that are central to 25 different world cuisines in an attempt to establish inter-relatedness of these world cuisines (using FP-Growth Algorithm).</h1>
                        <h1>• Generated 3 dendrograms (for distinct distance metrics) to visualize the interrelationship between different world cuisines using the concept of Hierarchical Clustering.</h1>
                    </div>
                </div>
                <img
                    src={worldCuisine}
                    alt=""
                    className="hidden lg:inline-block w-[200px] rounded-md duration-200 hover:scale-105 cursor-pointer"
                />
            </div>
        </div>
    )
}

export default Projects