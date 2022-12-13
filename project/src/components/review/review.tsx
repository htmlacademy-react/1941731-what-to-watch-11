import React from 'react';
import { Review } from '../../types/reviews';
import Moment from 'react-moment';
  type ReviewProps = {
  review: Review;
};
function ReviewItem(props: ReviewProps) {

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{props.review.comment}</p>
        <footer className="review__details">
          <cite className="review__author">{props.review.user.name}</cite>
          <Moment format="MMMM DD, YYYY" className="review__date">
            {props.review.date}
          </Moment>
        </footer>
      </blockquote>

      <div className="review__rating">{props.review.rating}</div>
    </div>
  );
}
export default ReviewItem;
