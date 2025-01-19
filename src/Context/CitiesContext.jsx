import React, {
  createContext,
  useContext,
  useDeferredValue,
  useEffect,
  useState,
} from "react";

const CitiesContext = createContext();

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  console.log(cities)
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch("https://cities-data-1-ibt6.onrender.com/cities");
        const data = await res.json();
        setCities(data);
        setIsLoading(false);
      } catch (err) {
        alert("Error fetching cities:", err);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`https://cities-data-1-ibt6.onrender.com/cities/${id}`);
      const data = await res.json();
      console.log(data)
      setCurrentCity(data);
      setIsLoading(false);
    } catch (err) {
      alert("Error fetching city:", err);
    }
  }

  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const res = await fetch(`https://cities-data-1-ibt6.onrender.com/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setCities((city) => [...city, data]);
    } catch (err) {
      alert("There was an error creating the city");
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCity(id) {
    try {
      setIsLoading(true);
      await fetch(`https://cities-data-7fo9.onrender.com/${id}`, {
        method: "DELETE",
      });

      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch (err) {
      alert("There was an error deleting the city");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

const useCities = () => {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("useCities must be used within a CitiesProvider");
  }
  return context;
};

export { CitiesProvider, useCities };
