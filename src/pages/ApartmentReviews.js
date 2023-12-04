import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderReview from './HeaderReview';
import TitleReview from './TitleReview';
import CardReview from './CardsReview';
import PostReview from './PostReview';
import apartmentData from '../data.json';

const ApartmentReview = () => {
  const { id } = useParams();
  const initialApartments = apartmentData.apartments;
  const [apartments, setApartments] = useState(initialApartments);

  const apartment = apartments[id];

  // Define addReview function
  const addReview = (newReview) => {
    const updatedApartments = [...apartments];
    updatedApartments[id].reviews.push(newReview);

    // Set the state to trigger a re-render with the updated data
    setApartments(updatedApartments);
  };

  return (
    <div className="container">
      <TitleReview apartment={apartment} />
      <CardReview apartment={apartment} />
      {/* Pass addReview as a prop to PostReview */}
      <PostReview addReview={addReview} />
      <footer>
        <p>&copy; 2023 Husky Homes</p>
        <p>Created by Suraj Gangaram, Amogh Dave, Coby Williams-Gurian, Jerry Tang</p>
      </footer>
    </div>
  );
};

export default ApartmentReview;

