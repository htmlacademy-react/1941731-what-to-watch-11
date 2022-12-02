import React, {useState} from 'react';
import {showMoreFilms} from '../../store/action';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Films} from '../../types/films';
import classNames from 'classnames';

type showMoreProps = {
  films: Films;
}

function ShowMore({films} : showMoreProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [showMore, setShowMore] = useState(true);
  const currentMaxShownFilms = useAppSelector((state) => state.maxShownFilms);
  const amountOfFilms = useAppSelector((state) => state.filmList.length);

  React.useEffect(() => {
    setShowMore(true);
    if (currentMaxShownFilms >= amountOfFilms){
      setShowMore(false);
    }
  });

  return(
    <div className="catalog__more">
      <button className={classNames('catalog__button', { 'visually-hidden': !showMore })} type="button"
        onClick={() => {
          dispatch(showMoreFilms());
        }}
      >Show more
      </button>
    </div>
  );
}
export default ShowMore;
