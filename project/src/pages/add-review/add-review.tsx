import React from 'react';
import {useParams} from 'react-router-dom';

import AddComment from '../../components/add-comment/add-comment';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Header from '../../components/header/header';
import UserBlock from '../../components/user-block/user-block';
import Wrapper from '../../components/wrapper/wrapper';
import {useAppSelector} from '../../hooks';


function AddReview(): JSX.Element | null {
  const params = useParams();
  const films = useAppSelector((state) => state.films);
  const currentFilm = films.find((film) => film.id.toString() === params.id);
  if (currentFilm === undefined) {return (null);}
  {
    return (
      <Wrapper>
        <section className="film-card film-card--full">
          <div className="film-card__header">
            <div className="film-card__bg">
              <img src={films[0].backgroundImage} alt={films[0].name}/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header>
              <Breadcrumbs id={currentFilm.id} filmName={currentFilm.name}/>
              <UserBlock/>
            </Header>

            <div className="film-card__poster film-card__poster--small">
              <img src={currentFilm.posterImage} alt={`${currentFilm.name} poster`} width="218" height="327"/>
            </div>
          </div>

          <div className="add-review">
            <AddComment filmId = {currentFilm.id}/>
          </div>
        </section>
      </Wrapper>
    );
  }
}

export default AddReview;
