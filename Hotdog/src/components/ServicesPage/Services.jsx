import React, { useState } from "react";
import SearchButton from "../PublicComponents/SearchButton.jsx";
import ServicesFilters_Card from "./ServicesFilters_Card.jsx";
import searchFilter_Data from "./searchFilter_Data.js";
import "./servicesStyle.css";

function createCard(props) {
  return <ServicesFilters_Card key={props.id} {...props} />;
}

function Services() {
  const [query, setQuery] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [filteredData, setFilteredData] = useState(searchFilter_Data);

  const handleSearchChange = (value) => setQuery(value);
  const handleServiceChange = (value) => setServiceType(value);

  const handleSearch = () => {
    const keyword = query.toLowerCase();
    const results = searchFilter_Data.filter((item) => {
      const matchesQuery =
        item.title.toLowerCase().includes(keyword) ||
        item.address.toLowerCase().includes(keyword);
      const matchesService = serviceType ? item.servicetype === serviceType : true;
      return matchesQuery && matchesService;
    });

    setFilteredData(results);
  };

  return (
    <div className="service-container">
      <SearchButton
        service={serviceType}
        searchValue={query}
        onServiceChange={handleServiceChange}
        onSearchChange={handleSearchChange}
        onSearch={handleSearch}
      />

      <div className="service-title-card-container">
        <p className="service-card-title">Practices</p>
      </div>

      <div className="service-cards-container">
        {filteredData.length > 0 ? filteredData.map(createCard) : <p>No results found</p>}
      </div>
    </div>
  );
}

export default Services;