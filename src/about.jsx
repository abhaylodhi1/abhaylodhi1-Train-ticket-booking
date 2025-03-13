import React from "react";
import "./index.css";
import trainBanner from "../src/assets/banner/train.png";
import viewPageButton from "../src/assets/buttons/View page.png";
import about1 from "../src/assets/banner/about1.png";
import about2 from "../src/assets/banner/about2.png";

function About() {
  return (
    <>
      <div
        className="bg-cover bg-center min-h-screen flex items-center justify-center text-center relative px-4"
        style={{
          backgroundImage: `url(${trainBanner})`,
          backgroundAttachment: "scroll",
        }}
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white">Welcome to</h1>
          <h1 className="text-4xl md:text-6xl font-bold text-[#FFD979]">Van Lang Tour</h1>
          <button>
            <img className="pt-6 md:pt-10" src={viewPageButton} alt="View page" />
          </button>
        </div>
      </div>

      <div className="p-6 md:p-12 bg-black"></div>
      <div className="flex flex-col md:flex-row items-center justify-center bg-black py-6 px-4 md:px-24">
        <img className="w-full md:w-1/2" src={about1} alt="About Image" />
        <div className="text-left bg-black md:px-12 py-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#FFD979]">Our Story</h2>
          <p className="text-lg md:text-2xl text-white mt-4">
            At Van Lang Tour, we believe that every journey holds the promise of adventure, discovery, and unforgettable memories. Established with a passion for travel and a commitment to seamless experiences, we are your trusted partner in exploring the world through train travel.
          </p>
        </div>
      </div>

      <div className="p-6 md:p-12 bg-black"></div>
      <div className="flex flex-col md:flex-row items-center justify-center bg-black py-6 px-4 md:px-24">
        <div className="text-left bg-black md:px-12 py-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#FFD979]">Who We Are</h2>
          <p className="text-lg md:text-2xl text-white mt-4">
            Van Lang Tour is a dedicated online platform designed to revolutionize the way you embark on train journeys. Whether you're a first-time traveler, a seasoned explorer, or planning a memorable trip with family and friends, we're here to make your travel dreams a reality.
          </p>
        </div>
        <img className="w-full md:w-1/2" src={about2} alt="About Image" />
      </div>

      <div className="p-6 md:p-12 bg-black"></div>
      <div className="bg-black px-4 md:px-24 py-6">
        <h2 className="text-3xl md:text-5xl font-bold text-[#FFD979] text-center">Our Mission</h2>
        <p className="text-lg md:text-2xl text-white mt-4 text-center md:text-left">
          Our mission is simple: to provide you with a hassle-free and enjoyable travel experience. We understand that the journey itself is an integral part of your adventure, and that's why we're committed to offering a wide selection of train routes, impeccable service, and competitive prices.
        </p>
      </div>
    </>
  );
}

export default About;
