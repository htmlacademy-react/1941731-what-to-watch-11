import React from 'react';
import {useParams} from 'react-router-dom';

import {Films} from '../../types/films';
import AddComment from '../../components/add-comment/add-comment';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Header from '../../components/header/header';
import UserBlock from '../../components/user-block/user-block';
import Wrapper from '../../components/wrapper/wrapper';

type AddReviewProps = {
  films: Films;
}
function AddReview({films} : AddReviewProps): JSX.Element | null {
  const params = useParams();
  const currentFilm = films.find((film) => film.id === params.id);
  if (currentFilm === undefined) {return (null);}
  {
    return (
      <Wrapper>
        <section className="film-card film-card--full">
          <div className="film-card__header">
            <div className="film-card__bg">
              <img src={films[0].backgroundSrc} alt={films[0].filmName}/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header>
              <Breadcrumbs id={currentFilm.id} filmName={currentFilm.filmName}/>
              <UserBlock/>
            </Header>

            <div className="film-card__poster film-card__poster--small">
              <img src={currentFilm.srcImg} alt={`${currentFilm.filmName} poster`} width="218" height="327"/>
            </div>
          </div>

          <div className="add-review">
            <AddComment/>
          </div>
        </section>
      </Wrapper>
    );
  }
}

export default AddReview;
