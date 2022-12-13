import React, {useEffect, useRef, useState} from 'react';
import Wrapper from '../../components/wrapper/wrapper';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Link, useParams} from 'react-router-dom';
import {fetchCurrentFilmInfoAction} from '../../store/api-actions';

function Player(): JSX.Element | null {
  const params = useParams();
  const currentFilm = useAppSelector((state) => state.currentFilm);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (params.id) {
      dispatch(fetchCurrentFilmInfoAction(Number(params.id)));
    }
  }, [dispatch, params.id]);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(true);
  const [videoTime, setVideoTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoHandler = (control:string) => {
    if (currentFilm && videoRef.current) {
      switch (control) {
        case 'play':
          videoRef.current.play();
          setPlaying(true);
          setTimeLeft(videoTime - videoRef.current?.currentTime);
          break;
        case 'pause':
          videoRef.current.pause();
          setPlaying(false);
          break;
        case 'full-screen':
          videoRef.current?.requestFullscreen();
          break;
        default:

          break;
      }
    }

  };
  React.useEffect(() => {
    setTimeout(() => {
      if (videoRef.current){
        setTimeLeft(videoTime - videoRef.current?.currentTime);
        setProgress((videoRef.current?.currentTime / videoTime) * 100);
      }
    }, 1000);
  });
  const handleLoadedMetadata = () => {
    if (videoRef.current){
      setVideoTime(videoRef.current?.duration);
      setTimeLeft(videoRef.current?.duration);
    }};

  if (currentFilm === undefined) {
    return null;
  } else {
    return (
      <Wrapper>
        <div className="player">
          <video id={currentFilm.name} onLoadedMetadata={handleLoadedMetadata} src={currentFilm.videoLink} ref={videoRef} autoPlay className="player__video" poster={currentFilm.posterImage}>
          </video>
          <Link to={`/films/${currentFilm.id}`} type="button" className="player__exit">
            Exit
          </Link>

          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value={progress} max="100"></progress>
                <div className="player__toggle" style={{left: '30%'}}>
                </div>
              </div>
              <div className="player__time-value">{(timeLeft < 3600) ? `${Math.floor(timeLeft / 60) }:${ (`0${ Math.floor(timeLeft % 60)}`).slice(-2)}` : `${Math.floor(timeLeft / 3600) }:${Math.floor((timeLeft % 3600) / 60) }:${ (`0${ Math.floor(timeLeft % 60)}`).slice(-2)}`}</div>
            </div>

            <div className="player__controls-row">
              {playing ?
                (
                  <button
                    onClick={() => videoHandler('pause')}
                    type="button"
                    className="player__play"
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#pause"></use>
                    </svg>
                    <span>Play</span>
                  </button>)
                :
                (
                  <button
                    onClick={() => videoHandler('play')}
                    type="button"
                    className="player__play"
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>)}
              <div className="player__name">{currentFilm.name}</div>

              <button onClick={() => videoHandler('full-screen')}
                type="button" className="player__full-screen"
              >
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
