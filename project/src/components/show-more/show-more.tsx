import React, {useCallback, useState} from 'react';
import { showMoreFilms } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import classNames from 'classnames';

function ShowMore(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentMaxShownFilms = useAppSelector((state) => state.maxShownFilms);
  const amountOfFilms = useAppSelector((state) => state.shownFilms.length);

  const getShowMore = useCallback(() => currentMaxShownFilms < amountOfFilms,[amountOfFilms, currentMaxShownFilms]);
  const [showMore, setShowMore] = useState(getShowMore);
  React.useEffect(() => {
    setShowMore(getShowMore());
  }, [getShowMore]);

  return (
    <div className="catalog__more">
      <button
        className={classNames('catalog__button', { 'visually-hidden': !showMore })}
        type="button"
        onClick={() => {
          dispatch(showMoreFilms());
        }}
      >
        Show more
      </button>
    </div>
  );
}
export default ShowMore;
