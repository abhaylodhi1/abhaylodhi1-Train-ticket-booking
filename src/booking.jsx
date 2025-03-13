import React from "react";
import Search from "./components/search";

import Ticket from "./components/ticket";
function Book() {
  return (
    <div
      className="bg-[url('/src/assets/banner/banner3.png')] "
      style={{ backgroundAttachment: "fixed" }}>
      <div className="pt-24">
        <Search />
      </div>
      <div className="absolute top-0 w-full p-4 text-white bg-opacity-50">
      </div>
      <div>
        <Ticket />
      </div>
      <div>
        <Ticket />
      </div>
      <div>
        <Ticket />
      </div>

    </div>
  );
}

export default Book;
