export type Film = {
  id: string;
  filmName: string;
  srcImg: string;
  backgroundSrc?: string;
  posterSrc?: string;
  date: number;
  genre: string;
  overview: FilmOverview;
  player: string;
}

export type FilmOverview = {
  rating: FilmRating;
  description: string;
  director: string;
  starring: string;
}

export type FilmRating = {
  score: number;
  result: string;
  amountOfReviews: number;
}

export type Films = Film[];
