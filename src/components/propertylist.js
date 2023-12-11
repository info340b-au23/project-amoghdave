// PropertyList.js
import React from 'react';

const PropertyList = () => {
  return (
    <>
    <div>
      <main className="indexmain">
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
                <img src="./img/apt2.jpeg" alt="apartment 2" />
                <h2>Verve Flats</h2>
                <h3>University District, Seattle </h3>
                <div className="mapsLink">
                  <a href="https://maps.app.goo.gl/CV7By2Rg9RxmVH2s6">
                    <p>4302 7th Ave Ne<br />Seattle, WA 98105</p>
                  </a>
                </div>
              </div>

              {/* ... Add other property cards ... */}

            </div>
          </section>

          {/* Section 3: Filters */}
          <section className="sect3">
            <h2>Filter Options</h2>

            {/* Price Range */}
            <div className="filter-item">
              <label htmlFor="priceRange">Price Range ($):</label>
              <input type="range" id="priceRange" name="priceRange" min="500" max="5000" step="100" />
              <span id="priceRangeValue">$500 - $5000</span>
            </div>

            {/* Number of Bedrooms */}
            <div className="filter-item">
              <label htmlFor="numBedrooms">Number of Bedrooms:</label>
              <select id="numBedrooms" name="numBedrooms">
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3+ Bedrooms</option>
              </select>
            </div>

            {/* Availability Date */}
            <div className="filter-item">
              <label htmlFor="availabilityDate">Available From:</label>
              <input type="date" id="availabilityDate" name="availabilityDate" />
            </div>

            {/* Filter Button */}
            <div className="filter-item">
            <button className="index-button">Apply Filter</button>
            </div>
          </section>

        </div>
      </main>

      <footer>
        <p>&copy; 2023 Husky Homes</p>
      </footer>
    </div>
    </>
  );
};

export default PropertyList;
