import React from 'react'
import plasma from "../assets/portfolio/plasmaImage.png";
import synaptics from "../assets/portfolio/Synaptics.png";
import CompFin from "../assets/portfolio/CompFin.jpg";
import lms from "../assets/portfolio/LMS.png";
import IITB from "../assets/portfolio/IITB.png";
import HuddleUp from "../assets/portfolio/HuddleUp.png";

const customStyle = {
    backgroundColor: "#23252f",
    boxShadow: "0 4px 8px 0 rgb(255,165,0)",
    backdropFilter: "blur( 20px )",
    // webkit-backdrop-filter: "blur( 20px )",
    borderRadius: "4px",
    // border: "1px solid rgba( 255, 255, 255, 0.18 )"
}

function CustomPF() {
    return (
        <div
            name="experience"
            className="w-full text-white flex flex-col"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-white text-white">
                        Experience
                    </p>
                    {/* <p className="py-6 text-black text-lg">Check out some of my work right here!</p> */}
                </div>
            </div>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col lg:flex-row w-full items-center justify-between">
                <img
                    src={synaptics}
                    alt=""
                    className="hidden lg:inline-block w-[200px] rounded-md duration-200 hover:scale-105 cursor-pointer mr-4"
                />
                <div style={customStyle} className="w-full p-4 flex flex-col space-y-2">
                    <div className='flex flex-col space-y-1 text-sky-400'>
                        <h1 className='text-2xl'><span className='font-bold'>Synaptics</span>, Irvine, California</h1>
                        <h1 className='text-lg italic'>Audio Software Intern</h1>
                        <h1 className='text-lg'>June 2023 - September 2023</h1>
                    </div>
                    <div>
                        <h1>• Engineered an Azure-based calling application integrating Microsoft Graph API v1.0 and MSAL (Microsoft Authentication Library) with Synaptics' headsets for audio testing. </h1>
                        <h1>• Integrated speech recognition feature into the Azure calling application, enabling automatic generation of speech-to-text transcripts for seamless headset debugging purposes.</h1>
                        <h1>• Created a software application on host side to parse UART (universal asynchronous receiver transmitter) data formatted in binary HCI format. Implemented extraction of debug messages from received data.</h1>
                        <h1>• Achieved clean production-level RTOS image file for gdaero SDK leveraging static analysis tools.</h1>
                        <h1>• Honed corporate communication and interpersonal skills: Owned project delivery by pitching to the CEO as well as Japanese counterparts and clients for Synaptics.</h1>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col lg:flex-row w-full items-center justify-between">
                <img
                    src={lms}
                    alt=""
                    className="hidden lg:inline-block w-[200px] rounded-md duration-200 hover:scale-105 cursor-pointer mr-4"
                />
                <div style={customStyle} className="w-full p-4 flex flex-col space-y-2">
                    <div className='flex flex-col space-y-1 text-sky-400'>
                        <h1 className='text-2xl'><span className='font-bold'>HuddleUp</span>, New York, NY</h1>
                        <h1 className='text-lg italic'>Software Engineer Intern</h1>
                        <h1 className='text-lg'>March 2022 - June 2022</h1>
                    </div>
                    <div>
                        <h1>• Collaborated with frontend team to build a custom LMS (Learning Management System).</h1>
                        <h1>• Companies can use this portal to educate their employees by adding their customized teaching modules, customizable workspaces, relevant course channels and quizzes.</h1>
                        <h1>• Executed web pages for adding new channels, challenges, and quizzes to a specific workspace, which can be utilized by the companies to impart most relevant skillset to its employees. </h1>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col lg:flex-row w-full items-center justify-between">
                <img
                    src={plasma}
                    alt=""
                    className="hidden lg:inline-block w-[200px] rounded-md duration-200 hover:scale-105 cursor-pointer mr-4"
                />
                <div style={customStyle} className="w-full p-4 flex flex-col space-y-2">
                    <div className='flex flex-col space-y-1 text-sky-400'>
                        <h1 className='text-2xl'><span className='font-bold'>DA-IICT</span> in association with the <span className='font-bold'>Institute for Plasma Research (IPR)</span>, Gandhinagar, India</h1>
                        <h1 className='text-lg italic'>Research Intern</h1>
                        <h1 className='text-lg'>March 2022 - June 2022</h1>
                    </div>
                    <div>
                        <h1>• Worked as a research intern to generate the synthetic images of plasma.</h1>
                        <h1>• The process of generating plasma images computationally can replace the conventional method of plasma image generation (using scientific apparatus) due to significant economic and logistic benefits.</h1>
                        <h1>• The proposed methodology can generate synthetic plasma images having the feature statistics of actual images and can be used to create large data-sets for ML assisted plasma imaging diagnostics.</h1>
                        <h1>• The devised serial code has been further optimized into a parallel program (using OpenMP API) to generate a synthetic image of plasma in less than 0.65 seconds (which is 21 times faster than the serial algorithm).</h1>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col lg:flex-row w-full items-center justify-between ">
                <img
                    src={CompFin}
                    alt=""
                    className="hidden lg:inline-block w-[200px] rounded-md duration-200 hover:scale-105 cursor-pointer mr-4"
                />
                <div style={customStyle} className="w-full p-4 flex flex-col space-y-2">
                    <div className='flex flex-col space-y-1 text-sky-400'>
                        <h1 className='text-2xl'><span className='font-bold '>DA-IICT</span>, Gandhinagar, India</h1>
                        <h1 className='text-lg italic'>Research Intern</h1>
                        <h1 className='text-lg'>January 2022 - June 2022</h1>
                    </div>
                    <div>
                        <h1>• Curated the largest open-source dataset (comprising of 7805 datapoint, which is 4 times larger than the previously available largest public dataset) for Corporate Credit Rating with Financial Ratios <a
                            href="https://www.kaggle.com/datasets/kirtandelwadia/corporate-credit-rating-with-financial-ratios"
                            className="text-yellow-300 duration-[200ms] underline"
                            target="_blank"
                            rel="noreferrer"
                        >(Dataset Link)</a>.</h1>
                        <h1>• Applied ML techniques on our custom dataset to formulate time-independent, simple, and human-interpretable rules which could be used by corporate firms to attain investment grade rating with a mean precision value of 95%.</h1>
                        <h1>• Boosted the interpretability of the results by applying Explainable AI technique (Decision Tree) for prediction and visualization purpose.</h1>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col lg:flex-row w-full items-center justify-between">
                <img
                    src={IITB}
                    alt=""
                    className="hidden lg:inline-block w-[200px] rounded-md duration-200 hover:scale-105 cursor-pointer mr-4"
                />
                <div style={customStyle} className="w-full p-4 flex flex-col space-y-2">
                    <div className='flex flex-col space-y-1 text-sky-400'>
                        <h1 className='text-2xl'><span className='font-bold'>Indian Institute of Technology (IIT) – Bombay</span> (Remote)</h1>
                        <h1 className='text-lg italic'>Summer Intern</h1>
                        <h1 className='text-lg'>April 2020 - June 2020</h1>
                    </div>
                    <div>
                        <h1>• Worked with the content migration team of Drupal CMS.</h1>
                        <h1>• Built custom plugins for content migration from Drupal 6 and 7 to Drupal 8 <a
                            href="https://static.fossee.in/fossee/fellowship2020/Fellowship-Reports/Web-Development/Web-Development-DhruvilBhatt-FSF-2020.pdf"
                            className="text-yellow-300 duration-[200ms] underline"
                            target="_blank"
                            rel="noreferrer"
                        >(Fellowship Report)</a>.</h1>
                        <h1>• Explored Drush command line and Drupal UI to migrate Drupal websites.</h1>
                        <h1>• Migrated <span className='italic'>hss.iitb.ac.in</span> from Drupal 7 to 8 without any data loss, using custom-made plugins and other modules.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomPF