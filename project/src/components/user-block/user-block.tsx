import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { logoutAction } from '../../store/api-actions';

function UserBlock() {
  const [isLogged, setIsLogged] = useState(false);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  React.useEffect(() => {
    setIsLogged(false);
    if (authorizationStatus === 'AUTH') {
      setIsLogged(true);
    }
  }, [authorizationStatus]);
  const dispatch = useAppDispatch();

  return (
    <ul className="user-block">
      <li className="user-block__item">
        {isLogged && (
          <div className="user-block__avatar">
            <Link to={AppRoute.MyList}><img src="img/avatar.jpg" alt="User avatar" width="63" height="63" /></Link>
          </div>
        )}
      </li>
      <li className="user-block__item">
        {isLogged ? (
          <div
            className="user-block__link"
            onClick={() => {
              dispatch(logoutAction());
            }}
          >
            Sign out
          </div>
        ) : (
          <Link to={AppRoute.SignIn} className="user-block__link">
            Sign in
          </Link>
        )}
      </li>
    </ul>
  );
}

export default UserBlock;
