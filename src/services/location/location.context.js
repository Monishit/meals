import React, { useState, useEffect } from "react";
import { locationRequest, locattionTransform } from "./locations.service";

export const locationContext = createContext();

export const locationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState(null);
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setTimeout(() => {
      locationRequest(keyword)
        .then(locationTransform)
        .then((result) => {
          setIsLoading(false);
          setRestaurants(result);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    });
  };
  useEffect(() => {}, []);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
