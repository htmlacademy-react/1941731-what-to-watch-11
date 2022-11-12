import React from 'react';
import {filmReview} from '../../types/films';
type ReviewProps = {
  review: filmReview;
}
function Review(props: ReviewProps) {
  return(
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{props.review.text}
        </p>
        <footer className="review__details">
          <cite className="review__author">{props.review.author}</cite>
          <time className="review__date" dateTime="2016-12-24">{props.review.date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{props.review.rating}</div>
    </div>
  );
}
export default Review;
