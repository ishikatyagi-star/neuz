import { Edit2, Share, Flame, Settings, LogOut, FileText, Folder } from 'lucide-react';
import './Profile.css';

const SAVED = [
  'https://images.unsplash.com/photo-1620641788421-7a1c341ea109?w=300',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300',
  'https://images.unsplash.com/photo-1541562232579-515a213580f4?w=300',
  'https://images.unsplash.com/photo-1578632292335-df3fbc186b4d?w=300',
  'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300'
];

export default function Profile() {
  return (
    <div className="profile-container">
      {/* Header */}
      <header className="profile-header">
        <div className="header-actions">
           {/* spacer */}
           <div style={{width: 24}}></div>
           <span className="label-sm">PROFILE</span>
           <Settings size={24} color="var(--color-primary)" />
        </div>
        
        <div className="user-info">
          <div className="profile-avatar-wrapper">
             <div className="profile-avatar-ring"></div>
             <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150&h=150" alt="" className="p-avatar" />
          </div>
          <h2 className="display-sm" style={{fontSize: '1.5rem', marginTop: '1rem'}}>@cypher_pulse</h2>
          <p className="body-lg muted-text">Curious about markets & web4 • Mumbai</p>
          
          <div className="p-actions-row">
            <button className="primary-btn glass-btn" style={{padding: '0.75rem 1.5rem'}}>
              <Edit2 size={16} /> Edit Profile
            </button>
            <button className="primary-btn glass-btn flex-icons" style={{padding: '0.75rem'}}>
              <Share size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Intelligence Score section */}
      <section className="score-section">
        <div className="score-circle-container">
          {/* Progress Circle Mock */}
          <svg className="score-svg" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="45" fill="none" stroke="var(--color-surface-container-high)" strokeWidth="6" />
             <circle cx="50" cy="50" r="45" fill="none" stroke="var(--color-primary)" strokeWidth="6" strokeDasharray="283" strokeDashoffset="75" className="score-progress" />
          </svg>
          <div className="score-content">
             <h2 className="display-lg" style={{fontSize: '2.5rem', letterSpacing: '0', textShadow: 'var(--glow-primary)'}}>2,840</h2>
             <span className="label-sm primary-text">SERIES B ANALYST</span>
          </div>
        </div>
        
        <p className="body-lg muted-text align-center">You read as much as a mid-level VC associate this week.</p>
        
        <div className="xp-bar-container">
           <div className="xp-bar-track">
             <div className="xp-bar-fill"></div>
           </div>
           <div className="xp-labels label-sm">
             <span>LVL 12</span>
             <span>800 XP TO NEXT</span>
           </div>
        </div>
      </section>

      {/* Stats Breakdown */}
      <section className="stats-breakdown">
         <div className="stat-card glass-panel">
            <Flame size={20} color="var(--color-secondary)" />
            <span className="body-lg bold secondary-text">14 day streak</span>
         </div>
         <div className="stat-card glass-panel">
            <FileText size={20} color="var(--color-text-muted)" />
            <span className="body-lg bold">142 articles</span>
         </div>
         <div className="stat-card glass-panel">
            <Folder size={20} color="var(--color-text-muted)" />
            <span className="body-lg bold">6 topics</span>
         </div>
      </section>

      {/* Topic Badges */}
      <section className="badges-section">
         <h3 className="label-sm">EXPERTISE BADGES</h3>
         <div className="badges-flex">
            <span className="badge-pill">Fintech Fluent</span>
            <span className="badge-pill">Macro Aware</span>
            <span className="badge-pill">Web4 Native</span>
            <span className="badge-pill">AI Analyst</span>
         </div>
      </section>

      {/* Saved Stories */}
      <section className="saved-section">
         <h3 className="label-sm">SAVED ARCS</h3>
         <div className="saved-grid">
           {SAVED.map((src, i) => (
             <div key={i} className="saved-item">
                <img src={src} alt="" />
             </div>
           ))}
         </div>
      </section>

      {/* Settings List */}
      <section className="config-section">
        <h3 className="label-sm">SYSTEM CONFIG</h3>
        
        <div className="config-item">
          <div className="config-info">
             <span className="body-lg bold">Complexity Baseline</span>
             <span className="label-sm muted-text">Bite-sized ↔ Deep-dive</span>
          </div>
          <div className="config-mock-slider">
             <div className="c-slider-track">
               <div className="c-slider-thumb"></div>
             </div>
          </div>
        </div>

        <div className="config-item">
          <span className="body-lg bold">Auto-play AI Audio</span>
          <div className="toggle active"></div>
        </div>

        <div className="config-item">
          <span className="body-lg bold">Haptic Feedback</span>
          <div className="toggle"></div>
        </div>
        
        <div className="config-item">
          <span className="body-lg bold" style={{color: 'var(--color-tertiary)'}}>
             <LogOut size={16} style={{marginRight: '8px', verticalAlign: '-3px'}}/> Sign Out
          </span>
        </div>
      </section>
      
      <div className="feed-bottom-spacer"></div>
    </div>
  )
}
