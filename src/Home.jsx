import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import Card from "./components/card";
import Search from "./components/search";

// ✅ Use absolute paths for images inside the `public/` folder
const bannerImage = "/assets/banner/banner2.png";
const readImage = "/assets/buttons/Read more.png";
const monitorImage = "/assets/buttons/Monitor.png";
const internetImage = "/assets/buttons/Internet.png";
const bannerImage4 = "/assets/banner/banner4.png";
const cardImage1 = "/assets/card/card1.png";
const cardImage2 = "/assets/card/card2.png";
const cardImage3 = "/assets/card/card3.png";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-screen flex items-center text-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundAttachment: "scroll",
        }}
      >
        <div className="text-left pl-4 md:pl-10">
          <h1 className="text-4xl md:text-7xl font-bold text-white">Relax with</h1>
          <h1 className="text-4xl md:text-7xl font-bold text-[#FFD979]">Van Lang Tour</h1>
          <NavLink to="/about">
            <img className="pt-10 w-32 md:w-auto" src={readImage} alt="View Page" />
          </NavLink>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-[#EEE1BE] flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 p-4 md:p-9">
        <div className="bg-[#CFB165] flex flex-col md:flex-row items-center p-4 md:p-8 rounded-2xl md:rounded-4xl">
          <img src={monitorImage} alt="Monitor" className="w-16 md:w-auto" />
          <p className="p-2 text-[#FFFFFF] text-lg md:text-2xl text-center md:text-left">
            It’s very easy to order a train ticket online. VLT E-ticket can not be lost or forgotten at home.
          </p>
        </div>
        <div className="bg-[#CFB165] flex flex-col md:flex-row items-center p-4 md:p-8 rounded-2xl md:rounded-4xl">
          <img src={internetImage} alt="Internet" className="w-16 md:w-auto" />
          <p className="p-2 text-[#FFFFFF] text-lg md:text-2xl text-center md:text-left">
            To order a ticket, all you need is internet, a few minutes, and a payment card. Grab bonuses and discounts!
          </p>
        </div>
      </div>

      {/* Popular Packages Section */}
      <div
        className="h-auto md:h-screen"
        style={{
          backgroundImage: `url(${bannerImage4})`,
          backgroundAttachment: "scroll",
        }}
      >
        <Search />
        <div className="pt-10">
          <p className="text-white text-2xl md:text-3xl text-center md:text-left md:pl-70">
            Popular Tour Packages
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row justify-center space-y-4 md:space-y-1 md:space-x-7 p-4 md:pt-15 md:pb-10">
          <Card image={cardImage1} price="$60" title="" name="sài gòn - hà nội" innerName="hà nội" />
          <Card image={cardImage2} price="$30" title="" name="hà nội - đà nẵng" innerName="đà nẵng" />
          <Card image={cardImage3} price="$10" title="" name="bắc ninh - hạ long" innerName="hạ long" />
        </div>
      </div>
    </>
  );
}

export default Home;
