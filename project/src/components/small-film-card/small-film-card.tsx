import {useState,MouseEvent} from 'react';
import {Link} from 'react-router-dom';
type SmallFilmCardProps = {
filmName : string;
srcImg : string;
id: string;
}

function SmallFilmCard(props: SmallFilmCardProps) {
  const [, setActiveFilmId] = useState('');
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
        <img src={props.srcImg} alt={props.filmName} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${props.id}`} relative='path'>{props.filmName}</Link>
      </h3>
    </article>
  );
}


export default SmallFilmCard;
