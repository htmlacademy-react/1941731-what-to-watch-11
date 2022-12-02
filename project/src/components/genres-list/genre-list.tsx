import Genre from '../genre/genre';
import {Films} from '../../types/films';
import React, {useState} from 'react';

type GenreListProps = {
  films : Films;
}

function GenreList({films} : GenreListProps): JSX.Element {
  function getGenres() {
    const genreList = ['All genres'];
    films.forEach((film) => {
      if (!genreList.includes(film.genre)) {
        genreList.push(film.genre);
      }
    });
    return genreList;
  }
  const [genres, setGenres] = useState(() => {
    const initialState = getGenres();
    return initialState;
  });

  React.useEffect(() => {
    setGenres(getGenres());
  }, [films]);

  return(
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => (
          <Genre key ={genre} genreName={genre}/>
        ))
      }
    </ul>
  );
}
export default GenreList;
