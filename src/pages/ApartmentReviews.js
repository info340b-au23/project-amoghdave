import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TitleReview from './TitleReview';
import CardReview from './CardsReview';
import PostReview from './PostReview';
import { getDatabase, ref, child, get, update  } from "firebase/database";

const ApartmentReview = () => {
  const { id } = useParams();
  const [apartments, setApartments] = useState(null);
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'apartments')).then((snapshot) => {
      if (snapshot.exists()) {
        setApartments(snapshot.val());
        setApartment(snapshot.val()[id]);
      } else {
        console.log('Data is corrupt.')
      }
    }).catch((error) => {
      console.log('Data is corrupt.')
    });
  }, []);

  // Define addReview function
  const addReview = (review) => {
    console.log(review);
    const newApartments = apartments;
    newApartments[id].reviews.push(review);
    const db = getDatabase();

    const updates = {};
    updates['/apartments'] = newApartments;

    update(ref(db), updates);

    setApartments(newApartments);
    setApartment(newApartments[id]);
  };

  console.log('apartments', apartments);

  return (
    <>
     {apartment && (
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
     )}
    </>
  );
};

export default ApartmentReview;

