import React from "react";
import Loader from "./Loader";
import CityItem from "./CityItem";
import {useCities} from "../Context/CitiesContext";

const CitiesList = () => {
  const { cities, isLoading } = useCities();

  if (isLoading) {
    return <Loader />;
  }

  if (!cities.length)
    return (
      <p className="mt-20">
        👋 Add your first city by clicking on a city on the map
      </p>
    );

  return (
    <div className="custom-scrollbar overflow-y-auto h-[450px]">
      <ul>
        {cities.map((city, index) => (
          <CityItem city={city} key={city.id} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default CitiesList;
