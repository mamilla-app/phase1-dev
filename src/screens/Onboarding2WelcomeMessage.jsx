import React from 'react';
import './Onboarding2WelcomeMessage.css';
import { PrimaryButton, TertiaryButton } from '../components/buttons';
import { ReactComponent as VectorArc } from '../assets/Vector.svg';
import { ReactComponent as ThreeThings } from '../assets/three_things.svg';

export default function Onboarding2WelcomeMessage() {
  return (
    <div className="welcome-screen">

      {/* Decorative arc — top right */}
      <VectorArc className="welcome-arc welcome-arc--top-right" preserveAspectRatio="xMidYMid meet" overflow="hidden" />

      {/* Decorative arc — bottom left, mirrored */}
      <VectorArc className="welcome-arc welcome-arc--bottom-left" preserveAspectRatio="xMidYMid meet" overflow="hidden" />

      {/* Vertically centred content */}
      <div className="welcome-middle">
        <div className="welcome-title-row">
          <ThreeThings className="welcome-spark" />
          <h1 className="welcome-title">Hi there!</h1>
          <ThreeThings className="welcome-spark welcome-spark--mirrored" />
        </div>

        <div className="welcome-body">
          <p>At Mamilla we know that while breastfeeding is natural it does not always come naturally</p>
          <p>That&apos;s why we&apos;re here to help</p>
        </div>
      </div>

      {/* Bottom actions */}
      <div className="welcome-bottom">
        <PrimaryButton text="Find out how" className="welcome-find-out-btn" onClick={() => {}} />
        <TertiaryButton text="Skip intro" onClick={() => {}} />
        <div className="welcome-home-indicator" />
      </div>

    </div>
  );
}
