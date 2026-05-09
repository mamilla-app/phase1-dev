import React from 'react';
import './buttons.css';

export default function TertiaryButton({ text = 'Text', onClick }) {
  return (
    <button className="button button--tertiary" onClick={onClick}>
      <span className="button__text">{text}</span>
    </button>
  );
}
