import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import SideDrawer from '../components/SideDrawer';
import './StoryArc.css';

export default function StoryArc() {
  const nav = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="arc-container">
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
      {/* Header */}
      <header className="arc-header">
        <Menu className="icon-btn" size={24} onClick={() => setDrawerOpen(true)}/>
        <div className="logo-glow">NEUZ</div>
        <div className="avatar-placeholder" onClick={() => nav('/profile')} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150&h=150')", backgroundSize: 'cover' }}></div>
      </header>

      <main className="arc-main">
        {/* Title Block */}
        <div className="arc-title-block">
          <h1 className="display-lg">Story Arc Tracker</h1>
          <h2 className="display-sm" style={{color: 'var(--color-tertiary)'}}>The AI Act Arc</h2>
        </div>

        {/* Timeline Section */}
        <section className="timeline-section">
           <div className="timeline-event">
             <div className="dot primary"></div>
             <div className="event-content">
               <span className="label-sm">DEC 12</span>
               <p className="body-lg">EU passes provisional legislative frame limiting foundation models.</p>
             </div>
           </div>
           <div className="timeline-event">
             <div className="dot tertiary"></div>
             <div className="event-content">
               <span className="label-sm">JAN 04</span>
               <p className="body-lg">Major tech companies threaten exit strategies from single market.</p>
             </div>
           </div>
           <div className="timeline-event">
             <div className="dot secondary"></div>
             <div className="event-content">
               <span className="label-sm">FEB 22</span>
               <p className="body-lg">Red-teaming clause revised following global backlash.</p>
             </div>
           </div>
        </section>

        {/* Key Players */}
        <section className="key-players-section">
          <h3 className="display-sm">Key Players</h3>
          <div className="players-scroll no-scrollbar">
            <div className="player-item">
              <div className="player-ring-container">
                <div className="player-ring"></div>
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150" alt="" />
              </div>
              <h4 className="body-lg bold">Thierry B.</h4>
              <span className="label-sm">EU COMM.</span>
            </div>
            <div className="player-item">
              <div className="player-ring-container">
                <div className="player-ring"></div>
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150" alt="" />
              </div>
              <h4 className="body-lg bold">Sam A.</h4>
              <span className="label-sm">CEO</span>
            </div>
             <div className="player-item">
              <div className="player-ring-container">
                <div className="player-ring"></div>
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150" alt="" />
              </div>
              <h4 className="body-lg bold">Margrethe V.</h4>
              <span className="label-sm">EVP</span>
            </div>
          </div>
        </section>

        {/* Public Sentiment Section */}
        <section className="sentiment-section">
           <div className="sentiment-header">
             <h3 className="display-sm">Public Sentiment</h3>
             <div className="sentiment-legend label-sm">
               <span className="leg-item"><span className="dot-sm secondary"></span> POSITIVE</span>
               <span className="leg-item"><span className="dot-sm negative"></span> NEGATIVE</span>
             </div>
           </div>
           <div className="chart-mockup glass-panel">
             <svg viewBox="0 0 300 100" className="chart-svg">
               <path d="M0 60 Q 50 20, 100 50 T 200 80 T 300 30 L 300 100 L 0 100 Z" fill="rgba(89, 238, 80, 0.2)" stroke="var(--color-secondary)" strokeWidth="2" />
               <path d="M0 80 Q 50 90, 100 70 T 200 30 T 300 10 L 300 100 L 0 100 Z" fill="rgba(255, 81, 250, 0.2)" stroke="var(--color-tertiary)" strokeWidth="2" />
             </svg>
             <div className="chart-labels label-sm">
                <span>Q4 '23</span>
                <span>TODAY</span>
             </div>
           </div>
           
           <div className="sentiment-insight glass-panel">
             <span className="body-lg bold">Sentiment Insight </span>
             <p className="body-lg muted-text">Initial regulatory panic has transitioned to bullish outlooks as explicit compliance thresholds act as moats for incumbents.</p>
           </div>
        </section>

      </main>
      <div className="feed-bottom-spacer"></div>
    </div>
  )
}
