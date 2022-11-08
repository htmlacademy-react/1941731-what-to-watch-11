import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Films} from '../../types/films';

import Main from '../../pages/main/main';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-review';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import Error404 from '../../pages/error-404/error-404';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  films: Films;
}
function App({films} : AppScreenProps): JSX.Element{
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<Main films = {films}/>} />
          <Route path ={AppRoute.SignIn} element={<SignIn/>}/>
          <Route path={AppRoute.MoviePage} element={<MoviePage films={films}/>} />
          <Route path ={AppRoute.MyList} element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList films={films} />
            </PrivateRoute>
          }
          />
          <Route path ={AppRoute.Player} element={<Player films={films}/>}/>
        </Route>
        <Route path={AppRoute.Unknown} element={<Error404/>}/>
        <Route path ={AppRoute.AddReview} element={<AddReview films={films}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


