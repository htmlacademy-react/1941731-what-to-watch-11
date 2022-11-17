import SmallFilmCard from '../../components/small-film-card/small-film-card';
import {Film, Films} from '../../types/films';
import {films} from '../../mocks/films';
import React, {useMemo} from 'react';
import {MAX_SIMILAR_FILMS} from '../../const';

type SimilarFilmListProps = {
  currentFilm: Film;
}

function SimilarFilmList({currentFilm} : SimilarFilmListProps): JSX.Element {
  function getSimilarFilms(film: Film){
    if(film.genre === currentFilm.genre){
      return film;
    }
  }
  function getShownSimilarFilms(similarFilms: Films){
    const shownSimilarFilms = similarFilms.filter((film) => film.id !== currentFilm.id);
    return shownSimilarFilms.slice(0, MAX_SIMILAR_FILMS);
  }
  const similarFilms = useMemo(() => films.filter(getSimilarFilms),[currentFilm.genre]);
  const shownSimilarFilms = getShownSimilarFilms(similarFilms);
  return(
    <div className="catalog__films-list">
      {shownSimilarFilms.map((film) => (
        <SmallFilmCard
          currentFilm={film}
          key ={film.id}
        />
      ))}
    </div>
  );
}


export default SimilarFilmList;
