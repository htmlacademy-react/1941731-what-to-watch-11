import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {logoutAction} from '../../store/api-actions';


function UserBlock() {
  let isLogged = false;
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (authorizationStatus === 'AUTH'){
    isLogged = true;
  }
  const dispatch = useAppDispatch();

  return(
    <ul className="user-block">
      <li className="user-block__item">
        {isLogged &&
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>}
      </li>
      <li className="user-block__item">
        {isLogged
          ?
          <a className="user-block__link"
            onClick={() => {
              dispatch(logoutAction());
            }}
          >Sign out
          </a>
          :
          <Link to={AppRoute.SignIn} className="user-block__link">{'Sign in'}</Link>}
      </li>
    </ul>
  );
}

export default UserBlock;
