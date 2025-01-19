import React, { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useCities } from "../Context/CitiesContext";
import Loader from "./Loader";
import arrow from "../assets/arrow.svg";
import { useGeolocation } from "../hooks/useGeolocation";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const City = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();

  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );

  const { cityName, emoji, date, notes } = currentCity;

  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col gap-5 p-5 w-96 rounded-lg bg-[#333333]">
      <div>
        <p className="mb-2 text-gray-400 text-xs">CITY NAME</p>
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-semibold">{cityName}</h1>
          <span>{emoji}</span>
        </div>
      </div>
      <div>
        <p className="mb-1 text-gray-400 text-xs">
          YOU WENT TO <span className="uppercase">{cityName}</span> ON
        </p>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div>
          <p className="mb-1 text-gray-400 text-xs">YOUR NOTES</p>
          <p>{notes}</p>
        </div>
      )}

      <div>
        <p className="mb-1 text-gray-400 text-xs">LEARN MORE</p>
        <a
          className="text-yellow-500 underline"
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>
      <div>
        <button
          onClick={(e) => {
            navigate(-1);
            e.preventDefault();
          }}
          className="text-gray-300 rounded-md border border-gray-300 px-3 py-1 font-bold"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default City;
