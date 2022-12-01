import React from 'react';
import {showMoreFilms} from '../../store/action';
import {useAppDispatch, useAppSelector} from '../../hooks';

type showMoreProps = {
  amountOfFilms: number;
}

function ShowMore({amountOfFilms} : showMoreProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentMaxShownFilms = useAppSelector((state) => state.maxShownFilms);

  return(
    <div className="catalog__more">
      {amountOfFilms >= currentMaxShownFilms &&
        <button className="catalog__button" type="button"
          onClick={() => {
            dispatch(showMoreFilms());
          }}
        >Show more
        </button>}
    </div>
  );
}
export default ShowMore;
