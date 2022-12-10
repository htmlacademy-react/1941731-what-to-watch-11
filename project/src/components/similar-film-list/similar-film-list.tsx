import SmallFilmCard from '../../components/small-film-card/small-film-card';

import React from 'react';
import { useAppSelector } from '../../hooks';
import { MAX_SIMILAR_FILMS } from '../../const';

type SimilarFilmListProps = {
  currentId: string;
};
function SimilarFilmList(props: SimilarFilmListProps): JSX.Element {
  const similarFilms = useAppSelector((state) => state.similarFilms);
  const shownFilms = similarFilms?.filter((film) => film.id !== +props.currentId);
  const slicedFilms = shownFilms?.slice(0, MAX_SIMILAR_FILMS);
  return (
    <div className="catalog__films-list">
      {slicedFilms?.map((film) => (
        <SmallFilmCard currentFilm={film} key={film.id} />
      ))}
    </div>
  );
}

export default SimilarFilmList;
