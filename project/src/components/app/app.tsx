import FilmList from '../../pages/film-list/film-list';

export type PromoFilm = {
  Name: string;
  Src: string;
  BackgroundSrc: string;
  Date: number;
  Genre: string;
}

type AppScreenProps = {
  promoFilm: PromoFilm;
}
function App({promoFilm} : AppScreenProps): JSX.Element{
  return (
    <FilmList promoFilm = {promoFilm}/>
  );
}

export default App;

