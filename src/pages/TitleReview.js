import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../review.css';
import uwaImage from '../img/uwapartment.jpg';

const TitleReview = (props) => {
  // State to track hover status of buttons
  const [isTourButtonHovered, setTourButtonHovered] = useState(false);
  const [isMessageButtonHovered, setMessageButtonHovered] = useState(false);

  // Event handlers for button hover
  const handleTourButtonHover = () => {
    setTourButtonHovered(true);
  };

  const handleTourButtonLeave = () => {
    setTourButtonHovered(false);
  };

  const handleMessageButtonHover = () => {
    setMessageButtonHovered(true);
  };

  const handleMessageButtonLeave = () => {
    setMessageButtonHovered(false);
  };

  return (
    <div className="row">
      <div className="col-md-8">
        <br />
        <h1 className="heading">Trailside Student Living</h1>
        <img src={uwaImage} alt="UW Apartment" className="cent-img" />
        
      </div>
      <div className="col-md-4">
        <div className="button-section">
          <h2>Contact Trailside</h2>
          <br />
          <button
            className={`btn btn-primary ${isTourButtonHovered ? 'button-hovered' : ''}`}
            onMouseEnter={handleTourButtonHover}
            onMouseLeave={handleTourButtonLeave}
          >
            Request Tour
          </button>
          <br />
          <button
            className={`btn btn-primary ${isMessageButtonHovered ? 'button-hovered' : ''}`}
            onMouseEnter={handleMessageButtonHover}
            onMouseLeave={handleMessageButtonLeave}
          >
            Send Message
          </button>
          <br />
          <a href="tel:20468884222">(206) 729-7737</a>
        </div>
      </div>
      <div className="col-md-8">
        <p className="address">4801 24th Ave NE, Seattle, WA 98105 </p>
        <br />
        <br />
        <h2 className="small-screen heading">Summary</h2>
        <p className="small-screen">
          Trailside Student Living is conveniently located right across the street from University Village.
          With fancy amenities such as a rooftop grill, a pool table, and a gym on the first floor, this apartment
          offers a fulfilling living experience for residents. Offering apartment layouts from studios to 5 bedrooms/
          5 bathroom units, there is truly a place that accommodates anyone's wants or needs.
        </p>
        <h3 className="heading"> Apartment Amenities </h3>
        <h4>
          <div className="flex-container">
            <ul id="flex">
              <div className="flex-item">
                <li>Fully Furnished</li>
                <li>Full-Size Beds</li>
                <li>Quartz Countertops</li>
              </div>
              <div className="flex-item">
                <li>Wood Style Flooring</li>
                <li>Keyed Bedroom Entry</li>
                <li> In-Unit Washer and Dryer</li>
              </div>
            </ul>
          </div>
        </h4>
      </div>
    </div>
  );
};

export default TitleReview;


