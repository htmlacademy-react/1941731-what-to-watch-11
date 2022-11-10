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

export const AMOUNT_OF_STARS = 10;
