import { Film } from '../../types/films';
import React from 'react';
import {MINUTES_IN_HOUR} from '../../const';

type MoviePageDetailsProps = {
  currentFilm: Film;
};

function MoviePageDetails(props: MoviePageDetailsProps) {
  function getRunTime(runTime: number) {
    return `${Math.floor(runTime / MINUTES_IN_HOUR)}h ${runTime % MINUTES_IN_HOUR}m`;
  }

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{props.currentFilm.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {props.currentFilm.starring.map((actor) => (
              <React.Fragment key={actor}>
                {' '}
                {actor}
                <br />{' '}
              </React.Fragment>
            ))}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{getRunTime(props.currentFilm.runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{props.currentFilm.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{props.currentFilm.released}</span>
        </p>
      </div>
    </div>
  );
}

export default MoviePageDetails;
