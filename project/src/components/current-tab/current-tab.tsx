import MoviePageOverview from '../movie-page-overview/movie-page-overview';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import React from 'react';
import {Film} from '../../types/films';
import {Reviews} from '../../types/reviews';

type currentTabProps = {
  currentFilm: Film;
  reviews: Reviews;
  activeItem: string;
}
function CurrentTab(props: currentTabProps): JSX.Element{
  switch (props.activeItem) {
    case 'Overview': {
      return <MoviePageOverview currentFilm={props.currentFilm}/>;
    }
    case 'Details': {
      return <MoviePageDetails currentFilm={props.currentFilm}/>;
    }
    case 'Reviews': {
      return <MoviePageReviews reviews={props.reviews}/>;
    }
    default:
      return <MoviePageOverview currentFilm={props.currentFilm}/>;
  }
}

export default CurrentTab;
