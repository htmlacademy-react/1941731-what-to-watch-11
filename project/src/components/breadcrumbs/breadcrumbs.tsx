import { Link, generatePath } from 'react-router-dom';
import React from 'react';
import {AppRoute} from '../../const';
type BreadCrumbsPropsType = {
  id: number;
  filmName: string;
};

function Breadcrumbs(props: BreadCrumbsPropsType) {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={generatePath(AppRoute.MoviePage, { id: props.id.toString() })} className="breadcrumbs__link">
            {props.filmName}
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <div className="breadcrumbs__link">Add review</div>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
