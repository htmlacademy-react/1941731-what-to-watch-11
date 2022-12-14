import Genre from '../genre/genre';
import {Films} from '../../types/films';
import React, {useCallback, useState} from 'react';
import {MAX_GENRE_LIST} from '../../const';

type GenreListProps = {
  films: Films;
};

function GenreList({ films }: GenreListProps): JSX.Element {
  const getGenres = useCallback(()=> {
    const genreList = ['All genres'];
    films.forEach((film) => {
      if (!genreList.includes(film.genre)) {
        genreList.push(film.genre);
      }
    });
    if (genreList.length > MAX_GENRE_LIST) {
      return genreList.slice(0, MAX_GENRE_LIST);
    }
    return genreList;
  }, [films]);
  const [genres, setGenres] = useState(getGenres);

  React.useEffect(() => {
    setGenres(getGenres());
  }, [getGenres]);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <Genre key={genre} genreName={genre} />
      ))}
    </ul>
  );
}
export default GenreList;
