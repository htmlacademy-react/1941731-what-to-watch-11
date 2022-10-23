import FilmList from '../../pages/film-list/film-list';

type AppScreenProps = {
  promoFilmName: string;
  promoFilmSrc: string;
  promoFilmDate: number;
  promoFilmGenre: string;
}

function App({promoFilmName, promoFilmSrc, promoFilmGenre, promoFilmDate} : AppScreenProps): JSX.Element{
  return (
    <FilmList promoFilmName={promoFilmName} promoFilmSrc={promoFilmSrc} promoFilmDate={promoFilmDate} promoFilmGenre={promoFilmGenre}/>
  );
}

export default App;

