import React from 'react';

function Card({ image, price, title, name,innerName }) {
  return (
    <div className="w-full max-w-[280px] rounded-3xl overflow-hidden bg-white shadow-lg">
      <div className="relative">
        <img 
          src={image}
          alt={title}
          className="w-full h-[200px] object-cover blur-[1px]"
        />
        
        <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 text-sm font-medium text-black">
          From {price}
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-3xl font-bold  bg-opacity-50 px-4 py-2 rounded-lg">
            {innerName}
          </p>
        </div>
      </div>
      
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2 text-black">{title}</h2>
        <div className=" items-center text-gray-600">
          <div className=" items-center gap-1">
          <span className="text-xl text-black">{name}</span>
         
          </div>
          <div className="mx-2 text-gray-300"></div>
          <span className="text-sm">31 hours</span>
          
        </div>
      </div>
    </div>
  );
}

export default Card;
