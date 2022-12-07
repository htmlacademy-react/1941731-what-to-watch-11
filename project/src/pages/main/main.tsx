import React from 'react';
import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import GenreList from '../../components/genres-list/genre-list';
import Header from '../../components/header/header';
import UserBlock from '../../components/user-block/user-block';
import Wrapper from '../../components/wrapper/wrapper';
import ShowMore from '../../components/show-more/show-more';
import {showDefaultAmountOfFilms} from '../../store/action';
import {store} from '../../store';
import {useAppSelector} from '../../hooks';


function Main(): JSX.Element {
  store.dispatch(showDefaultAmountOfFilms());
  const films = useAppSelector((state) => state.films);
  return (
    <Wrapper>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={films[0].backgroundImage} alt={films[0].name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header additionalClass={'film-card__head'}>
          <UserBlock/>
        </Header>


        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={films[0].posterImage} alt={films[0].name} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{films[0].name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{films[0].genre}</span>
                <span className="film-card__year">{films[0].released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList films={films}/>

          <FilmList films = {films}/>

          <ShowMore films={films}/>
        </section>

        <Footer/>
      </div>
    </Wrapper>
  );
}

export default Main;
