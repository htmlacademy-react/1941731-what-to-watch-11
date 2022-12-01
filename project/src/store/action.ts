import {createAction} from '@reduxjs/toolkit';


export const genreChange = createAction('filmList/genreChange', (currentGenre:string) => ({
  payload: currentGenre
}));
export const getFilmList = createAction('filmList/getFilmList');
