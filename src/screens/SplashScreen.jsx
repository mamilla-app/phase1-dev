import React from 'react';
import './SplashScreen.css';
import mamillaLogo from '../../assets/logo.png';

export default function SplashScreen() {
  return (
    <div className="splash-screen">
      {/* Status bar */}
      <div className="status-bar">
        <div className="status-time">9:41</div>
        <div className="status-icons">
          <div className="status-icon">📶</div>
          <div className="status-icon">📡</div>
          <div className="status-icon">🔋</div>
        </div>
      </div>

      {/* Logo */}
      <div className="logo-container">
        <img className="logo" src={mamillaLogo} alt="Mamilla Logo" />
      </div>

      {/* Text content */}
      <div className="text-container">
        <h1 className="title">Mamilla</h1>
        <p className="subtitle">Feeding that feels right for you</p>
      </div>

      {/* Home indicator */}
      <div className="home-indicator"></div>
    </div>
  );
}
