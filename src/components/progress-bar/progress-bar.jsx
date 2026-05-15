import './progress-bar.css';

function ProgressBar({ value = 0, max = 100, width = 240, height = 12, ariaLabel = 'Progress' }) {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));
  const widthStyle = typeof width === 'number' ? `${width}px` : width;
  const heightStyle = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      className="progress-bar"
      role="progressbar"
      aria-label={ariaLabel}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      style={{ width: widthStyle, height: heightStyle }}
    >
      <div className="progress-bar__track">
        <div className="progress-bar__fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

export default ProgressBar;
