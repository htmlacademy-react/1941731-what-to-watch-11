import React from 'react';
import { Films} from '../../types/films';
import FilmList from '../../components/film-list/film-list';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import HeaderLogo from '../../components/header-logo/header-logo';

type MoviePageProps = {
  films: Films;
}

function MoviePage({films} : MoviePageProps): JSX.Element | null {
  const params = useParams();
  const currentFilm = films.find((film) => film.id === params.id);

  if (currentFilm === undefined) {return (null);}
  else {
    return (

      <React.Fragment>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={currentFilm.backgroundSrc} alt={currentFilm.filmName}/>
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <header className="page-header film-card__head">
              <HeaderLogo/>

              <ul className="user-block">
                <li className="user-block__item">
                  <div className="user-block__avatar">
                    <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                  </div>
                </li>
                <li className="user-block__item">
                  <a className="user-block__link">Sign out</a>
                </li>
              </ul>
            </header>

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{currentFilm.filmName}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{currentFilm.genre}</span>
                  <span className="film-card__year">{currentFilm.date}</span>
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
                  <Link to="add-review" className="btn film-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={currentFilm.posterSrc} alt={`${currentFilm.filmName} poster`} width="218" height="327"/>
              </div>

              <div className="film-card__desc">
                <nav className="film-nav film-card__nav">
                  <ul className="film-nav__list">
                    <li className="film-nav__item film-nav__item--active">
                      <a href="#" className="film-nav__link">Overview</a>
                    </li>
                    <li className="film-nav__item">
                      <a href="#" className="film-nav__link">Details</a>
                    </li>
                    <li className="film-nav__item">
                      <a href="#" className="film-nav__link">Reviews</a>
                    </li>
                  </ul>
                </nav>

                <div className="film-rating">
                  <div className="film-rating__score">{currentFilm.overview.rating.score}</div>
                  <p className="film-rating__meta">
                    <span className="film-rating__level">{currentFilm.overview.rating.result}</span>
                    <span className="film-rating__count">{currentFilm.overview.rating.amountOfReviews}</span>
                  </p>
                </div>

                <div className="film-card__text">
                  <p>
                    {currentFilm.overview.description}
                  </p>
                  <p className="film-card__director"><strong>{currentFilm.overview.director}</strong></p>

                  <p className="film-card__starring"><strong>{currentFilm.overview.starring}</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <FilmList films={films}/>
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}
export default MoviePage;
