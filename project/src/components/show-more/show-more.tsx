import React, { useState } from 'react';
import { showMoreFilms } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Films } from '../../types/films';
import classNames from 'classnames';

type showMoreProps = {
  films: Films;
};

function ShowMore({ films }: showMoreProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentMaxShownFilms = useAppSelector((state) => state.maxShownFilms);
  const amountOfFilms = useAppSelector((state) => state.shownFilms.length);

  function getShowMore() {
    let isShown = true;
    if (currentMaxShownFilms >= amountOfFilms) {
      isShown = false;
    }
    return isShown;
  }
  const [showMore, setShowMore] = useState(getShowMore);
  React.useEffect(() => {
    setShowMore(getShowMore());
  });

  return (
    <div className="catalog__more">
      <button
        className={classNames('catalog__button', { 'visually-hidden': !showMore })}
        type="button"
        onClick={() => {
          dispatch(showMoreFilms());
        }}>
        Show more
      </button>
    </div>
  );
}
export default ShowMore;
