import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../review.css';

const TitleReview = ({ apartment }) => {
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
        <h1 className="heading">{apartment.name}</h1>
        <img src={apartment.image} alt={apartment.name} className="cent-img" />
      </div>
      <div className="col-md-4">
        <div className="button-section">
          <h2>Contact {apartment.name}</h2>
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
          <a href={`tel:${apartment.tel}`}>{apartment.tel}</a>
        </div>
      </div>
      <div className="col-md-8">
        <p className="address">{`${apartment.address.street}, ${apartment.address.city}, ${apartment.address.state} ${apartment.address.zip}`}</p>
        <br />
        <br />
        <h2 className="small-screen heading">Summary</h2>
        <p className="small-screen">{apartment.description}</p>
        <h3 className="heading"> Apartment Amenities </h3>
        <h4>
          <div className="flex-container">
            <ul id="flex">
              <div className="flex-item">
                {/* Split the amenities string into an array */}
                {apartment.amenities.split(', ').map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </div>
            </ul>
          </div>
        </h4>
      </div>
    </div>
  );
};

export default TitleReview;
