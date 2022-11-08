import {useState, ChangeEvent} from 'react';
import StarList from '../star-list/star-list';
import {AMOUNT_OF_STARS} from '../../const';

function AddComment() {
  const [, setComment] = useState('');
  return(
    <form action="#" className="add-review__form">
      <div className="rating">
        <StarList amount={AMOUNT_OF_STARS}/>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text"
          placeholder="Review text"
          onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
            setComment(target.value);
          }}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}


export default AddComment;
