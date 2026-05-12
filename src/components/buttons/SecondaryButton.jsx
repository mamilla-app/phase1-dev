import React from 'react';
import './buttons.css';

export default function SecondaryButton({ text = 'Text', onClick }) {
  return (
    <button className="button button--secondary" onClick={onClick}>
      <span className="button__text">{text}</span>
      <svg className="button__chevron" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
