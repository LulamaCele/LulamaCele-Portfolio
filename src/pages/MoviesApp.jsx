import React from "react";
import Header from "../Components/Header";
import { FaGithub } from "react-icons/fa";
import MoviesAppLogo from "../images/mocies-app-logo.png";
import Movies from "../images/movies-app.jpg";
import MoviesSearch from "../images/movies-app-search.jpg";
import MoviesDetails from "../images/movies-app-details.jpg";
import Footer from "../Components/Footer";

export default function MoviesWebsite() {
  return (
    <div>
      <Header />
      <div className="bg-gray-900 md:px-24 px-6 py-6">
        <div className="">
          <img className="m-auto w-20 h-20" src={MoviesAppLogo} alt="" />
          <p className="text-center text-2xl text-white py-6">Movies App</p>
        </div>
        <div className="flex justify-center items-center mb-6">
          <a href="https://expo.dev/accounts/lulama/projects/movie_app/builds/2dfe7ba3-3fb8-49db-97dd-6b2cc70011ab">
          <button className="py-2 px-6 rounded mx-4 text-white bg-teal-500 hover:bg-teal-400 duration-200">Download On Android</button>
          </a>
          <a href="https://github.com/LulamaCele/movie_app" target="blank">
            <FaGithub className="text-4xl text-teal-500  hover:text-teal-400 duration-500"/>
          </a>
        </div>
        <div className=" flex justify-evenly ">
          <img className="rounded w-[20%]" src={Movies} alt="" />
          <img className="rounded w-[20%]" src={MoviesSearch} alt="" />
          <img className="rounded w-[20%]" src={MoviesDetails} alt="" />
        </div>
        <div className="py-12 px-12">
          <p className="text-center text-lg text-white pb-3">Little backstory</p>
          <p className="text-gray-400">
            I was initially intending on making a movies website not an app. So
            as I worked on the website and I had issues with getting the movie
            details based on the movie id and getting that information to the
            movie details page. So I decided to just try making an app since
            React is very similar to React-Native and this is how this app came
            to existance.
          </p>
        </div>
        <div className="px-12">
          <p className="text-center text-lg pb-3 text-white">About the app</p>
          <p className="text-gray-400">
            This is a React-Native app I created with the intent of learning
            more about React/React-Native and how to use API's. The app consumes
            'TheMovieDb' API which contains all the movie details and images.
            <br />
            Users are able to:
          </p>
          <ul className="list-disc pl-6 text-gray-400">
              <li>View movies</li>
              <li>Go to the next page of movies</li>
              <li>Click on movie to know more about it</li>
              <li>Search for movies using movie title</li>
            </ul>
        </div>
        {/* <div className="py-3">
          <p className="text-lg text-white">Download app:</p>
          <a
            className="text-cyan-500 pl-3"
            href="https://expo.dev/accounts/lulama/projects/movie_app/builds/2dfe7ba3-3fb8-49db-97dd-6b2cc70011ab"
          >
            Movies App
          </a>
          <p className="text-white">Or Scan QR Code:</p>
          <img className="w-40" src={MoviesAppQRCode} alt="" />
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
