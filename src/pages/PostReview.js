import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PostReview = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    email: '',
    review: '',
  });

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Use formData for submission or further processing
    console.log(formData);
  };

  return (
    <section>
      <br />
      <h2>Post A Review Here</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="review" className="form-label">
            Review
          </label>
          <textarea
            className="form-control"
            id="review"
            name="review"
            rows="3"
            value={formData.review}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
};

export default PostReview;
