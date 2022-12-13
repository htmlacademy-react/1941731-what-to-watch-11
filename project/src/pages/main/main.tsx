import React, {useEffect} from 'react';
import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import GenreList from '../../components/genres-list/genre-list';
import Header from '../../components/header/header';
import UserBlock from '../../components/user-block/user-block';
import Wrapper from '../../components/wrapper/wrapper';
import ShowMore from '../../components/show-more/show-more';
import { showDefaultAmountOfFilms } from '../../store/action';
import {useAppDispatch, useAppSelector} from '../../hooks';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';
import {fetchPromoAction} from '../../store/api-actions';


function Main(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(showDefaultAmountOfFilms());
    dispatch(fetchPromoAction());
  }, [dispatch]);

  const films = useAppSelector((state) => state.films);
  const currentFilm = useAppSelector((state) => state.currentFilm);
  if (!currentFilm){
    return <p>loading</p>;
  }
  return (
    <Wrapper>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header additionalClass={'film-card__head'}>
          <UserBlock />
        </Header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={currentFilm.posterImage} alt={currentFilm.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.released}</span>
              </p>

              <FilmCardButtons isPromo/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList films={films} />

          <FilmList films={films} />

          <ShowMore/>
        </section>

        <Footer />
      </div>
    </Wrapper>
  );
}

export default Main;
