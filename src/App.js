// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style.css';
import Header from './pages/Header';
import Login from './pages/login';
import ApartmentReview from './pages/ApartmentReviews';
import PropertyList from './pages/propertylist';

function App() {
  const [filters, setFilters] = useState({
    priceRange: 500, // default value
    numBedrooms: 'studio', // default value
    availabilityDate: '', // default value
  });

  // 2. Handle Filter Changes
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

  // 3. Apply Filters
  function applyFilters() {
    // Use filters.priceRange, filters.numBedrooms, filters.availabilityDate
    // to filter your property list or perform any other logic
    // For now, let's log the filters to the console
    console.log('Applied Filters:', filters);
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/ApartmentReviews" component={ApartmentReview} />
            <Route path="/property-list" component={PropertyList} />
            {/* Add additional routes as needed */}
            <Route path="/">
              {/* Common content for all pages can go here */}
              <main id="indexmain">
                <div className="indexcontainer">
                  {/* Section 2: Property Cards */}
                  <section className="sect2">
                    <div className="container2">
                      {/* Property Cards */}
                      {/* Card 1 */}
                      <div className="card-item">
                        <img src="./img/apt1.jpeg" alt="apartmentImage1" />
                        <h2>University Manor</h2>
                        <h3>University District, Seattle </h3>
                        <p>1305 NE 43rd St<br />Seattle, WA 98105 </p>
                      </div>

                      {/* Card 2 */}
                      <div className="card-item">
                        <img src="./img/apt2.jpeg" alt="apartment Image 2" />
                        <h2>Verve Flats</h2>
                        <h3>University District, Seattle </h3>
                        <div className="mapsLink">
                          <a href="https://maps.app.goo.gl/CV7By2Rg9RxmVH2s6">
                            <p>4302 7th Ave Ne<br />Seattle, WA 98105</p>
                          </a>
                        </div>
                      </div>

                      {/* Card 3 */}
                      <div className="card-item">
                        <img src="./img/apt3.jpeg" alt="apartment Image 3" />
                        <h2>Campus View</h2>
                        <h3>University District, Seattle </h3>
                        <div className="mapsLink">
                          <a href="https://maps.app.goo.gl/9xWhUrpbggZGk9z79">
                            <p>4322 7th Ave NE<br />Seattle, WA 98105</p>
                          </a>
                        </div>
                      </div>

                      {/* Card 4 */}
                      <div className="card-item">
                        <img src="./img/apt4.jpeg" alt="apartment Image 4" />
                        <h2>Sundodger</h2>
                        <h3>University District, Seattle </h3>
                        <div className="mapsLink">
                          <a href="https://maps.app.goo.gl/FcBnpmCFHqXLFJng6">
                            <p>4218 Roosevelt Way Ne<br />Seattle, WA 98105</p>
                          </a>
                        </div>
                      </div>

                      {/* Card 5 */}
                      <div className="card-item">
                        <img src="./img/apt5.jpeg" alt="apartment Image 5" />
                        <h2>Levere</h2>
                        <h3>University District, Seattle </h3>
                        <div className="mapsLink">
                          <a href="https://maps.app.goo.gl/9MAcim9TQdWZ4cEE7">
                            <p>4105 Brooklyn Ave Ne<br />Seattle, WA 98105</p>
                          </a>
                        </div>
                      </div>

                      {/* Card 6 */}
                      <div className="card-item">
                        <img src="./img/apt7.jpeg" alt="apartment Image 6" />
                        <h2>Cosmpolitan</h2>
                        <h3>Wallingford, Seattle </h3>
                        <div className="mapsLink">
                          <a href="https://maps.app.goo.gl/9MAcim9TQdWZ4cEE7">
                            <p>400 Ne 45th St<br />Seattle, WA 98105</p>
                          </a>
                        </div>
                      </div>

                      {/* Card 7 */}
                      <div className="card-item">
                        <img src="./img/apt5.jpeg" alt="apartment Image 7" />
                        <h2>Robins Nest</h2>
                        <h3>Portage Bay, Seattle </h3>
                        <div className="mapsLink">
                          <a href="https://maps.app.goo.gl/9MAcim9TQdWZ4cEE7">
                            <p>4105 Brooklyn Ave Ne<br />Seattle, WA 98105</p>
                          </a>
                        </div>
                      </div>

                      {/* Card 8 */}
                      <div className="card-item">
                        <img src="./img/apt5.jpeg" alt="apartment Image 8" />
                        <h2>Levere</h2>
                        <h3>University District, Seattle </h3>
                        <div className="mapsLink">
                          <a href="https://maps.app.goo.gl/9MAcim9TQdWZ4cEE7">
                            <p>4105 Brooklyn Ave Ne<br />Seattle, WA 98105</p>
                          </a>
                        </div>
                      </div>

                    </div>
                  </section>

                  {/* Section 3: Filters */}
                  <section className="sect3">
                    {/* ... Your existing filter code ... */}
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
