import {createAction} from '@reduxjs/toolkit';
import {Films, Film} from '../types/films';
import {AuthorizationStatus, AppRoute} from '../const';
import {Reviews} from '../types/reviews';


export const genreChange = createAction('filmList/genreChange', (currentGenre:string) => ({
  payload: currentGenre
}));
export const getFilmList = createAction('filmList/getFilmList');

export const getInitialFilms = createAction('filmList/getInitialFilmList');

export const showMoreFilms = createAction('filmList/showMoreFilms');

export const showDefaultAmountOfFilms = createAction('filmList/showDefaultFilmList');

export const loadFilms = createAction<Films>('data/loadFilms');

export const loadPromo = createAction<Film>('data/loadPromo');

export const loadCurrentFilmInfo = createAction<Film>('data/filmInfo');

export const loadSimilarFilms = createAction<Films>('data/similarFilms');

export const loadReviews = createAction<Reviews>('data/reviews');

export const saveCurrentRating = createAction('data/rating', (currentRating:number) => ({
  payload: currentRating
}));

export const saveCurrentReviewText = createAction('data/comment', (currentReviewText:string) => ({
  payload: currentReviewText
}));

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setQuestionsDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('app/setError');

export const redirectToRoute = createAction<AppRoute | string>('app/redirectToRoute');
