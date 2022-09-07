import React from "react";
import plasma from "../assets/portfolio/plasmaImage.png";
import HPC from "../assets/portfolio/HPC.jpg";
import CompFin from "../assets/portfolio/CompFin.jpg";
import CV from "../assets/portfolio/CV.jpeg";
import IITB from "../assets/portfolio/IITB.png";
import HuddleUp from "../assets/portfolio/HuddleUp.png";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";
import Modal from '@mui/material/Modal';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   // border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: plasma,
    },
    {
      id: 2,
      src: HPC,
    },
    {
      id: 3,
      src: CompFin,
    },
    {
      id: 4,
      src: CV,
    },
    {
      id: 5,
      src: IITB,
    },
    {
      id: 6,
      src: HuddleUp,
    },
  ];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-[#ff5f6d] to-black w-full text-white md:h-screen"
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      // className="items-centre"
      >
        <div className="absolute top-[40%] left-[50%] -ml-[450px] mr-[350px] p-4 bg-white border-gray-600 rounded-xl">
          <div className="flex flex-col space-y-1 text-base font-bold">
            <h1 className="items-center justify-center">• Curated the largest open‑source dataset for Corporate Credit Rating with Financial Ratios</h1>
            <h1 className="items-center justify-center">• Devised a set of time‑independent, simple if‑else rules based on financial ratios to help corporate firms attain investment
              grade rating</h1>
            <h1 className="items-center justify-center">• Explainable AI techniques have been used for prediction and visualisation purpose to offer better interpretability of results</h1>
          </div>
        </div>
      </Modal>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black text-black">
            Portfolio
          </p>
          <p className="py-6 text-black text-lg">Check out some of my work right here!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200" onClick={handleOpen}>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 cursor-pointer"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;