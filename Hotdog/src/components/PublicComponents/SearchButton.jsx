// SearchButton.jsx
import React from "react";

function SearchButton({ service, searchValue, onServiceChange, onSearchChange, onSearch }) {
  return (
    <div className="search-bar">
      {/* Service selector */}
      <select value={service} onChange={(e) => onServiceChange(e.target.value)}>
        <option value="">All Services</option>
        <option value="Vet Consultations">Vet Consultations</option>
        <option value="Dental Care">Dental Care</option>
        <option value="Desexing & Surgical Procedures">Desexing & Surgical Procedures</option>
        <option value="Nail Trimming">Nail Trimming</option>
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
        placeholder="Search Practice or Practitioner"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchButton;
