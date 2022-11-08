import React from 'react';
import Star from '../star/star';
type StarListProps ={
  amount:number;
}


function StarList(props: StarListProps) : JSX.Element {
  const stars = [];
  for (let i = 1; i <= props.amount; i++){
    stars.push(<Star key = {props.amount - i + 1} id={props.amount - i + 1}/>);
  }
  return(
    <div className="rating__stars">
      {stars}
    </div>
  );

}

export default StarList;
