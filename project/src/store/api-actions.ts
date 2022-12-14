import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Film, Films} from '../types/films';
import {
  getInitialFilms,
  loadFilms,
  loadSimilarFilms,
  redirectToRoute,
  requireAuthorization, setCurrentFilm,
  setError,
  setFilmsDataLoadingStatus, setMyList,
  setReviews,
} from './action';
import {dropToken, saveToken} from '../services/token';
import {APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {store} from './';
import {Review, Reviews} from '../types/reviews';
import {FavoriteStatus} from '../types/favoriteStatus';

export const clearErrorAction = createAsyncThunk('app/clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});

export const fetchFilmsAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  dispatch(setFilmsDataLoadingStatus(true));
  const { data } = await api.get<Films>(APIRoute.Films);
  dispatch(setFilmsDataLoadingStatus(false));
  dispatch(loadFilms(data));
  dispatch(getInitialFilms());
});

export const fetchPromoAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchPromo', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Film>(APIRoute.PromoFilm);
  dispatch(setCurrentFilm(data));
});

export const fetchMyListAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >('data/fetchMyList', async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Films>(APIRoute.Favourite);
    dispatch(setMyList(data));
  });
export const fetchUpdateMyListAction = createAsyncThunk<
  void,
  { filmId: number; isFavourite: boolean },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >('data/addToMyListAction', async ({ filmId, isFavourite }, { dispatch, extra: api, getState }) => {
    const favouriteStatus = isFavourite ? FavoriteStatus.delete : FavoriteStatus.add ;
    const { data } = await api.post<Film>(`/favorite/${filmId}/${favouriteStatus}`);
    const previousFavouriteFilms = getState().myList.filter((film) => film.id !== filmId);
    if (isFavourite){
      dispatch(setMyList([...previousFavouriteFilms, data]));
    } else {
      dispatch(setMyList(previousFavouriteFilms));
    }
    if (filmId === getState().currentFilm?.id) {
      dispatch(setCurrentFilm(data));
    }
    dispatch(fetchMyListAction());
  });
export const fetchCurrentFilmInfoAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilmInfo', async (id, { dispatch, extra: api }) => {
  dispatch(setCurrentFilm(undefined));
  const resp = await api.get<Film>(`/films/${id}`).catch(() => null);
  if (resp) {
    dispatch(setCurrentFilm(resp.data));
  } else {
    dispatch(redirectToRoute(AppRoute.Unknown));
  }
});

export const fetchSimilarFilmsAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchSimilarFilms', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<Films>(`/films/${id}/similar`);
  dispatch(loadSimilarFilms(data));
});

export const fetchReviewsAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchSimilarFilms', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<Reviews>(`/comments/${id}`);
  dispatch(setReviews(data));
});

export const fetchSendReviewAction = createAsyncThunk<
  void,
  { filmId: number; review: Pick<Review, 'comment' | 'rating'> },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/sendReviewAction', async ({ filmId, review }, { dispatch, extra: api, getState }) => {
  const { data } = await api.post<Review[]>(`/comments/${filmId}`, review);
  dispatch(setReviews(data));
  dispatch(redirectToRoute(`/films/${filmId}`));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ login: email, password }, { dispatch, extra: api }) => {
  const {
    data: { token },
  } = await api.post<UserData>(APIRoute.Login, { email, password });
  saveToken(token);
  dispatch(requireAuthorization(AuthorizationStatus.Auth));
  dispatch(redirectToRoute(AppRoute.Main));
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});
