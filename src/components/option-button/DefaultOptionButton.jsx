import React from 'react';
import './option-button.css';

export default function DefaultOptionButton({ text = 'Text', onClick }) {
  return (
    <button className="option-button" onClick={onClick}>
      {text}
    </button>
  );
}
