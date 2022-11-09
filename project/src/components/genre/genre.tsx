import React from 'react';

type GenreProps = {
  genreName: string;
}

function Genre(props: GenreProps) {
  return(
    <li className="catalog__genres-item catalog__genres-item">
      <a href="#" className="catalog__genres-link">{props.genreName}</a>
    </li>
  );
}

export default Genre;
