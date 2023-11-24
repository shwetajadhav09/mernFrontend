// ReviewList.js

import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            <strong>{review.name}</strong>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
