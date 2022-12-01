import {films} from '../mocks/films';
import {createReducer} from '@reduxjs/toolkit';
import {genreChange, getFilmList} from './action';

const initialState = {
  currentGenre: 'All genres',
  filmList: films
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getFilmList, (state) => {
      state.filmList = state.filmList.filter((filmList) => filmList.genre === state.currentGenre);
    })
    .addCase(genreChange, (state,action) => {
      state.currentGenre = action.payload;
    });
});


export {reducer};
