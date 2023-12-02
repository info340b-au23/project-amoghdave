import React from 'react';

function FilterComponent({ filters, setFilters }) {
  const handleSearchChange = (event) => {
    setFilters({ ...filters, searchTerm: event.target.value });
  };

  const handlePriceChange = (event) => {
    setFilters({ ...filters, priceRange: parseInt(event.target.value, 10) });
  };

  const handleBedroomChange = (event) => {
    setFilters({ ...filters, numBedrooms: event.target.value });
  };

  const handleDateChange = (event) => {
    setFilters({ ...filters, availabilityDate: event.target.value });
  };

  const applyFilter = () => {
    console.log('Filters:', filters);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        aria-label="Search"
        className="form-control me-2"
        value={filters.searchTerm || ''}
        onChange={handleSearchChange}
      />
      <button className="btn btn-outline-success" onClick={applyFilter}>
        Search
      </button>
      <input
        type="range"
        name="priceRange"
        min="500"
        max="5000"
        step="100"
        value={filters.priceRange || 500}
        onChange={handlePriceChange}
      />
      <select
        name="numBedrooms"
        value={filters.numBedrooms || 'studio'}
        onChange={handleBedroomChange}
      >
        <option value="studio">Studio</option>
        <option value="1">1 Bedroom</option>
        <option value="2">2 Bedrooms</option>
        <option value="3">3+ Bedrooms</option>
      </select>
      <input
        type="date"
        name="availabilityDate"
        value={filters.availabilityDate || ''}
        onChange={handleDateChange}
      />
      <button className="index-button" onClick={applyFilter}>
        Apply Filter
      </button>
    </div>
  );
}

export default FilterComponent;
