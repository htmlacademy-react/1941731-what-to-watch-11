import {Link} from 'react-router-dom';
import React from 'react';
type BreadCrumbsPropsType = {
  id: string;
  filmName:string;
}

function Breadcrumbs(props : BreadCrumbsPropsType) {
  return(
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`/films/${props.id}`} className="breadcrumbs__link">{props.filmName}</Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );

}

export default Breadcrumbs;
