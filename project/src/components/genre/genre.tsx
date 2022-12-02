import React from 'react';
import {useAppDispatch} from '../../hooks';
import {genreChange, getFilmList, getInitialFilmList, showDefaultFilmList} from '../../store/action';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type GenreProps = {
  genreName: string;
}

function Genre(props: GenreProps) {
  const dispatch = useAppDispatch();

  return(
    <li className="catalog__genres-item catalog__genres-item">
      <Link to={AppRoute.Main} className="catalog__genres-link"
        onClick={() => {
          dispatch(genreChange(props.genreName));
          if (props.genreName === 'All genres'){
            dispatch(getInitialFilmList());
          } else {
            dispatch(getFilmList());
          }
          dispatch(showDefaultFilmList());
        }}
      >{props.genreName}
      </Link>
    </li>
  );
}

export default Genre;
