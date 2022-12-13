import React from 'react';

import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Wrapper from '../../components/wrapper/wrapper';
import { useAppSelector } from '../../hooks';
import {store} from '../../store';
import {fetchMyListAction} from '../../store/api-actions';
import UserBlock from '../../components/user-block/user-block';

function MyList(): JSX.Element {
  React.useEffect(() => {
    store.dispatch(fetchMyListAction());
  }, []);
  const myList = useAppSelector((state) => state.myList);
  return (
    <Wrapper>
      <div className="user-page">
        <Header additionalClass={'user-page__head'}>
          <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{myList.length}</span></h1>
          <UserBlock/>
        </Header>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmList films={myList} />
        </section>

        <Footer />
      </div>
    </Wrapper>
  );
}

export default MyList;
