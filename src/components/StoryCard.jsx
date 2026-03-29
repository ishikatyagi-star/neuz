import { Heart, MessageSquare, Share2, Bookmark, Play, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TopicPill from './TopicPill';
import './StoryCard.css';

export default function StoryCard({ type = 'hero', data }) {
  const nav = useNavigate();

  const handlePress = () => {
    if (type === 'reel') {
      nav('/reels');
    } else {
      nav(`/article/${data.id || '1'}`);
    }
  };

  const EngagementRow = () => (
    <div className="engagement-row">
      <div className="eng-item"><Heart size={16} /> <span>{data.likes || '1.2k'}</span></div>
      <div className="eng-item"><MessageSquare size={16} /> <span>{data.comments || '342'}</span></div>
      <div className="eng-item"><Share2 size={16} /></div>
      <div className="eng-item bookmark"><Bookmark size={16} /></div>
    </div>
  );

  if (type === 'hero') {
    return (
      <div className="story-card hero-card" onClick={handlePress}>
        <div className="hero-img-container">
          <img src={data.image || 'https://images.unsplash.com/photo-1620641788421-7a1c341ea109?auto=format&fit=crop&q=80'} alt="" className="hero-img" />
          <div className="hero-pill-overlay">
            <TopicPill text={data.topic || "CRYPTO"} color="var(--color-tertiary)" />
          </div>
          <div className="hero-gradient"></div>
        </div>
        <div className="hero-content glass-overlay">
          <h2 className="display-sm">{data.title || "The new protocol defining web4."}</h2>
          <div className="meta-row">
            <span className="label-sm source-label">{data.source || "TECHCRUNCH"} • {data.time || "2H AGO"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'quick') {
    return (
      <div className="story-card quick-card" onClick={handlePress}>
        <h3 className="body-lg bold-headline">{data.title || "Central banks coordinate massive rate cuts globally."}</h3>
        <p className="body-lg muted-text snap-summary">{data.summary || "A synchronized move to stimulate markets after a turbulent quarter."}</p>
        <div className="quick-meta">
          <span className="label-sm source-label">{data.source || "WSJ"} • {data.time || "4H AGO"}</span>
        </div>
        <EngagementRow />
      </div>
    );
  }

  if (type === 'reel') {
    return (
      <div className="story-card reel-card" onClick={handlePress}>
        <div className="reel-thumbnail">
          <img src={data.image || 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80'} alt="" />
          <div className="play-button-overlay">
            <Play fill="#fff" size={24} />
          </div>
          <div className="reel-label glass-panel label-sm">
            <span style={{color: 'var(--color-secondary)'}}>●</span> 60s AI Video
          </div>
        </div>
        <div className="reel-info">
          <h3 className="body-lg bold-headline">{data.title || "Understanding Quantum Supremacy in 60 seconds."}</h3>
          <span className="label-sm source-label">{data.source || "WIRED"}</span>
        </div>
      </div>
    );
  }

  if (type === 'deep') {
    return (
      <div className="story-card deep-card" onClick={handlePress}>
        <div className="deep-header">
          <TopicPill text="Deep-dive" color="var(--color-primary)" glow={true} />
        </div>
        <h3 className="display-sm smaller">{data.title || "The Architecture of AGI: A comprehensive breakdown."}</h3>
        <p className="body-lg muted-text snap-summary">{data.summary || "Exploring the neural pathways and data structures needed..."}</p>
        <div className="ask-ai-cta glass-panel">
          <span className="body-lg" style={{fontWeight: 700}}>Ask AI</span>
          <ArrowRight size={18} color="var(--color-primary)" />
        </div>
      </div>
    );
  }

  return null;
}
