import React from 'react';

import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Wrapper from '../../components/wrapper/wrapper';
import {useAppSelector} from '../../hooks';


function MyList(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default MyList;
