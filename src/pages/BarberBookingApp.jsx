import React from "react";
import Header from "../Components/Header";
import { FaGithub } from "react-icons/fa";
import BarberLogo from "../images/barber-app-logo.png";
import Barber from "../images/barber-app.jpg";
import BarberProfile from "../images/barber-app-profile.jpg";
import BarberAdmin from "../images/barber-app-admin.jpg";
import Footer from '../Components/Footer';

export default function BarberBookingApp() {
  return (
    <div>
      <Header />
      <div className="bg-gray-900 md:px-24 px-6 py-6">
        <div className="">
          <img className="m-auto w-20 h-20" src={BarberLogo} alt="" />
          <p className="text-center text-2xl text-white py-6">The Barber App</p>
        </div>
        <div className="flex justify-center items-center mb-6">
          <a href="https://expo.dev/accounts/lulama/projects/TheBarber/builds/2df017e9-c5c4-4fcd-a9b2-710dcf11c39c">
          <button className="py-2 px-6 rounded mx-4 text-white bg-teal-500 hover:bg-teal-400 duration-200">Download On Android</button>
          </a>
          <a href="https://github.com/LulamaCele/TheBaberApp" target="blank">
            <FaGithub className="text-4xl text-teal-500  hover:text-teal-400 duration-500"/>
          </a>
        </div>
        <div className=" flex justify-evenly ">
          <img className="rounded w-[20%]" src={Barber} alt="" />
          <img className="rounded w-[20%]" src={BarberProfile} alt="" />
          <img className="rounded w-[20%]" src={BarberAdmin} alt="" />
        </div>
        <div className="py-12 px-12">
          <div className="text-center text-lg text-white pb-3">About</div>
          <p className="text-gray-400">
            So this an appointment booking app for a barber. The intent with
            this app was to learn more about data storage and manipulating data,
            login system, as well as state management using the context hook.<br />
            <br />
            For the signup/login system I used Firebase Authentication which
            went well considering it was my first time using it alone. For the
            data storage I used Fibase Firestore. This enabled me to build in
            CRUD (create, read, update, & delete) features.<br />
            <br />
            For the calendar I used 'react-native-calendars' which enabled me to
            show calendar so users can select a date, which is then stored in
            firestore. To view the appintments I use the 'agenda' part of the
            'react-native-calendars' and I retrieve the apponitment data and put
            it into the 'agenda' component. <br />
            <br />
            For managing states i used the Context hook. this can in handy as I
            needed the data in differnt components and if I didn't have it
            stored in a central location I would have to nest the data in from
            one component to another and that would have been really messy. This
            also allowed me to easily retrieve data from anywhere in the
            project.
          </p>
        </div>
        {/* <div className="py-3">
          <p className="text-lg text-white">Download app:</p>
          <a
            className="text-cyan-500 pl-3"
            href="https://expo.dev/accounts/lulama/projects/TheBarber/builds/2df017e9-c5c4-4fcd-a9b2-710dcf11c39c"
          >
            Barber App
          </a>
          <p className="text-white">Or Scan QR Code:</p>
          <img className="w-40" src={BarberAppQRCode} alt="" />
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
