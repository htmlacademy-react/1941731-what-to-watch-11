import React, { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import { Film } from '../../types/films';
type SmallFilmCardProps = {
  currentFilm: Film;
};

function SmallFilmCard(props: SmallFilmCardProps) {
  const [isActive, setIsActive] = useState(false);
  const [renderVideo, setRenderVideo] = useState(false);
  React.useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setRenderVideo(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setRenderVideo(false);
    }
  }, [isActive]);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={({ target }: MouseEvent<HTMLInputElement>) => {
        setIsActive(true);
      }}
      onMouseLeave={({ target }: MouseEvent<HTMLInputElement>) => {
        setIsActive(false);
      }}
    >
      <Link to={`/films/${props.currentFilm.id}`} className="small-film-card__image">
        <VideoPlayer
          renderVideo={renderVideo}
          isActive={isActive}
          src={props.currentFilm.videoLink}
          muted
          poster={props.currentFilm.previewImage}
        />
      </Link>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${props.currentFilm.id}`} relative="path">
          {props.currentFilm.name}
        </Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
