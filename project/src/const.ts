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
  Favourite = '/favorite',
  FavouriteStatus = '/favorite/{filmId}/{status}',
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
export enum TABS {
  overview = 'Overview',
  details = 'Details',
  reviews = 'Reviews',
}
export enum Rating {
  Bad = 3,
  Normal = 5,
  Good = 8,
  Awesome = 10
}

export const AMOUNT_OF_STARS = 10;
export const AMOUNT_OF_OVERVIEW_ACTORS = 3;
export const MAX_SIMILAR_FILMS = 4;
export const MAX_GENRE_LIST = 10;
export const MAX_SHOWN_FILMS = 8;
export const MAX_GENRES = 10;
export const MAX_REVIEW_SIZE = 400;
export const MIN_REVIEW_SIZE = 50;
export const MINUTES_IN_HOUR = 60;
export const TIMEOUT_SHOW_ERROR = 2000;
