import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardReview = (props) => {
  return (
    <div className="container ex-pad">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Monthly Rent</th>
          <th scope="col">Bedrooms</th>
          <th scope="col">Bathrooms</th>
          <th scope="col">Square Feet</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">2,000-3,000</th>
          <td>Studio-5 bd</td>
          <td>1-5 ba</td>
          <td>500-1400 sq ft</td>
        </tr>
      </tbody>
    </table>

    <section className="small-card p-2">
      <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Review title</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Review title</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Review title</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Review title</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  </div>
  );
};

export default CardReview;
