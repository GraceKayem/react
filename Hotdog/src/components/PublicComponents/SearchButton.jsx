import { useState } from "react";
import fetch_Data from "./fetch_Data";
import service_Lists from "./services_Lists";


function SearchButton({ service, searchValue, onServiceChange, onSearchChange, onSearch }) {

  const [results, setResults] = useState([]);

  // Filter provider names based on input
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (value) => {
    onSearchChange(value);

    if (!value.trim()) {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    const filtered = fetch_Data.filter((provider) =>
      provider.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered);
    setShowDropdown(true);
  };

  const handleSelect = (provider) => {
    onSearchChange(provider);
    setShowDropdown(false);
  };

  return (
    <div className="search-bar-wrapper">

      {/* Search bar */}
      <div className="search-bar">
        {/* Service selector */}
        <select 
        className="select-dropdown"
        value={service} 
        onChange={(e) => onServiceChange(e.target.value)}>
          <option value="">Select a Service</option>
          {service_Lists.map((serviceItem, index) => (
            <option key={index} value={serviceItem}>
              {serviceItem}
            </option>
          ))}
        </select>

        {/* Search button */}
        <button className="search-btn" onClick={onSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </button>

        {/* Search input */}
        <input
          type="text"
          placeholder="Search Provider by name"
          value={searchValue}
          onChange={(e) => handleChange(e.target.value)}
          className="provider-search-filter"
        />
      </div>

        {/* dropdown*/}
        {showDropdown && (
        <ul className="search-results">
          {results.length > 0 ? (
            results.map((provider, index) => (
              <li
                key={index}
                className="result-item"
                onClick={() => handleSelect(provider)}
              >
                {provider}
              </li>
            ))
          ) : (
            <li className="no-results">No providers found</li>
          )}
        </ul>
      )}
      
    </div>
  );
}

export default SearchButton;
