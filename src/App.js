import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './style.css';
import Header from './pages/Header';
import Login from './pages/login';
import ApartmentReview from './pages/ApartmentReviews';
import PropertyList from './pages/propertylist';
import apartmentData from './data.json';

function App() {
  const [filters, setFilters] = useState({
    priceRange: 500,
    numBedrooms: 'studio',
    availabilityDate: '',
  });

  function handlePriceRangeChange(event) {
    setFilters({
      ...filters,
      priceRange: parseInt(event.target.value, 10),
    });
  }

  function handleNumBedroomsChange(event) {
    setFilters({
      ...filters,
      numBedrooms: event.target.value,
    });
  }

  function handleAvailabilityDateChange(event) {
    setFilters({
      ...filters,
      availabilityDate: event.target.value,
    });
  }

  function applyFilters() {
    console.log('Applied Filters:', filters);
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/ApartmentReviews/:id" component={ApartmentReview} />
            <Route path="/property-list" component={PropertyList} />
            <Route path="/">
              <main id="indexmain">
                <div className="indexcontainer">
                  <section className="sect2">
                    <div className="container2">
                      {apartmentData.apartments.map((apartment, index) => (
                        // Wrap each card with a Link to the ApartmentReview page
                        <Link to={`/ApartmentReviews/${index}`} key={index}>
                          <div className="card-item">
                            <img src={apartment.image} alt={`apartmentImage${index + 1}`} />
                            <h2>{apartment.name}</h2>
                            <h3>{apartment.address.city}</h3>
                            <div className="mapsLink">
                              <a href={apartment.mapsLink}>
                                <p>
                                  {apartment.address.street}
                                  <br />
                                  {`${apartment.address.city}, ${apartment.address.state} ${apartment.address.zip}`}
                                </p>
                              </a>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </section>

                  <section className="sect3">
                    <div>
                      <label htmlFor="priceRange">Price Range: </label>
                      <input
                        type="range"
                        id="priceRange"
                        value={filters.priceRange}
                        onChange={handlePriceRangeChange}
                      />
                      <span>{filters.priceRange}</span>
                    </div>

                    <div>
                      <label htmlFor="numBedrooms">Number of Bedrooms: </label>
                      <select
                        id="numBedrooms"
                        value={filters.numBedrooms}
                        onChange={handleNumBedroomsChange}
                      >
                        <option value="studio">Studio</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4+</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="availabilityDate">Availability Date: </label>
                      <input
                        type="date"
                        id="availabilityDate"
                        value={filters.availabilityDate}
                        onChange={handleAvailabilityDateChange}
                      />
                    </div>

                    <button onClick={applyFilters}>Apply Filters</button>
                  </section>
                </div>
              </main>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
