import React from "react";
import { Link } from "react-router-dom";
import { useCities } from "../Context/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  const {currentCity, deleteCity} = useCities()
  const { cityName, emoji, date, id, position } = city;

  const handleDeleteCity = (e) => {
    e.preventDefault()
    deleteCity(id)
  };

  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`${id === currentCity.id? `border border-yellow-500` : ``} text-sm text-gray-300 bg-[#333333] flex items-center justify-between py-3 px-4 mb-2 w-96 border-s-[5px] rounded-lg border-yellow-500 hover:bg-neutral-700 transition-all`}
      >
        <div className="flex items-center gap-4">
          <span>{emoji}</span>
          <h2>
            <b>{cityName}</b>
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <p>({formatDate(date)})</p>
          <button onClick={handleDeleteCity} className="bg-neutral-800 hover:bg-red-700 transition-all text-gray-300 rounded-full text-lg flex h-5 w-5 pb-[2px] pe-[1px] items-center justify-center">
            &times;
          </button>
        </div>
      </Link>
    </li>
  );
};

export default CityItem;
