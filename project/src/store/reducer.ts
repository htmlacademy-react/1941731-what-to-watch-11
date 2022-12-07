import {Film, Films} from '../types/films';
import {Reviews} from '../types/reviews';
import {createReducer} from '@reduxjs/toolkit';
import {
  genreChange,
  getFilmList,
  showMoreFilms,
  showDefaultAmountOfFilms,
  getInitialFilms,
  loadFilms,
  requireAuthorization,
  setError,
  setFilmsDataLoadingStatus
} from './action';
import {MAX_SHOWN_FILMS, AuthorizationStatus} from '../const';

type initialState = {
  currentGenre: string;
  maxShownFilms: number;
  films: Films;
  shownFilms: Films;
  reviews: Reviews;
  authorizationStatus: AuthorizationStatus;
  isFilmsDataLoading: boolean;
  error: string | null;
};
const initialState: initialState = {
  currentGenre: 'All genres',
  maxShownFilms: MAX_SHOWN_FILMS,
  films: [],
  shownFilms: [],
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isFilmsDataLoading: false,
  error: null
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(getFilmList, (state) => {
      state.shownFilms = state.films.filter((film: Film) => film.genre === state.currentGenre);
    })
    .addCase(getInitialFilms, (state) => {
      state.shownFilms = state.films;
    })
    .addCase(genreChange, (state,action) => {
      state.currentGenre = action.payload;
    })
    .addCase(showMoreFilms, (state,action) => {
      state.maxShownFilms += MAX_SHOWN_FILMS;
    })
    .addCase(showDefaultAmountOfFilms, (state,action) => {
      state.maxShownFilms = MAX_SHOWN_FILMS;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});


export {reducer};
