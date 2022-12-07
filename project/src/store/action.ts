import {createAction} from '@reduxjs/toolkit';
import {Films} from '../types/films';
import {AuthorizationStatus} from '../const';

export const genreChange = createAction('filmList/genreChange', (currentGenre:string) => ({
  payload: currentGenre
}));
export const getFilmList = createAction('filmList/getFilmList');

export const getInitialFilms = createAction('filmList/getInitialFilmList');

export const showMoreFilms = createAction('filmList/showMoreFilms');

export const showDefaultAmountOfFilms = createAction('filmList/showDefaultFilmList');

export const loadFilms = createAction<Films>('data/loadFilms');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setQuestionsDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('game/setError');
