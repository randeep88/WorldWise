import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Message from "./Message";
import Loader from "./Loader";
import DatePicker from "react-datepicker";
import { useCities } from "../Context/CitiesContext";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const Form = () => {
  const navigate = useNavigate();

  const { createCity, isLoading } = useCities();

  const [lat, lng] = useUrlPosition();
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState();
  const [country, setCountry] = useState();
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState();
  const [geocodingError, setGeocodingError] = useState("");
  const [emoji, setEmoji] = useState();

  useEffect(() => {
    if (!lat && !lng) return;

    async function fetchCityData() {
      try {
        setIsLoadingGeocoding(true);
        setGeocodingError("");
        const res = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
        );
        let data = await res.json();
        console.log(data);

        if (!data.countryCode)
          throw new Error(
            "👋 That doesn't seem to be a city, Click somewhere else ☺️"
          );

        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
        setEmoji(convertToEmoji(data.countryCode));
      } catch (err) {
        setGeocodingError(err.message);
      } finally {
        setIsLoadingGeocoding(false);
      }
    }
    fetchCityData();
  }, [lat, lng]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      date,
      emoji,
      notes,
      position: { lat, lng },
    };
    await createCity(newCity);
    navigate("/app/cities")
  };

  if (isLoadingGeocoding) return <Loader />;

  if (!lat && !lng)
    return <Message message="Start by clicking somewhere on the map ➡️" />;

  if (geocodingError) return <Message message={geocodingError} />;

  return (
    <div
      className={`${
        isLoading && `opacity-50`
      } p-5 w-96 rounded-lg bg-[#333333]`}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-2" action="">
        <div className="flex flex-col gap-1">
          <label htmlFor="cityName">City name</label>
          <input
            id="cityName"
            onChange={(e) => setCityName(e.target.value)}
            className="rounded-md px-2 py-1 text-black bg-gray-300 focus:outline-none"
            type="text"
            value={cityName}
          />
          <span className="absolute left-[400px] top-[203px] text-black">
            {emoji}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="date">When did you go to {cityName}?</label>
          <DatePicker
            id="date"
            dateFormat="dd/MM/yyyy"
            selected={date}
            onChange={(date) => setDate(date)}
            className="w-full rounded-md px-2 py-1 text-black bg-gray-300 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="notes">Notes about your trip to {cityName}</label>
          <textarea
            id="notes"
            placeholder="Write your notes here..."
            onChange={(e) => setNotes(e.target.value)}
            className="rounded-md px-2 py-1 text-black bg-gray-300 focus:outline-none"
            type="text"
            value={notes}
          />
        </div>

        <div className="mt-5 flex items-center justify-between">
          <button className="rounded-md bg-yellow-500 text-black px-3 py-1 font-bold">
            Add
          </button>
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
      </form>
    </div>
  );
};

export default Form;
