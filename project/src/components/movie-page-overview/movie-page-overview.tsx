import React from 'react';
import Wrapper from '../wrapper/wrapper';
import {AMOUNT_OF_OVERVIEW_ACTORS, Rating} from '../../const';
import { Film } from '../../types/films';

type MoviePageOverviewProps = {
  currentFilm: Film;
};
function MoviePageOverview(props: MoviePageOverviewProps) {
  function getFilmRatingLevel(filmRating: number) {
    if (filmRating <= Rating.Bad) {
      return 'Bad';
    }
    if (filmRating <= Rating.Normal) {
      return 'Normal';
    }
    if (filmRating <= Rating.Good) {
      return 'Good';
    }
    if (filmRating < Rating.Awesome) {
      return 'Very good';
    }
    if (filmRating === Rating.Awesome) {
      return 'Awesome';
    }
  }
  const shownActors = props.currentFilm.starring.slice(0, AMOUNT_OF_OVERVIEW_ACTORS);
  return (
    <Wrapper>
      <div className="film-rating">
        <div className="film-rating__score">{props.currentFilm.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getFilmRatingLevel(props.currentFilm.rating)}</span>
          <span className="film-rating__count">{props.currentFilm.scoresCount}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{props.currentFilm.description}</p>
        <p className="film-card__director">
          <strong>{props.currentFilm.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>{`${shownActors.join(', ')} and others`}</strong>
        </p>
      </div>
    </Wrapper>
  );
}

export default MoviePageOverview;
