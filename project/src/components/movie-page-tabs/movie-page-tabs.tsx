import React, {MouseEvent, useState} from 'react';
import CurrentTab from '../current-tab/current-tab';
import {Film} from '../../types/films';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {TABS} from '../../const';
import {Reviews} from '../../types/reviews';

type MoviePageTabsProps = {
  currentFilm: Film;
  reviews: Reviews;
}

function MoviePageTabs(props: MoviePageTabsProps): JSX.Element {

  const [activeItem, setActiveItem] = useState(TABS.firstTab);
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={classNames('film-nav__item', {'film-nav__item--active':(activeItem === TABS.firstTab)})}>
            <Link onClick={({target}: MouseEvent<HTMLAnchorElement>) => {
              setActiveItem(TABS.firstTab);
            }} to={`/films/${props.currentFilm.id}`} className="film-nav__link"
            >Overview
            </Link>
          </li>
          <li className={classNames('film-nav__item', {'film-nav__item--active':(activeItem === TABS.secondTab)})}>
            <Link onClick={({target}: MouseEvent<HTMLAnchorElement>) => {
              setActiveItem(TABS.secondTab);
            }} to={`/films/${props.currentFilm.id}`} className="film-nav__link"
            >Details
            </Link>
          </li>
          <li className={classNames('film-nav__item', {'film-nav__item--active':(activeItem === TABS.thirdTab)})}>
            <Link onClick={({target}: MouseEvent<HTMLAnchorElement>) => {
              setActiveItem(TABS.thirdTab);
            }} to={`/films/${props.currentFilm.id}`} className="film-nav__link"
            >Reviews
            </Link>
          </li>
        </ul>
      </nav>
      <CurrentTab activeItem={activeItem} currentFilm={props.currentFilm} reviews={props.reviews}/>
    </div>
  );
}
export default MoviePageTabs;
