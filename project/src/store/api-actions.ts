import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Film, Films } from '../types/films';
import {
  getInitialFilms,
  loadCurrentFilmInfo,
  loadFilms,
  loadPromo,
  loadSimilarFilms,
  redirectToRoute,
  requireAuthorization,
  setError,
  setFilmsDataLoadingStatus,
  setReviews,
} from './action';
import { dropToken, saveToken } from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { store } from './';
import { Review, Reviews } from '../types/reviews';

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
  dispatch(loadPromo(data));
});

export const fetchCurrentFilmInfoAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilmInfo', async (id, { dispatch, extra: api }) => {
  const resp = await api.get<Film>(`/films/${id}`).catch(() => null);
  if (resp) {
    dispatch(loadCurrentFilmInfo(resp.data));
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
  console.log(data);
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
