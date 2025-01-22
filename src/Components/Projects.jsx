// import React from 'react'

//import images
import Wedding from "../images/Wedding-app.png";
import Movies from "../images/movies-app.jpg";
import MoviesSearch from "../images/movies-app-search.jpg";
import MoviesDetails from "../images/movies-app-details.jpg";
import Barber from "../images/barber-app.jpg";
import BarberProfile from "../images/barber-app-profile.jpg";
import BarberAdmin from "../images/barber-app-admin.jpg";
import { Link } from "react-router";
function Projects() {
  return (
    <div className="bg-gray-900 md:px-24 px-6 py-6">
      <div className="text-white text-center font-medium text-2xl">
        Projects
      </div>
      <div className="md:flex md:flex-wrap gap-6  ">
        <div className="bg-gray-900 md:w-[48%]  h-96 shadow-lg shadow-teal-500/20 hover:shadow-teal-400/80 rounded my-6">
          <Link to="/wedding-website">
            <div className="h-[70%]">
              <img className="rounded h-[100%]" src={Wedding} alt="" />
            </div>
            <div>
              <p className="flex flex-col justify-center items-center p-3">
                <span className="text-white text-xl">Wedding Website</span>
                <span className="text-gray-400 text-center text-sm">
                  This is a wedding planner website that showcases the different
                  services and different wedding plan packages customers can
                  choose from.
                </span>
              </p>
            </div>
          </Link>
        </div>

        <div className="bg-gray-900 md:w-[48%] h-96 shadow-lg shadow-teal-500/20 hover:shadow-teal-400/80 rounded my-6">
          <Link to="/movies-app">
            <div className="h-[70%] flex justify-evenly ">
              <img className="rounded " src={Movies} alt="" />
              <img className="rounded" src={MoviesSearch} alt="" />
              <img className="rounded" src={MoviesDetails} alt="" />
            </div>
            <p className="flex flex-col justify-center items-center p-3">
              <span className="text-white text-xl">Movies App</span>
              <span className="text-gray-400 text-center text-sm">
                This app allows you to search for movies using movie titles. To
                find out more about a movie you can click on it and you will be
                taken to a movie details screen.
              </span>
            </p>
          </Link>
        </div>

        <div className="gray-900 md:w-[48%] h-96 shadow-lg shadow-teal-500/20 hover:shadow-teal-400/80 rounded my-6">
          <Link to="/barber-booking-app">
            <div className="h-[70%] flex justify-evenly">
              <img className="rounded" src={Barber} alt="" />
              <img className="rounded" src={BarberProfile} alt="" />
              <img className="rounded" src={BarberAdmin} alt="" />
            </div>
            <p className="flex flex-col justify-center items-center p-3">
              <span className="text-white text-xl">
                Barber Appointment Booking App
              </span>
              <span className="text-gray-400 text-center text-sm">
                An app for booking appointments with a barber by selecting date,
                time, and service.
              </span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
