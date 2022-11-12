import React from "react";

export type Film = {
  id: string;
  filmName: string;
  srcImg: string;
  backgroundSrc?: string;
  posterSrc?: string;
  date: number;
  runTime: string;
  genre: string;
  overview: FilmOverview;
  player: string;
  reviews: filmReviews;
}

export type FilmOverview = {
  rating: FilmRating;
  description: string;
  director: string;
  starring: string[];
}

export type FilmRating = {
  score: number;
  result: string;
  amountOfReviews: number;
}

export type filmReview = {
  id: number;
  text: string;
  author: string;
  date: string;
  rating: number;
}

export type filmReviews = filmReview[]
export type Films = Film[];
