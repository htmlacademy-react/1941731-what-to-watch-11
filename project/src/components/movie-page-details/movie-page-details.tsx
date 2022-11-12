import {Film} from '../../types/films';
import React from 'react';

type MoviePageDetailsProps = {
  currentFilm: Film;
}

function MoviePageDetails(props: MoviePageDetailsProps) {

  function renderActor(actor:string){
    return (<React.Fragment> {actor}<br/> </React.Fragment>);
  }
  return(
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{props.currentFilm.overview.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {props.currentFilm.overview.starring.map((actor) =>(
              renderActor(actor)
            ))}

          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{props.currentFilm.runTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{props.currentFilm.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{props.currentFilm.date}</span>
        </p>
      </div>
    </div>
  );
}

export default MoviePageDetails;
