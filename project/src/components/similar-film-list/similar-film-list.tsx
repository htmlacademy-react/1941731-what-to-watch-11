import SmallFilmCard from '../../components/small-film-card/small-film-card';


import React from 'react';
import {useAppSelector} from '../../hooks';
import {MAX_SIMILAR_FILMS} from '../../const';


function SimilarFilmList(): JSX.Element {
  const similarFilms = useAppSelector((state) => state.similarFilms);
  const shownFilms = similarFilms?.slice(0,MAX_SIMILAR_FILMS);
  return(
    <div className="catalog__films-list">
      {shownFilms?.map((film) => (
        <SmallFilmCard
          currentFilm={film}
          key ={film.id}
        />
      ))}
    </div>
  );
}


export default SimilarFilmList;
