import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex justify-center mb-4">
        <div className="w-20 h-32 bg-gradient-to-b from-blue-100 to-blue-300 border-4 border-gold rounded-md relative">
          <div className="absolute top-[-10px] w-full h-5 bg-gold rounded-t-md"></div>
          <div className="absolute top-5 inset-x-0 mx-auto text-center text-sm font-bold text-gold">RV<br/>MD</div>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-navy text-center">{product.name}</h3>
      <p className="text-center text-sm text-gray-600">{product.dose}</p>
      <p className="text-center font-bold text-navy my-1">{product.price}</p>
      <p className="text-center text-xs text-gray-500 mb-2">Earn {product.points} Points</p>
      <button className="w-full bg-navy text-white py-2 rounded-md hover:bg-gold hover:text-navy transition">
        Select Options
      </button>
      <div className="text-xs text-center mt-2 text-green-600 font-semibold">✓ Third-party Lab Tested</div>
    </div>
  );
}
