import SmallFilmCard from '../../components/small-film-card/small-film-card';
import {Films} from '../../types/films';
import {MAX_SHOWN_FILMS} from '../../const';
import {useAppSelector} from '../../hooks';


type FilmListProps = {
  films: Films;
}

function FilmList({films} : FilmListProps): JSX.Element {
  const currentGenre = useAppSelector((state) => state.currentGenre);

  function getFilms(genre:string){
    if (genre === 'All genres'){
      return films;
    }
    return films.filter((film) => film.genre === currentGenre);
  }
  const shownFilms = getFilms(currentGenre).slice(0,MAX_SHOWN_FILMS);
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
