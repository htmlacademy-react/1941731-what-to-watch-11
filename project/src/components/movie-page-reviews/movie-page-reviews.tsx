import {Reviews} from '../../types/reviews';
import React from 'react';
import Review from '../review/review';


type MoviePageReviewsProps = {
  reviews: Reviews;
}

function MoviePageReviews(props: MoviePageReviewsProps) {
  return(
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {props.reviews.map((review) => (
          <Review key={review.id} review={review}/>
        ))}
      </div>
    </div>
  );
}

export default MoviePageReviews;
