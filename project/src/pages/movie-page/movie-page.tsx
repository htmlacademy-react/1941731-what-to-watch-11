import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';

import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import UserBlock from '../../components/user-block/user-block';
import Wrapper from '../../components/wrapper/wrapper';
import MoviePageTabs from '../../components/movie-page-tabs/movie-page-tabs';
import SimilarFilmList from '../../components/similar-film-list/similar-film-list';
import {useAppSelector} from '../../hooks';
import {fetchCurrentFilmInfoAction, fetchReviewsAction, fetchSimilarFilmsAction} from '../../store/api-actions';
import {store} from '../../store';
import {AuthorizationStatus} from '../../const';

function MoviePage(): JSX.Element | null {
  const params = useParams();

  function getCurrentId() {
    return params.id;
  }
  const [currentId, setCurrentId] = useState(getCurrentId);

  React.useEffect(() => {
    setCurrentId(getCurrentId());
  }, [params.id]);

  React.useEffect(() => {
    if (currentId) {
      store.dispatch(fetchCurrentFilmInfoAction(currentId));
      store.dispatch(fetchSimilarFilmsAction(currentId));
      store.dispatch(fetchReviewsAction(currentId));
    }
  }, [currentId]);


  const reviews = useAppSelector((state) => state.currentReviews);
  const currentFilm = useAppSelector((state) => state.currentFilm);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const canSubmitReview = authorizationStatus === AuthorizationStatus.Auth;

  if (currentFilm === undefined) {return (null);}
  {
    return (
      <Wrapper>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={currentFilm.backgroundImage} alt={currentFilm.name}/>
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <Header additionalClass={'film-card__head'}>
              <UserBlock/>
            </Header>

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{currentFilm.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{currentFilm.genre}</span>
                  <span className="film-card__year">{currentFilm.released}</span>
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
                  {canSubmitReview &&
                    <Link to="review" className="btn film-card__button">Add review</Link>}
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={currentFilm.posterImage} alt={`${currentFilm.name} poster`} width="218" height="327"/>
              </div>

              <MoviePageTabs currentFilm={currentFilm} reviews={reviews}/>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <SimilarFilmList />
          </section>

          <Footer/>

        </div>
      </Wrapper>
    );
  }
}
export default MoviePage;
