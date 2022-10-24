import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const PromoFilm = {
  Name: 'The Grand Budapest Hotel',
  Src: 'img/the-grand-budapest-hotel-poster.jpg',
  BackgroundSrc: 'img/bg-the-grand-budapest-hotel.jpg',
  Genre: 'Drama',
  Date: 2014
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      promoFilm ={PromoFilm}
    />
  </React.StrictMode>,
);
