import React from 'react';
import './option-button.css';

export default function PrimaryOptionButton({ text = 'Text', onClick }) {
  return (
    <button className="option-button option-button--selected" onClick={onClick}>
      {text}
    </button>
  );
}
