import React from "react";

function Search() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-black/80 justify-center space-y-4 md:space-y-0 md:space-x-6 text-[#FFFFFF] p-4 md:p-10 w-full">
      <div className="w-full md:w-auto">
        <label className="text-lg md:text-xl">Keyword</label><br />
        <input type="text" className="w-full md:w-44 bg-[#CFB165] h-10 rounded-xl px-2" />
      </div>
      <div className="w-full md:w-auto">
        <label className="text-lg md:text-xl">Activity</label><br />
        <select className="w-full md:w-44 bg-[#CFB165] h-10 rounded-xl px-2">
          <option>Any</option>
        </select>
      </div>
      <div className="w-full md:w-auto">
        <label className="text-lg md:text-xl">Destination</label><br />
        <select className="w-full md:w-44 bg-[#CFB165] h-10 rounded-xl px-2">
          <option>Any</option>
        </select>
      </div>
      <div className="w-full md:w-auto">
        <label className="text-lg md:text-xl">Date</label><br />
        <input type="date" className="w-full md:w-44 bg-[#CFB165] h-10 rounded-xl px-2" />
      </div>
      <div className="w-full md:w-auto">
        <label className="text-lg md:text-xl">Search</label><br />
        <button className="w-full md:w-44 bg-[#DCA400] h-10 rounded-xl text-black font-bold">Go</button>
      </div>
    </div>
  );
}

export default Search;
