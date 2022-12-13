import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import UserBlock from '../../components/user-block/user-block';
import Wrapper from '../../components/wrapper/wrapper';
import MoviePageTabs from '../../components/movie-page-tabs/movie-page-tabs';
import SimilarFilmList from '../../components/similar-film-list/similar-film-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';
import {fetchCurrentFilmInfoAction} from '../../store/api-actions';

function MoviePage(): JSX.Element | null {
  const params = useParams();
  const dispatch = useAppDispatch();
  const currentFilm = useAppSelector((state) => state.currentFilm);

  useEffect(() => {
    if (params.id) {
      dispatch(fetchCurrentFilmInfoAction(Number(params.id)));
    }
  }, [dispatch, params.id]);

  if (currentFilm === undefined) {
    return null;
  }

  return (
    <Wrapper>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header additionalClass={'film-card__head'}>
            <UserBlock />
          </Header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.released}</span>
              </p>

              <FilmCardButtons />
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm.posterImage} alt={`${currentFilm.name} poster`} width="218" height="327" />
            </div>

            <MoviePageTabs currentFilm={currentFilm} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          {params.id && <SimilarFilmList currentId={params.id} />}
        </section>

        <Footer />
      </div>
    </Wrapper>
  );
}

export default MoviePage;
