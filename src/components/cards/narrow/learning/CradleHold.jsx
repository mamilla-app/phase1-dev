import React from 'react';
import './narrow-learning-nsnc.css';
import StarIcon from '../../assets/Star-primary1-unfilled.svg';
import PlayIcon from '../../assets/Play-primary1.svg';

function CradleHold() {
  return (
    <article className="narrow-learning-nsnc">
      <div className="narrow-learning-nsnc__image-wrapper">
        <img
          className="narrow-learning-nsnc__image"
          src="https://placehold.co/280x160/ced4da/495057?text=Cross+Cradle"
          alt="Cross Cradle Hold"
        />
        <span className="narrow-learning-nsnc__badge">~ 5 min.</span>
        <button className="narrow-learning-nsnc__favorite" aria-label="Save">
          <img src={StarIcon} alt="" />
        </button>
      </div>
      <div className="narrow-learning-nsnc__body">
        <h3 className="narrow-learning-nsnc__title">Cross Cradle Hold</h3>
        <div className="narrow-learning-nsnc__footer">
          <p className="narrow-learning-nsnc__description">
            Beginner-friendly position with excellent head control.
          </p>
          <button className="narrow-learning-nsnc__play" aria-label="Play">
            <img src={PlayIcon} alt="" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default CradleHold;