import React, {ChangeEvent} from 'react';
import {store} from '../../store';
import {saveCurrentRating} from '../../store/action';


type StarProps = {
  id:number;
}

function Star(props: StarProps){
  return(
    <React.Fragment>
      <input className="rating__input" id={`star-${props.id}`} type="radio" name="rating" value={`${props.id}`}
        onInput={({target}: ChangeEvent<HTMLInputElement>) => {
          store.dispatch(saveCurrentRating(props.id));
        }}
      />
      <label className="rating__label" htmlFor={`star-${props.id}`}>Rating {props.id}</label>
    </React.Fragment>
  );
}

export default Star;
