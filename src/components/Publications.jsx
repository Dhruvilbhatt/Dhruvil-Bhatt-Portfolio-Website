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

function Publications() {
    return (
        <div
            name="publications"
            className="w-full text-white flex flex-col"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-white text-white">
                        Publications
                    </p>
                    {/* <p className="py-6 text-black text-lg">Check out some of my work right here!</p> */}
                </div>
            </div>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col lg:flex-row w-full items-center justify-between space-x-4">
                <div style={customStyle} className="p-4 flex flex-col space-y-2">
                    <div className='flex flex-col space-y-1 text-sky-400'>
                        <h1 className='text-2xl font-bold'>Understanding and Attaining an Investment Grade Rating in the Age of Explainable AI</h1>
                        <h1 className='text-lg'><span className='italic'>Explaiable AI, Machine Learning, Decision Tree, Computational Finance, Python</span></h1>
                    </div>
                    <div>
                        <h1>Ravi Makwana, Dhruvil Bhatt, Kirtan Delwadia, Agam Shah, and Bhaskar Chaudhury, “Understanding and Attaining an Investment Grade Rating in the Age of Explainable AI” published on SSRN's top 10 research papers globally (in terms of downloads) <a
                            href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4163283"
                            className="text-yellow-300 duration-[200ms] underline"
                            target="_blank"
                            rel="noreferrer"
                        >(Link to paper)</a>.</h1>

                    </div>
                </div>
                {/* <img
                    src={jobSearch}
                    alt=""
                    className="hidden lg:inline-block w-[30%] rounded-md duration-200 hover:scale-105 cursor-pointer"
                /> */}
            </div>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col lg:flex-row w-full items-center justify-between space-x-4">
                <div style={customStyle} className="p-4 flex flex-col space-y-2">
                    <div className='flex flex-col space-y-1 text-sky-400'>
                        <h1 className='text-2xl font-bold'>Parallel algorithm for synthetic image generation with application to tokamak plasma diagnostics</h1>
                        <h1 className='text-lg'><span className='italic'>High Performance Computing, Parallel Computing, Computational Plasma, C/C++, OpenMP, MPI, Python</span></h1>
                    </div>
                    <div>
                        <h1>Kirtan Delwadia, Dhruvil Bhatt, Shishir Purohit, and Bhaskar Chaudhury, “Parallel algorithm for synthetic image generation with application to tokamak plasma diagnostics,” published by “Concurrency and Computation: Practice and Experience” journal <a
                            href="https://onlinelibrary.wiley.com/doi/10.1002/cpe.7217"
                            className="text-yellow-300 duration-[200ms] underline"
                            target="_blank"
                            rel="noreferrer"
                        >(Link to paper)</a>.</h1>
                    </div>
                </div>
                {/* <img
                    src={doclab}
                    alt=""
                    className="hidden lg:inline-block w-[30%] rounded-md duration-200 hover:scale-105 cursor-pointer"
                /> */}
            </div>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col lg:flex-row w-full items-center justify-between space-x-4">
                <div style={customStyle} className="p-4 flex flex-col space-y-2">
                    <div className='flex flex-col space-y-1 text-sky-400'>
                        <h1 className='text-2xl font-bold'>Computational Modeling Of Noisy Plasma Images Applicable To Tokamak Imaging Diagnostics For Visible And X-Ray Emissions</h1>
                        <h1 className='text-lg'><span className='italic'>Computational Plasma, Computational Physics, Tomography, C/C++, Python</span></h1>
                    </div>
                    <div>
                        <h1>Dhruvil Bhatt, Kirtan Delwadia, Shishir Purohit, and Bhaskar Chaudhury, “Computational Modeling Of Noisy Plasma Images Applicable To Tokamak Imaging Diagnostics For Visible And X-Ray Emissions,” accepted at “9th International Conference on Mathematics and Computing (ICMC-2023)” conference <a
                            href="https://link.springer.com/chapter/10.1007/978-981-99-3080-7_13"
                            className="text-yellow-300 duration-[200ms] underline"
                            target="_blank"
                            rel="noreferrer"
                        >(Link to paper)</a>.</h1>
                    </div>
                </div>
                {/* <img
                    src={chatApp}
                    alt=""
                    className="hidden lg:inline-block w-[40%] rounded-md duration-200 hover:scale-105 cursor-pointer"
                /> */}
            </div>
        </div>
    )
}

export default Publications;