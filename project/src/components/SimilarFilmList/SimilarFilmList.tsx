import SmallFilmCard from '../../components/small-film-card/small-film-card';
import {Film} from '../../types/films';
import {films} from '../../mocks/films';
import React from 'react';
import {MAX_SIMILAR_FILMS} from '../../const';


type SimilarFilmListProps = {
  currentFilm: Film;
}

function SimilarFilmList({currentFilm} : SimilarFilmListProps): JSX.Element {
  const similarFilms = [];
  for (let i = 0; i < films.length; i++){

    if(currentFilm.genre === films[i].genre && currentFilm.id !== films[i].id && similarFilms.length !== MAX_SIMILAR_FILMS)
    {
      {similarFilms.push(
        <SmallFilmCard
          player={films[i].player}
          key ={films[i].id}
          filmName={films[i].filmName}
          srcImg={films[i].srcImg}
          id={films[i].id}
        />);}}
  }
  return(
    <div className="catalog__films-list">
      {similarFilms}
    </div>
  );
}


export default SimilarFilmList;
