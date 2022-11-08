import React, {useState, ChangeEvent} from 'react';


type StarProps = {
  id:number;
}

function Star(props: StarProps){
  const [, setRating] = useState(0);
  return(
    <React.Fragment>
      <input className="rating__input" id={`star-${props.id}`} type="radio" name="rating" value={`${props.id}`}
        onInput={({target}: ChangeEvent<HTMLInputElement>) => {
          setRating(props.id);
        }}
      />
      <label className="rating__label" htmlFor={`star-${props.id}`}>Rating {props.id}</label>
    </React.Fragment>
  );
}

export default Star;
