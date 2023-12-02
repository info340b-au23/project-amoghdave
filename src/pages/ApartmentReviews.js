import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderReview from './HeaderReview';
import TitleReview from './TitleReview';
import CardReview from './CardsReview';
import PostReview from './PostReview';
import apartmentData from '../data.json';

const ApartmentReview = () => {
  // Get the id parameter from the URL
  const { id } = useParams();

  // Use the id to get the specific apartment data
  const apartment = apartmentData.apartments[id];

  return (
    <div className="container">
      <TitleReview apartment={apartment} />
      <CardReview apartment={apartment} />
      <PostReview apartment={apartment} />
      <footer>
        <p>&copy; 2023 Husky Homes</p>
        <p>Created by Suraj Gangaram, Amogh Dave, Coby Williams-Gurian, Jerry Tang</p>
      </footer>
    </div>
  );
};

export default ApartmentReview;
