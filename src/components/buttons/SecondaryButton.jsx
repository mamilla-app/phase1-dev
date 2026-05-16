import React from 'react';
import { ReactComponent as ChevronRight } from '../../assets/Chevron-right.svg';
import './buttons.css';

export default function SecondaryButton({ text = 'Text', onClick }) {
  return (
    <button className="button button--secondary" onClick={onClick}>
      <span className="button__text">{text}</span>
      <ChevronRight className="button__chevron" />
    </button>
  );
}
