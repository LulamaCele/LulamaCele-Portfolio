// import React from 'react';
//import icons
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
function Header() {

  const [active, setActive] = useState(false);

  const openMenu = () => {
    const menu = document.querySelector("#menu");
    const closeBtn = document.querySelector("#closeButton");
    const openBtn = document.querySelector("#openButton");

    if (active === false) {
      menu?.classList.add("opacity-100");
      menu?.classList.add("top-[50px]");
      openBtn?.classList.add("hidden");
      closeBtn?.classList.remove("hidden");
      setActive(true);
    } else if (active === true) {
      menu?.classList.remove("opacity-100");
      menu?.classList.remove("top-[50px]");
      closeBtn?.classList.add("hidden");
      openBtn?.classList.remove("hidden");
      setActive(false);
    }
  };

  return (
    <nav className="py-5 md:px-24 px-6 bg-[#11235A]   md:flex items-center justify-between">
    <div className="flex justify-between items-center">
      <a
        href="/"
        className="text-2xl text-center font-[Poppins] cursor-pointer h-[100%] w-8 bg-cyan-400 hover:bg-cyan-500 text-white  rounded-full"
      >
        LC
      </a>

      <span className="text-3xl cursor-pointer mx-2 md:hidden block">
        <RxHamburgerMenu id="openButton" className="text-white hover:text-cyan-400" 
         onClick={openMenu}
         />
        <IoMdClose
          id="closeButton"
          className="hidden text-white hover:text-red-500"
           onClick={openMenu}
        />
      </span>
    </div>

    <ul
      id="menu"
      className=" bg-[#11235A] text-white rounded-b-2xl shadow-lg shadow-cyan-500/20 md:shadow-none md:flex md:items-center z-1 md:z-auto
    md:static absolute w-full left-0 md:w-auto
    md:py-0 py-4 mt-5 md:mt-0  md:pl-0 pl-7
    md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"
    >
      
      <button className="bg-cyan-400 text-white py-2 px-6 rounded mx-4 hover:bg-cyan-500 duration-500">
        
          Download CV
        
      </button>
    </ul>
  </nav>
  )
}

export default Header