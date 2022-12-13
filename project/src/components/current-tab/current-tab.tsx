import MoviePageOverview from '../movie-page-overview/movie-page-overview';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import React from 'react';
import { Film } from '../../types/films';

type currentTabProps = {
  currentFilm: Film;
  activeItem: string;
};
function CurrentTab(props: currentTabProps): JSX.Element {
  switch (props.activeItem) {
    case 'Overview': {
      return <MoviePageOverview currentFilm={props.currentFilm} />;
    }
    case 'Details': {
      return <MoviePageDetails currentFilm={props.currentFilm} />;
    }
    case 'Reviews': {
      return <MoviePageReviews currentFilm={props.currentFilm} />;
    }
    default:
      return <MoviePageOverview currentFilm={props.currentFilm} />;
  }
}

export default CurrentTab;
