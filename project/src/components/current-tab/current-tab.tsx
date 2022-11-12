import MoviePageOverview from '../movie-page-overview/movie-page-overview';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import React from 'react';
import {Film} from '../../types/films';

type currentTabProps = {
  currentFilm: Film;
  activeItem: string;
}
function CurrentTab(props: currentTabProps): JSX.Element{
  switch (props.activeItem) {
    case 'Overview': {
      return <MoviePageOverview overview={props.currentFilm.overview}/>;
      break;
    }
    case 'Details': {
      return <MoviePageDetails currentFilm={props.currentFilm}/>;
      break;
    }
    case 'Reviews': {
      return <MoviePageReviews reviews={props.currentFilm.reviews}/>;
      break;
    }
    default:
      return <MoviePageOverview overview={props.currentFilm.overview}/>;
  }
}

export default CurrentTab;
