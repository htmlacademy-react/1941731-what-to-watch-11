import React, {useState,MouseEvent} from 'react';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
type SmallFilmCardProps = {
filmName : string;
srcImg : string;
id: string;
player: string;
}


function SmallFilmCard(props: SmallFilmCardProps) {
  const [activeFilmId, setActiveFilmId] = useState('');
  const [renderVideo, setRenderVideo] = useState(false);
  React.useEffect(() => {
    if (activeFilmId){
      const timer = setTimeout(() => {
        setRenderVideo(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
    else {
      setRenderVideo(false);
    }

  }, [activeFilmId]);

  return(
    <article className="small-film-card catalog__films-card"
      onMouseOver={({target}: MouseEvent<HTMLInputElement>) => {
        setActiveFilmId(props.id);
      }}
      onMouseLeave={({target}: MouseEvent<HTMLInputElement>) => {
        setActiveFilmId('');
      }}
    >
      <div className="small-film-card__image" >
        <VideoPlayer renderVideo = {renderVideo}activeId={activeFilmId} src={props.player} muted poster={props.srcImg}/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${props.id}`} relative='path'>{props.filmName}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
