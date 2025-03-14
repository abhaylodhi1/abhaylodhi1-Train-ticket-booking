import React from "react";
import "./index.css";

function Main() {
  return (
    <>
      <div
        className="bg-[url('/assets/banner/train.png')] bg-cover bg-center h-screen flex items-center justify-center text-center"
      >
        <div>
          <h1 className="text-4xl sm:text-7xl font-bold text-white">
            Welcome to  
          </h1>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#FFD979]">
            Van Lang Tour
          </h1>        
          <button>
            <img className="pt-10 w-35 sm:w-45" src="/assets/buttons/View page.png" alt="View Page" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Main;
