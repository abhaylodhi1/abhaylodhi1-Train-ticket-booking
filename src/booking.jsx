import React from "react";
import Search from "./components/search";
import Ticket from "./components/ticket";

function Book() {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/banner/banner3.png')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="pt-24">
        <Search />
      </div>
      <div className="absolute top-0 w-full p-4 text-white bg-opacity-50"></div>
      {/* Render multiple Ticket components */}
      {[...Array(3)].map((_, index) => (
        <div key={index}>
          <Ticket />
        </div>
      ))}
    </div>
  );
}

export default Book;
