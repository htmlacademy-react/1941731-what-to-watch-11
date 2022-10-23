import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const PromoFilm = {
  Name: 'The Grand Budapest Hotel',
  Src: 'img/the-grand-budapest-hotel-poster.jpg',
  Genre: 'drama',
  Date: 2014
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      promoFilmName = {PromoFilm.Name}
      promoFilmGenre={PromoFilm.Genre}
      promoFilmDate={PromoFilm.Date}
      promoFilmSrc={PromoFilm.Src}
    />
  </React.StrictMode>,
);
