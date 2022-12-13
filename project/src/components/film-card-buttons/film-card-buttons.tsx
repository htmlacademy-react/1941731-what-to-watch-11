import {Link} from 'react-router-dom';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus} from '../../const';
import {fetchMyListAction, fetchUpdateMyListAction} from '../../store/api-actions';
import {store} from '../../store';

type FilmCardButtonsProps = {
  isPromo?: boolean;
};

function FilmCardButtons(props: FilmCardButtonsProps) {
  React.useEffect(() => {
    store.dispatch(fetchMyListAction());
  }, []);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const currentFilm = useAppSelector((state) => state.currentFilm);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const canSubmitReview = (isAuthorized) && (!props.isPromo);
  const myList = useAppSelector((state) => state.myList);
  const dispatch = useAppDispatch();

  if (currentFilm === undefined) {
    return null;
  }
  return (
    <div className="film-card__buttons">
      <Link to={`/player/${currentFilm.id}`} className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      {isAuthorized ?
        (
          <button
            onClick={() => {
              dispatch(fetchUpdateMyListAction({
                filmId: currentFilm.id,
                isFavourite: currentFilm.isFavorite,
              }));
            }} className="btn btn--list film-card__button" type="button"
          >
            {currentFilm.isFavorite ? '✓' :
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>}
            <span>My list</span>
            <span className="film-card__count">{myList.length}</span>
          </button>
        ) :
        (
          <Link to={AppRoute.SignIn} className="btn btn--list film-card__button">

            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>
            <span>My list</span>
            <span className="film-card__count">0</span>
          </Link>
        )}
      {canSubmitReview && (
        <Link to="review" className="btn film-card__button">
          Add review
        </Link>
      )}
    </div>
  );
}

export default FilmCardButtons;
