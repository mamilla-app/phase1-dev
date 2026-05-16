import React from 'react';
import { ReactComponent as HomeIcon } from '../../assets/Home.svg';
import { ReactComponent as SearchIcon } from '../../assets/Search.svg';
import { ReactComponent as StarIcon } from '../../assets/Star-primary1-unfilled.svg';
import { ReactComponent as QuestionIcon } from '../../assets/Question-mark.svg';
import './nav-bar.css';

const TABS = [
  { id: 'home',    label: 'Home',    Icon: HomeIcon },
  { id: 'explore', label: 'Explore', Icon: SearchIcon },
  { id: 'saved',   label: 'Saved',   Icon: StarIcon },
  { id: 'support', label: 'Support', Icon: QuestionIcon },
];

export default function NavBar({ activePage = 'home', onNavigate }) {
  return (
    <nav className="nav-bar">
      <div className="nav-bar__top-border" />
      {TABS.map(({ id, label, Icon }) => (
        <button
          key={id}
          className={`nav-bar__tab ${activePage === id ? 'nav-bar__tab--active' : ''}`}
          onClick={() => onNavigate && onNavigate(id)}
          aria-label={label}
        >
          {activePage === id && <div className="nav-bar__indicator" />}
          <Icon className="nav-bar__icon" />
        </button>
      ))}
    </nav>
  );
}
