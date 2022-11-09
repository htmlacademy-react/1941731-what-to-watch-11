import {Films} from '../../types/films';
import React from 'react';
import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';


type MyListProps = {
  films: Films;
}

function MyList({films} : MyListProps): JSX.Element {
  return (
    <div className="user-page">
      <Header additionalClass={'user-page__head'}>
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films = {films}/>
      </section>

      <Footer/>
    </div>
  );
}

export default MyList;
