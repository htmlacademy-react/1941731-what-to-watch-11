import {createAction} from '@reduxjs/toolkit';


export const genreChange = createAction('filmList/genreChange', (currentGenre:string) => ({
  payload: currentGenre
}));
export const getFilmList = createAction('filmList/getFilmList');

export const getInitialFilmList = createAction('filmList/getInitialFilmList');

export const showMoreFilms = createAction('filmList/showMoreFilms');

export const showDefaultFilmList = createAction('filmList/showDefaultFilmList');
