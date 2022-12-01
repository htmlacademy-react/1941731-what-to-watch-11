import {films} from '../mocks/films';
import {createReducer} from '@reduxjs/toolkit';
import {genreChange, getFilmList, showMoreFilms, showDefaultFilmList} from './action';
import {MAX_SHOWN_FILMS} from '../const';

const initialState = {
  currentGenre: 'All genres',
  filmList: films,
  maxShownFilms: MAX_SHOWN_FILMS
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getFilmList, (state) => {
      state.filmList = state.filmList.filter((filmList) => filmList.genre === state.currentGenre);
    })
    .addCase(genreChange, (state,action) => {
      state.currentGenre = action.payload;
    })
    .addCase(showMoreFilms, (state,action) => {
      state.maxShownFilms += MAX_SHOWN_FILMS;
    })
    .addCase(showDefaultFilmList, (state,action) => {
      state.maxShownFilms = MAX_SHOWN_FILMS;
    });
});


export {reducer};
