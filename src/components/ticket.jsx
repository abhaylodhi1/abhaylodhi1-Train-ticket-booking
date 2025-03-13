import React from "react";

// ✅ Use absolute paths for public assets
const trainIcon = "/assets/button/TrainIcon.png";
const rectangleImage = "/assets/buttons/Rectangle.png";

function Ticket() {
  return (
    <div className="flex items-center justify-center p-4 md:p-8">
      <div className="bg-white/70 flex flex-wrap items-center justify-between rounded-3xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl p-4 md:p-6">
        
        {/* Departure Time & Location */}
        <div className="flex flex-col items-center w-full sm:w-auto mb-4 sm:mb-0">
          <input type="time" className="text-lg md:text-2xl mb-2" />
          <h1 className="text-lg md:text-2xl font-bold">Sai Gon</h1>
        </div>

        {/* Train Icon */}
        <div className="mx-4 w-16 h-16 flex justify-center">
          <img src={trainIcon} alt="Train Icon" className="w-12 h-12 md:w-16 md:h-16" />
        </div>

        {/* Arrival Time & Location */}
        <div className="flex flex-col items-center w-full sm:w-auto mb-4 sm:mb-0">
          <input type="time" className="text-lg md:text-2xl mb-2" />
          <h1 className="text-lg md:text-2xl font-bold">Ha Noi</h1>
        </div>

        {/* Travel Details */}
        <div className="flex flex-col items-start w-full sm:w-auto mb-4 sm:mb-0">
          <label className="text-sm md:text-xl mb-2">First Class - 24hrs 00mins travel</label>
          <label className="text-[#CFB165] text-sm md:text-xl mb-4 cursor-pointer">Details</label>
          <div className="flex items-center">
            <span className="pr-2 text-sm md:text-xl">Price</span>
            <input className="w-16 md:w-24 text-[#DCA400] text-lg md:text-2xl border-b-2 border-[#DCA400] focus:outline-none" type="text" />
            <span className="pl-2 text-sm md:text-xl">VND</span>
          </div>
        </div>

        {/* Divider Image */}
        <div className="flex justify-center w-full sm:w-auto">
          <img src={rectangleImage} alt="Rectangle" className="w-12 h-40 md:w-16 md:h-60" />
        </div>

      </div>
    </div>
  );
}

export default Ticket;
