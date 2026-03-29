import './TopicPill.css';

export default function TopicPill({ text, color = 'var(--color-tertiary)', glow = false }) {
  return (
    <div 
      className={`topic-pill ${glow ? 'glow' : ''}`}
      style={{
        '--pill-color': color
      }}
    >
      <span className="pill-dot"></span>
      <span className="label-sm pill-text">{text}</span>
    </div>
  );
}
