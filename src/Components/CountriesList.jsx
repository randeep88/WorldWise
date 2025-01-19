import React from "react";
import Loader from "./Loader";
import CountryItem from "./CountryItem";
import { useCities } from "../Context/CitiesContext";

const CountriesList = () => {

  const {cities, isLoading} = useCities()

  if (isLoading) {
    return <Loader />;
  }

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <div
      className="custom-scrollbar overflow-y-auto w-[342px] flex flex-wrap gap-5"
    >
      {countries.map((country, index) => (
        <CountryItem key={index} country={country} />
      ))}
    </div>
  );
};

export default CountriesList;
