import React from 'react';
import { ReactComponent as ChevronRight } from '../../assets/Chevron-right.svg';
import './buttons.css';

export default function PrimaryButton({ text = 'Text', onClick }) {
  return (
    <button className="button button--primary" onClick={onClick}>
      <span className="button__text">{text}</span>
      <ChevronRight className="button__chevron" />
    </button>
  );
}