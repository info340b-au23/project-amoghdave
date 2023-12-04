import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardReview = (props) => {
  const { name, beds, baths, sqft, rent, amenities, reviews } = props.apartment;

  return (
    <div className="container ex-pad">
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">Bedrooms</th>
            <td>{beds}</td>
            <th scope="row">Bathrooms</th>
            <td>{baths}</td>
            <th scope="row">Square Feet</th>
            <td>{sqft}</td>
          </tr>
          <tr>
            <th scope="row">Monthly Rent</th>
            <td>{rent}</td>
          </tr>
        </tbody>
      </table>

      <section className="small-card p-2">
        <h3 className="mb-3">Reviews</h3>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {reviews.map((review, index) => (
            <div className="col" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{review.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{review.date}</h6>
                  <p className="card-text">{review.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CardReview;



