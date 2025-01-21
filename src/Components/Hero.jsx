// import React from 'react';
//import world icon/s
import { BiWorld } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaWhatsappSquare } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import MyPic from "../images/dp2.jpg";

function Hero() {
  return (
    <div className="bg-gray-900 md:px-24  px-6 py-6 flex flex-col items-center justify-center md:grid md:grid-cols-2 transition-all ease-in duration-500">
      <div className="py-16">
        <div className="flex items-center gap-3">
          <p className="text-white text-2xl">Hello World,</p>
          <div>
            <BiWorld className="text-teal-400 text-4xl rounded-full shadow-xl shadow-teal-500/50" />
          </div>
        </div>
        <div className="flex items-center mb-4 gap-3">
          <div className="w-[50px] h-[3px] bg-teal-500" />
          <div className="text-3xl font-medium text-white hover:text-4xl duration-500">
            I'm <span className="text-teal-500">Lulama Cele.</span>
          </div>
          <div className="w-[50px] h-[3px] bg-teal-500" />
        </div>
        <div className="text-gray-400 mb-4">
          I'm a front-end Web developer | App developer who enjoys creating
          smartphone apps and websites. I like taking on new projects as they
          are an opportunity to learn new skills. One of my goals to learn new
          skills so I can be a better developer who can make meaningful
          contributions to future projects and help clients.
        </div>
        <div className="mb-12">
          <a href="#contact">
            <button className="bg-teal-500 py-2 px-6 rounded text-white hover:bg-teal-400 duration-500">
              Contact
            </button>
          </a>
        </div>
        <div className="my-4 flex gap-3">
          <a href="https://github.com/LulamaCele" target="blank">
            <FaGithub className="text-3xl text-teal-500 hover:text-teal-400 duration-500" />
          </a>
        </div>
        <div className="animate-bounce mt-12 text-3xl">
          <FaArrowCircleDown className="text-white" />
        </div>
      </div>
      <div className="flex justify-center order-first md:order-last">
        <img src={MyPic} className="rounded-full w-[60%] md:mb-16" alt="" />
      </div>
    </div>
  );
}

export default Hero;
