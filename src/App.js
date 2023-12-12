import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './style.css';
import Login from './components/login';
import Signup from './components/signup';
import ApartmentReview from './components/ApartmentReviews';
import PropertyList from './components/propertylist';
import Header from './components/Header';
import { Redirect } from 'react-router-dom';
import './firebase';
import { getDatabase, ref, child, get } from 'firebase/database';

function App() {
  const [tempApartments, setTempApartments] = useState([]);
  const [apartments, setApartments] = useState([]);
  const [filteredApartments, setFilteredApartments] = useState([]); // New state for filtered apartments

  const [filters, setFilters] = useState({
    priceRange: 10000,
    numBedrooms: '1',
    availabilityDate: '',
  });

  function handlePriceRangeChange(event) {
    setFilters({
      ...filters,
      priceRange: parseInt(event.target.value),
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

  const applyFilters = () => {
    let newFilteredApartments = tempApartments || [];
    newFilteredApartments = newFilteredApartments.filter(
      (newApartment) =>
        newApartment.rent <= filters.priceRange &&
        newApartment.beds >= filters.numBedrooms &&
        (filters.availabilityDate
          ? new Date(newApartment.availabilityDate) >= new Date(filters.availabilityDate)
          : true)
    );
    setFilteredApartments(newFilteredApartments); // Set filtered apartments separately
  };

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'apartments'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setApartments(snapshot.val());
          setTempApartments(snapshot.val());
          setFilteredApartments(snapshot.val()); // Set filtered apartments initially
        } else {
          console.log('Data is corrupt.');
        }
      })
      .catch((error) => {
        console.log('Data is corrupt.');
      });
  }, []);

  const filterWithName = (key) => {
    let newFilteredApartments = tempApartments || [];
    newFilteredApartments = newFilteredApartments.filter((newApartment) =>
      newApartment.name.toLowerCase().includes(key.toLowerCase())
    );
    setFilteredApartments(newFilteredApartments); // Set filtered apartments separately
    return newFilteredApartments;
  };

  return (
    <div className="App">
      <Router>
        {sessionStorage.getItem('user') !== null && <Header filterWithName={filterWithName} />}
        <div className="container">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            {sessionStorage.getItem('user') !== null ? (
              <>
                <Route path="/ApartmentReviews/:id" component={ApartmentReview} />
                <Route path="/property-list" component={PropertyList} />
                <Route path="/home">
                  <>
                    <main className="indexmain">
                      <div className="indexcontainer">
                        <section className="apartments">
                          <div className="AptCardContainer">
                            {filteredApartments.map((apartment, index) => (
                              // Wrap each card with a Link to the ApartmentReview page
                              <div key={index} className="card-item AptCardContainer">
                                <div className="card-item">
                                  <img src={apartment.image} alt={`apartmentImage${index + 1}`} />
                                  <Link to={`/ApartmentReviews/${index}`}>
                                    <h2>{apartment.name}</h2>
                                  </Link>
                                  <h3>{apartment.address.city}</h3>
                                  <h3>Rent: {apartment.rent}</h3>
                                  <h3>Availability Date: {apartment.availabilityDate}</h3>
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
                              </div>
                            ))}
                          </div>
                        </section>

                        <section className="filters">
                          {/* Price Range Filter */}
                          <div>
                            <label htmlFor="priceRange">Price Range: </label>
                            <input
                              type="range"
                              id="priceRange"
                              min="1"
                              max="10000"
                              value={filters.priceRange}
                              onChange={handlePriceRangeChange}
                            />
                            <span>{filters.priceRange}</span>
                          </div>

                          {/* Number of Bedrooms Filter */}
                          <div>
                            <label htmlFor="numBedrooms">Number of Bedrooms: </label>
                            <select
                              id="numBedrooms"
                              value={filters.numBedrooms}
                              onChange={handleNumBedroomsChange}
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4+</option>
                            </select>
                          </div>

                          {/* Availability Date Filter */}
                          <div>
                            <label htmlFor="availabilityDate">Availability Date: </label>
                            <input
                              type="date"
                              id="availabilityDate"
                              value={filters.availabilityDate}
                              onChange={handleAvailabilityDateChange}
                            />
                          </div>

                          {/* Apply Filters Button */}
                          <button onClick={applyFilters}>Apply Filters</button>
                        </section>
                      </div>
                    </main>
                  </>
                </Route>
              </>
            ) : (
              <Redirect to="/login" />
            )}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;