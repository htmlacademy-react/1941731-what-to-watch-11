import React from 'react';
import Review from '../review/review';
import { fetchReviewsAction } from '../../store/api-actions';
import { Film } from '../../types/films';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setReviews } from '../../store/action';

type MoviePageReviewsProps = {
  currentFilm: Film;
};

function MoviePageReviews(props: MoviePageReviewsProps) {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (props.currentFilm.id) {
      dispatch(setReviews([]));
      dispatch(fetchReviewsAction(props.currentFilm.id.toString()));
    }
  }, [dispatch, props.currentFilm.id]);
  const reviews = useAppSelector((state) => state.currentReviews);
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews?.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}

export default MoviePageReviews;
