import React from 'react';
import {Films} from '../../types/films';
import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import GenreList from '../../components/genres-list/genre-list';
import {Genres} from '../../const';
import Header from '../../components/header/header';
import UserBlock from '../../components/user-block/user-block';
import Wrapper from '../../components/wrapper/wrapper';


type MainProps = {
  films: Films;
}

function Main({films} : MainProps): JSX.Element {

  return (
    <Wrapper>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={films[0].backgroundSrc} alt={films[0].filmName}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header additionalClass={'film-card__head'}>
          <UserBlock/>
        </Header>


        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={films[0].srcImg} alt={films[0].filmName} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{films[0].filmName}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{films[0].genre}</span>
                <span className="film-card__year">{films[0].date}</span>
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

          <GenreList genres={Genres}/>

          <FilmList films = {films}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </Wrapper>
  );
}

export default Main;
