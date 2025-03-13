import React from "react";
import "./index.css";

// Use absolute paths for images (from public folder)
const bannerImage = "/assets/banner/banner2.png";
const numberSlideImage = "/assets/banner/number_slide.png";
const nextButtonImage = "/assets/buttons/next.png";

function SignUp() {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center text-center py-20 px-4 md:px-0"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="bg-white/70 py-10 px-6 md:px-10 rounded-3xl shadow-2xl w-full max-w-2xl md:max-w-3xl lg:max-w-4xl relative">
        <img src={numberSlideImage} alt="Banner" className="w-full mb-4" />
        <h1 className="text-xl md:text-2xl text-left font-semibold">
          Ready to join Van Lang Tour? Let’s get started
        </h1>
        <p className="text-left text-sm md:text-base text-gray-700">
          We need a few details about you to create your account profile.
        </p>

        <div className="text-left mt-4">
          <label className="block font-medium">Preferred Language</label>
          <select className="bg-[#CFB165] p-2 rounded-md text-black w-full md:w-48">
            <option>English</option>
            <option>Hindi</option>
          </select>

          <div className="mt-4">
            <h1 className="text-lg md:text-xl font-semibold">Name</h1>
            <p className="text-sm md:text-base text-gray-700">
              In order to earn and redeem points, your name must match the
              name on your government-issued ID used when traveling.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="Last Name"
                className="bg-[#CFB165] p-2 rounded-md text-black w-full"
              />
              <input
                type="text"
                placeholder="First Name"
                className="bg-[#CFB165] p-2 rounded-md text-black w-full"
              />
              <input
                type="text"
                placeholder="Middle Name"
                className="bg-[#CFB165] p-2 rounded-md text-black w-full"
              />
              <select className="bg-[#CFB165] p-2 rounded-md text-black w-full">
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
              <div className="col-span-1 md:col-span-2">
                <label className="font-medium">Date of Birth</label>
                <input
                  type="date"
                  className="bg-[#CFB165] p-2 rounded-md text-black w-full"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button>
              <img src={nextButtonImage} className="w-20" alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
