import React from 'react';

function TestimonialCard({ image, name, comment }) {
  return (
    <div className="comment">
      <img src={image} className="img-people" alt={name} />
      <h4 className="people-name">{name}</h4>
      <p className="people-comment">{comment}</p>
    </div>
  );
}

export default TestimonialCard;
