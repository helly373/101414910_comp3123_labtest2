import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <div>
      <input
    type="text"
    placeholder="Enter city name"
    value={city}
    onChange={(e) => setCity(e.target.value)}
    className="search-input"
  />
  <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
