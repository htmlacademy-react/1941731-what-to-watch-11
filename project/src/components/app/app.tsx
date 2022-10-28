import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

import FilmList from '../../pages/film-list/film-list';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-review';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import Error404 from '../../pages/error-404/error-404';
import PrivateRoute from '../private-route/private-route';

export type PromoFilm = {
  name: string;
  src: string;
  backgroundSrc: string;
  date: number;
  genre: string;
}

type AppScreenProps = {
  promoFilm: PromoFilm;
}
function App({promoFilm} : AppScreenProps): JSX.Element{
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<FilmList promoFilm = {promoFilm}/>}/>
          <Route path ={AppRoute.SignIn} element={<SignIn/>}/>

          <Route path ={AppRoute.MyList} element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList />
            </PrivateRoute>
          }
          />

          <Route path ={AppRoute.MoviePage} element={<MoviePage/>}/>
          <Route path ={AppRoute.AddReview} element={<AddReview/>}/>
          <Route path ={AppRoute.Player} element={<Player/>}/>
        </Route>
        <Route path={AppRoute.Unknown} element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


