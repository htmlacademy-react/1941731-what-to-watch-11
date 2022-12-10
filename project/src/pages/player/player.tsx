import React from 'react';
import { useParams } from 'react-router-dom';
import Wrapper from '../../components/wrapper/wrapper';
import { useAppSelector } from '../../hooks';

function Player(): JSX.Element | null {
  const params = useParams();
  const films = useAppSelector((state) => state.films);
  const currentFilm = films.find((film) => film.id.toString() === params.id);

  if (currentFilm === undefined) {
    return null;
  } else {
    return (
      <Wrapper>
        <div className="player">
          <button type="button" className="player__exit">
            Exit
          </button>

          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value="30" max="100"></progress>
                <div className="player__toggler" style={{ left: '30%' }}>
                  Toggler
                </div>
              </div>
              <div className="player__time-value">1:30:29</div>
            </div>

            <div className="player__controls-row">
              <button type="button" className="player__play">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <div className="player__name">{currentFilm.name}</div>

              <button type="button" className="player__full-screen">
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen"></use>
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Player;
