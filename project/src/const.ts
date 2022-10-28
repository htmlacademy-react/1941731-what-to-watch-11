export enum AppRoute {
  Main = '/',
  Unknown = '*',
  SignIn = '/sign-in',
  MyList = '/my-list',
  MoviePage = '/films:id',
  AddReview = 'films/:id/add-review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
