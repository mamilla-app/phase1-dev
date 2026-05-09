import React from 'react';
import './buttons.css';
import chevronRight from '../../assets/chevron-right-primary.svg';

export default function SecondaryButton({ text = 'Text', onClick }) {
  return (
    <button className="button button--secondary" onClick={onClick}>
      <span className="button__text">{text}</span>
      <img src={chevronRight} alt="" className="button__chevron" />
    </button>
  );
}
