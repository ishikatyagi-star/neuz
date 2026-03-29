import { useLocation, useNavigate } from 'react-router-dom';
import { Camera, Send, Heart, MessageSquare, Share2, MoreVertical, Music, ArrowLeft } from 'lucide-react';
import './Reels.css';

export default function Reels() {
  const { state } = useLocation();
  const nav = useNavigate();
  const isSimulated = state?.simulated || false;
  const title = state?.simulatedTitle || "Quantum chips hit mass production.";

  return (
    <div className="reels-container">
      {/* Background layer */}
      {isSimulated ? (
        <div className="reels-simulated-bg"></div>
      ) : (
        <div className="reels-video-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')" }}></div>
      )}
      <div className="reels-gradient"></div>

      {/* Top Bar Overlay */}
      <header className="reels-top-bar glass-panel">
        {isSimulated ? (
          <button className="icon-btn" style={{color: '#fff'}} onClick={() => nav(-1)}>
             <ArrowLeft size={24} />
          </button>
        ) : (
          <div className="reels-source-pill">
            <span className="source-dot"></span>
            <span className="label-sm">SOURCE: ECONOMIC TIMES • TECH</span>
          </div>
        )}
        <div className="reels-logo logo-glow">NEUZ</div>
        <div className="reels-actions">
          <Camera size={24} />
          <Send size={24} />
        </div>
      </header>

      {/* Right Engagement Column */}
      <div className="reels-engagement-col">
        <div className="r-action">
          <Heart size={32} fill="transparent" />
          <span className="label-sm">1.2M</span>
        </div>
        <div className="r-action">
          <MessageSquare size={32} fill="transparent" />
          <span className="label-sm">45k</span>
        </div>
        <div className="r-action">
          <Share2 size={32} />
          <span className="label-sm">12k</span>
        </div>
        <div className="r-action">
          <MoreVertical size={32} />
        </div>
        
        <div className="music-avatar-wrapper">
           <img className="music-avatar rotate-anim" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150&h=150" alt="" />
           <Music className="music-note-icon" size={16} color="var(--color-primary)" />
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="reels-bottom-info">
        <h4 className="body-lg bold">economic_times</h4>
        <h1 className="display-sm" style={{fontSize: '1.75rem'}}>{title}</h1>
        <p className="body-lg"><span className="primary-text bold">AI Summary:</span> {isSimulated ? "Gathering key data points from breaking sources around the web to simulate the impact on your sector." : "Fabrication lines in Asia have successfully scaled 2nm quantum processors, effectively ending the shortage while promising a 1000x bump in general compute next year."}</p>
        
        <div className="reels-audio-info">
          <Music size={16} />
          <span className="label-sm" style={{textTransform: 'none'}}>AI Audio • economic_times</span>
        </div>
      </div>
    </div>
  );
}
