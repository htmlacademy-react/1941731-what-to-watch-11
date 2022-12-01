import Genre from '../genre/genre';
import {Films} from '../../types/films';

type GenreListProps = {
  films : Films;
}

function GenreList({films} : GenreListProps): JSX.Element {
  const genres = ['All genres'];

  films.forEach((film) => {
    if (!genres.includes(film.genre)){
      genres.push(film.genre);
    }
  });
  return(
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <Genre key ={genre} genreName={genre}/>
      ))}
    </ul>
  );
}
export default GenreList;
