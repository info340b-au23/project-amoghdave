import React, { useState } from 'react';

const FilterComponent = ({ onFilter }) => {
  const [filterCriteria, setFilterCriteria] = useState({
    beds: '',
    baths: '',
  });

  const handleChange = (e) => {
    setFilterCriteria({ ...filterCriteria, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filterCriteria);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="beds"
        placeholder="Bedrooms"
        value={filterCriteria.beds}
        onChange={handleChange}
      />
      <input
        type="number"
        name="baths"
        placeholder="Bathrooms"
        value={filterCriteria.baths}
        onChange={handleChange}
      />
      <button type="submit">filter</button>
    </form>
  );
};

export default FilterComponent;
