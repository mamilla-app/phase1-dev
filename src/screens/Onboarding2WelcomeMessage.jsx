import React from 'react';
import './Onboarding2WelcomeMessage.css';
import { PrimaryButton, TertiaryButton } from '../components/buttons';
import Vector from '../assets/Vector.png';

export default function Onboarding2WelcomeMessage() {
  return (
    <div className="welcome-screen">

      {/* Status bar */}
      <div className="status-bar">
        <div className="status-time">9:41</div>
        <div className="status-icons">
          <span>▌▌▌</span>
          <span>🛜</span>
          <span>▮</span>
        </div>
      </div>

      {/* Decorative arcs */}
      <div className="circle circle--top-right">
        <img src={Vector} alt="" />
      </div>
      <div className="circle circle--bottom-left">
        <img src={Vector} alt="" />
      </div>

      {/* Content */}
      <div className="welcome-content">
        <div className="greeting-container">
          <span className="spark spark--left"></span>
          <h1 className="greeting-title">Hi there!</h1>
          <span className="spark spark--right"></span>
        </div>

        <div className="description-text">
          <p>At Mamilla we know that while breastfeeding is natural it does not always come naturally</p>
          <p>That's why we're here to help</p>
        </div>
      </div>

      {/* Bottom actions */}
      <div className="bottom-actions">
        <PrimaryButton text="Find out how" onClick={() => {}} />
        <TertiaryButton text="Skip intro" onClick={() => {}} />
      </div>

      <div className="home-indicator"></div>
    </div>
  );
}