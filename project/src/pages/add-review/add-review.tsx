import {Films} from '../../types/films';
import {useParams} from 'react-router-dom';
import React from 'react';
import AddComment from '../../components/add-comment/add-comment';
import {Link} from 'react-router-dom';
import HeaderLogo from '../../components/header-logo/header-logo';

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

          <header className="page-header">
            <HeaderLogo/>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${currentFilm.id}`} className="breadcrumbs__link">{currentFilm.filmName}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

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
