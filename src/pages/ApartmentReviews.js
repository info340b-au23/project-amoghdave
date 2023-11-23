import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderReview from './HeaderReview';
import TitleReview from './TitleReview';
import CardReview from './CardsReview';
import PostReview from './PostReview'


const ApartmentReview = () => {
  return (
    <div className="container">
        <TitleReview />
        <CardReview/>
        <PostReview/>
      <footer>
        <p>&copy; 2023 Husky Homes</p>
        <p>Created by Suraj Gangaram, Amogh Dave, Coby Williams-Gurian, Jerry Tang</p>
      </footer>
    </div>
  );
};

export default ApartmentReview;
