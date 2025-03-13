import React from "react";
import { NavLink } from "react-router-dom";

function Foot() {
  return (
    <footer className="bg-black text-white p-10 md:p-16">
      <div className="container mx-auto text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold">
          WE ARE VERY HAPPY <br /> THAT YOU CHOOSE US
        </h1>
        <h5 className="pt-4 text-sm md:text-base">
          Thank you for trusting us for choosing trips, exploring, traveling with relatives <br />
          and friends or for your own experiences.
        </h5>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 md:space-x-20">
          <ul className="text-center md:text-left">
            <li className="text-2xl md:text-3xl pb-2 text-[#FFD979]">Home</li>
            <NavLink to="/about"  className="pb-1.5">About Us</NavLink>
            <li>Booking</li>
          </ul>
          <ul className="text-center md:text-left">
            <li className="text-2xl md:text-3xl pb-2 text-[#FFD979]">Contact Us</li>
            <li className="pb-1.5">0703169545</li>
            <li>contact@vanlang.tour</li>
          </ul>
          <ul className="text-center md:text-left">
            <li className="text-2xl md:text-3xl pb-2 text-[#FFD979]">Follow Us</li>
            <li className="pb-1.5">Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Foot;
