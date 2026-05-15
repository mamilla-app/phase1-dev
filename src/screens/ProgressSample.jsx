import React, { useState } from 'react';
import ProgressBar from '../components/progress-bar/progress-bar';
import './ProgressSample.css';

export default function ProgressSample() {
  const [progress, setProgress] = useState(24);

  return (
    <main className="progress-sample-page">
      <section className="progress-sample-card">
        <div className="progress-sample-header">
          <h1>Progress bar sample</h1>
          <p>Rendered from the Figma design with a 240×12 pill-shaped track.</p>
        </div>

        <div className="progress-sample-row">
          <span className="progress-sample-label">Onboarding</span>
          <ProgressBar value={24} max={100} />
        </div>

        <div className="progress-sample-row">
          <span className="progress-sample-label">Profile setup</span>
          <ProgressBar value={56} max={100} />
        </div>

        <div className="progress-sample-row">
          <span className="progress-sample-label">Final step</span>
          <ProgressBar value={80} max={100} />
        </div>

        <div className="progress-sample-row progress-sample-interactive">
          <div>
            <span className="progress-sample-label">Interactive progress</span>
            <ProgressBar value={progress} max={100} />
          </div>
          <div className="progress-sample-actions">
            <button type="button" onClick={() => setProgress((value) => Math.max(0, value - 10))}>-10</button>
            <button type="button" onClick={() => setProgress((value) => Math.min(100, value + 10))}>+10</button>
          </div>
        </div>
      </section>
    </main>
  );
}
