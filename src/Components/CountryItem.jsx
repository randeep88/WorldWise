import React from "react";

const CountryItem = ({ country }) => {
  console.log(country);

  return (
    <div className="flex items-center justify-center w-40 h-20 bg-[#333333] rounded-lg border-s-[5px] border-yellow-500">
      <h2 className="font-semibold me-3">{country.country}</h2>
      <span>{country.emoji}</span>
    </div>
  );
  4;
};

export default CountryItem;
