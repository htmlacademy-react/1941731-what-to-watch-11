export enum AppRoute {
  Main = '/',
  Unknown = '*',
  SignIn = '/login',
  MyList = '/my-list',
  MoviePage = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Film = '/films/:filmId',
  SimilarFilms = '/films/:filmId/similar',
  PromoFilm = '/promo',
  Favourite ='/favorite',
  FavouriteStatus ='/favorite/{filmId}/{status}',
  Reviews = '/comments/:filmId',
  Login = '/login',
  Logout = '/logout',
}


export const Genres = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci - Fi',
  'Thrillers',
];
export const TABS =
  {firstTab: 'Overview',
    secondTab:'Details',
    thirdTab:'Reviews'};

export const AMOUNT_OF_STARS = 10;
export const AMOUNT_OF_OVERVIEW_ACTORS = 3;
export const MAX_SIMILAR_FILMS = 4;
export const MAX_SHOWN_FILMS = 8;
export const MAX_GENRES = 10;
export const TIMEOUT_SHOW_ERROR = 2000;
