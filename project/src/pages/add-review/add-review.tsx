import {Films} from '../../types/films';
import {useParams} from 'react-router-dom';
import React from 'react';
import AddComment from '../../components/add-comment/add-comment';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Header from '../../components/header/header';
import UserBlock from '../../components/user-block/user-block';

type AddReviewProps = {
  films: Films;
}
function AddReview({films} : AddReviewProps): JSX.Element | null {
  const params = useParams();
  const currentFilm = films.find((film) => film.id === params.id);
  if (currentFilm === undefined) {return (null);}
  {
    return (
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
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
    );
  }
}

export default AddReview;
