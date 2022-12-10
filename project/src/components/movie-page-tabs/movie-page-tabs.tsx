import React, { useState } from 'react';
import CurrentTab from '../current-tab/current-tab';
import { Film } from '../../types/films';
import classNames from 'classnames';
import { TABS } from '../../const';

type MoviePageTabsProps = {
  currentFilm: Film;
};

function MoviePageTabs(props: MoviePageTabsProps): JSX.Element {
  const [activeItem, setActiveItem] = useState(TABS.overview);
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li
            className={classNames('film-nav__item', {
              'film-nav__item--active': activeItem === TABS.overview,
            })}>
            <div
              onClick={() => {
                setActiveItem(TABS.overview);
              }}
              className="film-nav__link">
              Overview
            </div>
          </li>
          <li
            className={classNames('film-nav__item', {
              'film-nav__item--active': activeItem === TABS.details,
            })}>
            <div
              onClick={() => {
                setActiveItem(TABS.details);
              }}
              className="film-nav__link">
              Details
            </div>
          </li>
          <li
            className={classNames('film-nav__item', {
              'film-nav__item--active': activeItem === TABS.reviews,
            })}>
            <div
              onClick={() => {
                setActiveItem(TABS.reviews);
              }}
              className="film-nav__link">
              Reviews
            </div>
          </li>
        </ul>
      </nav>
      <CurrentTab activeItem={activeItem} currentFilm={props.currentFilm} />
    </div>
  );
}
export default MoviePageTabs;
