import SmallFilmCard from '../../components/small-film-card/small-film-card';
import {Film} from '../../types/films';
import {films} from '../../mocks/films';
import React, {useMemo} from 'react';
import {MAX_SIMILAR_FILMS} from '../../const';

type SimilarFilmListProps = {
  currentFilm: Film;
}

function SimilarFilmList({currentFilm} : SimilarFilmListProps): JSX.Element {
  function getSimilarFilms(film: Film){
    if(film.genre === currentFilm.genre && currentFilm.id !== film.id){
      return film;
    }
  }
  const similarFilms = useMemo(() => films.filter(getSimilarFilms), [getSimilarFilms]);
  const shownSimilarFilms = similarFilms.slice(0, MAX_SIMILAR_FILMS);
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
