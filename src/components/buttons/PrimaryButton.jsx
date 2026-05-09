import React from 'react';
import './buttons.css';
import chevronRight from '../../assets/chevron-right-white.svg';

export default function PrimaryButton({ text = 'Text', onClick }) {
  return (
    <button className="button button--primary" onClick={onClick}>
      <span className="button__text">{text}</span>
      <img src={chevronRight} alt="" className="button__chevron" />
    </button>
  );
}
