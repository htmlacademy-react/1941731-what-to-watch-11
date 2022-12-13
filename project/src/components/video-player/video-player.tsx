import React from 'react';

type PlayerProps = {
  src: string;
  muted: boolean;
  poster: string;
  isActive: boolean;
  renderVideo: boolean;
};

function VideoPlayer(props: PlayerProps) {
  if (!props.isActive || !props.renderVideo) {
    return (
      <div className="small-film-card__image">
        <img src={props.poster} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
    );
  }
  return (
    <video autoPlay muted={props.muted} poster={props.poster} width="280" height="175">
      <source className="small-film-card__image" src={props.src} type="video/mp4" />
    </video>
  );
}
export default VideoPlayer;
