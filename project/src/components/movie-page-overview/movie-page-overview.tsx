import React from 'react';
import Wrapper from '../wrapper/wrapper';
import {FilmOverview} from '../../types/films';
import {AMOUNT_OF_OVERVIEW_ACTORS} from '../../const';


type MoviePageOverviewProps = {
  overview: FilmOverview;
}

function MoviePageOverview(props: MoviePageOverviewProps) {
  let shownActors = '';
  for (let i = 0; i < AMOUNT_OF_OVERVIEW_ACTORS; i++){
    shownActors += `${props.overview.starring[i]} `;
  }
  return(
    <Wrapper>
      <div className="film-rating">
        <div className="film-rating__score">{props.overview.rating.score}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{props.overview.rating.result}</span>
          <span className="film-rating__count">{props.overview.rating.amountOfReviews}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>
          {props.overview.description}
        </p>
        <p className="film-card__director"><strong>{props.overview.director}</strong></p>

        <p className="film-card__starring"><strong>{`${shownActors} and others`}</strong></p>
      </div>
    </Wrapper>
  );
}

export default MoviePageOverview;
