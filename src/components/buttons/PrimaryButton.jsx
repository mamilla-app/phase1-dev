import React from 'react';
import './buttons.css';

export default function PrimaryButton({ text = 'Text', onClick }) {
  console.log('PrimaryButton rendering');
  return (
    <button className="button button--primary" onClick={onClick}>
      <span className="button__text">{text}</span>
    </button>
  );
}