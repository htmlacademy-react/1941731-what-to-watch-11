
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import {Films} from '../../types/films';
import {MAX_SHOWN_FILMS} from '../../const';


type FilmListProps = {
  films: Films;
}

function FilmList({films} : FilmListProps): JSX.Element {

  const shownFilms = films.slice(0,MAX_SHOWN_FILMS);
  return(
    <div className="catalog__films-list">
      {shownFilms.map((film) => (
        <SmallFilmCard
          currentFilm={film}
          key ={film.id}
        />
      ))}
    </div>
  );
}


export default FilmList;
