import React, {FormEvent, useRef, useState} from 'react';
import StarList from '../star-list/star-list';
import {AMOUNT_OF_STARS, MAX_REVIEW_SIZE, MIN_REVIEW_SIZE} from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSendReviewAction } from '../../store/api-actions';
type AddCommentProps = {
  filmId: number;
};
function AddComment(props: AddCommentProps): JSX.Element {
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const dispatch = useAppDispatch();
  const rating = useAppSelector((state) => state.currentReviewRating);
  const [isDisabled, setIsDisabled] = useState(true);


  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (textRef.current && rating) {
      dispatch(
        fetchSendReviewAction({
          filmId: props.filmId,
          review: {
            comment: textRef.current.value,
            rating: rating,
          },
        }),
      );
    }
  };
  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <StarList amount={AMOUNT_OF_STARS} />
      </div>

      <div className="add-review__text">
        <textarea
          onChange={() => {
            setIsDisabled(true);
            if (rating && textRef.current && textRef.current.value.length > MIN_REVIEW_SIZE && textRef.current.value.length < MAX_REVIEW_SIZE) {
              setIsDisabled(false);
            }
          }}
          ref={textRef}
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isDisabled}>
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddComment;
