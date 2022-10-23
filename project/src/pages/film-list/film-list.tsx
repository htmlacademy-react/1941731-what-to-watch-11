import SmallFilmCard from '../../components/small-film-card/small-film-card';

type FilmListProps = {
  promoFilmName: string;
  promoFilmSrc: string;
  promoFilmGenre: string;
  promoFilmDate: number;
}
// название, жанр и дата выхода промо-фильма

function FilmList({promoFilmName, promoFilmSrc, promoFilmGenre, promoFilmDate} : FilmListProps): JSX.Element {
  return (
    <body>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilmSrc} alt={promoFilmName}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilmSrc} alt={promoFilmName} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilmName}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilmGenre}</span>
                <span className="film-card__year">{promoFilmDate}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__films-list">
            <SmallFilmCard filmName={'Fantastic Beasts: The Crimes of Grindelwald'} srcImg={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'}/>
            <SmallFilmCard filmName={'Bohemian Rhapsody'} srcImg={'img/bohemian-rhapsody.jpg'}/>
            <SmallFilmCard filmName={'Macbeth'} srcImg={'img/macbeth.jpg'}/>
            <SmallFilmCard filmName={'Aviator'} srcImg={'img/aviator.jpg'}/>
            <SmallFilmCard filmName={'We need to talk about Kevin'} srcImg={'img/we-need-to-talk-about-kevin.jpg'}/>
            <SmallFilmCard filmName={'What We Do in the Shadows'} srcImg={'img/what-we-do-in-the-shadows.jpg'}/>
            <SmallFilmCard filmName={'Revenant'} srcImg={'img/revenant.jpg'}/>
            <SmallFilmCard filmName={'Johnny English'} srcImg={'img/johnny-english.jpg'}/>
            <SmallFilmCard filmName={'Shutter Island'} srcImg={'img/shutter-island.jpg'}/>
            <SmallFilmCard filmName={'Pulp Fiction'} srcImg={'img/pulp-fiction.jpg'}/>
            <SmallFilmCard filmName={'No Country for Old Men'} srcImg={'img/no-country-for-old-men.jpg'}/>
            <SmallFilmCard filmName={'Snatch'} srcImg={'img/snatch.jpg'}/>
            <SmallFilmCard filmName={'Moonrise Kingdom'} srcImg={'img/moonrise-kingdom.jpg'}/>
            <SmallFilmCard filmName={'Seven Years in Tibet'} srcImg={'img/seven-years-in-tibet.jpg'}/>
            <SmallFilmCard filmName={'Midnight Special'} srcImg={'img/midnight-special.jpg'}/>
            <SmallFilmCard filmName={'War of the Worlds'} srcImg={'img/war-of-the-worlds.jpg'}/>
            <SmallFilmCard filmName={'Dardjeeling Limited<'} srcImg={'img/dardjeeling-limited.jpg'}/>
            <SmallFilmCard filmName={'Orlando'} srcImg={'img/orlando.jpg'}/>
            <SmallFilmCard filmName={'Mindhunter'} srcImg={'img/mindhunter.jpg'}/>
            <SmallFilmCard filmName={'Midnight Special'} srcImg={'img/midnight-special.jpg'}/>
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </body>
  );
}

export default FilmList;
