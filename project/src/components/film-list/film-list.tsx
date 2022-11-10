
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import {Films} from '../../types/films';


type FilmListProps = {
  films: Films;
}

function FilmList({films} : FilmListProps): JSX.Element {


  return(
    <div className="catalog__films-list">
      {films.map((film) => (
        <SmallFilmCard
          player={film.player}
          key ={film.id}
          filmName={film.filmName}
          srcImg={film.srcImg}
          id={film.id}
        />
      ))}
    </div>
  );
}


export default FilmList;
