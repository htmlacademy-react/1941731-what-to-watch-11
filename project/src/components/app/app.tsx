import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

import Main from '../../pages/main/main';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-review';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import Error404 from '../../pages/error-404/error-404';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isFilmsDataLoading = useAppSelector((state) => state.isFilmsDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isFilmsDataLoading) {
    return <LoadingScreen />;
  }
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<Main />} />
          <Route path={AppRoute.SignIn} element={<SignIn />} />
          <Route path={AppRoute.MoviePage} element={<MoviePage />} />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute>
                <MyList />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Player} element={<Player />} />
        </Route>
        <Route path={AppRoute.Unknown} element={<Error404 />} />
        <Route path={AppRoute.AddReview} element={<AddReview />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
