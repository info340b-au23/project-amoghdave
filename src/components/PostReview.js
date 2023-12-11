import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PostReview = ({ addReview }) => {
  // State to hold form data
  const [formData, setFormData] = useState({
    title: '', // New field for review title
    date: '',  // New field for review date
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

    // Ensure the required fields are filled
    if (!formData.title || !formData.date || !formData.email || !formData.review) {
      alert('Please fill out all fields.');
      return;
    }

    // Call the addReview function with the new review
    addReview({
      title: formData.title,
      date: formData.date,
      content: formData.review,
    });

    // Clear the form after submission
    setFormData({
      title: '',
      date: '',
      email: '',
      review: '',
    });
  };

  return (
    <section>
      <br />
      <h2>Post A Review Here</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Review Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Enter the review title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Review Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
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
            Review Description
          </label>
          <textarea
            className="form-control"
            id="review"
            name="review"
            rows="3"
            placeholder="Write your review here"
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
