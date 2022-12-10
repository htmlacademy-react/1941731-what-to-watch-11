import React from 'react';
import { useAppDispatch } from '../../hooks';
import { genreChange, getFilmList, getInitialFilms, showDefaultAmountOfFilms } from '../../store/action';

type GenreProps = {
  genreName: string;
};

function Genre(props: GenreProps) {
  const dispatch = useAppDispatch();

  return (
    <li className="catalog__genres-item catalog__genres-item">
      <div
        className="catalog__genres-link"
        onClick={() => {
          dispatch(genreChange(props.genreName));
          if (props.genreName === 'All genres') {
            dispatch(getInitialFilms());
          } else {
            dispatch(getFilmList());
          }
          dispatch(showDefaultAmountOfFilms());
        }}>
        {props.genreName}
      </div>
    </li>
  );
}

export default Genre;
