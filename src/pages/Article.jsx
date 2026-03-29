import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Users, AlignLeft, Play, Sparkles, Palette } from 'lucide-react';
import TopicPill from '../components/TopicPill';
import AIAssistBar from '../components/AIAssistBar';
import VisualModeSelector from '../components/VisualModeSelector';
import BottomSheet from '../components/BottomSheet';
import { useVisualMode } from '../utils/VisualModeContext';
import './Article.css';

export default function Article() {
  const nav = useNavigate();
  const { mode } = useVisualMode();
  const [isModeOpen, setModeOpen] = useState(false);
  const [isImpactOpen, setImpactOpen] = useState(false);
  const [videoState, setVideoState] = useState('idle'); // idle | loading | playing

  const comicPanels = [
    { src: '/comicstrip_cards/Gemini_Generated_Image_8yfrys8yfrys8yfr.png', caption: 'The Announcement' },
    { src: '/comicstrip_cards/Gemini_Generated_Image_d0ri7td0ri7td0ri.png', caption: 'The Old World Crumbles' },
    { src: '/comicstrip_cards/Gemini_Generated_Image_eyemi7eyemi7eyem.png', caption: 'The Quantum Machine' },
    { src: '/comicstrip_cards/Gemini_Generated_Image_m4biztm4biztm4bi.png', caption: 'The Deadline' },
    { src: '/comicstrip_cards/Gemini_Generated_Image_nu37r1nu37r1nu37.png', caption: 'The New Consensus' },
    { src: '/comicstrip_cards/Gemini_Generated_Image_tnktvftnktvftnkt.png', caption: 'The Question' },
  ];
  const [currentPanel, setCurrentPanel] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.scrollWidth / comicPanels.length;
      const index = Math.round(scrollPosition / cardWidth);
      setCurrentPanel(Math.min(Math.max(index, 0), comicPanels.length - 1));
    }
  };

  const simulateVideo = () => {
    setVideoState('loading');
    setTimeout(() => {
      setVideoState('playing');
    }, 2500);
  };

  return (
    <div className="article-container">
      <VisualModeSelector isOpen={isModeOpen} onClose={() => setModeOpen(false)} />
      
      {/* Personal Impact Bottom Sheet */}
      <BottomSheet isOpen={isImpactOpen} onClose={() => setImpactOpen(false)} title="Your Personal Impact">
        <div className="impact-bullet">
          <span className="dot tertiary"></span>
          <p className="body-lg"><strong>Crypto:</strong> The new consensus protocol may force your tracked assets to fork or upgrade, causing temporary volatility.</p>
        </div>
        <div className="impact-bullet">
          <span className="dot secondary"></span>
          <p className="body-lg"><strong>Macro Aware:</strong> Early adoption will likely spur immediate liquidity shifts in tech-heavy indices.</p>
        </div>
        <div className="drawer-divider"></div>
        <div className="primary-text body-lg bold" style={{cursor: 'pointer'}}>Ask AI for more details →</div>
      </BottomSheet>

      {/* Immersive Header */}
      <header className="article-header">
        <div className="article-hero-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620641788421-7a1c341ea109?auto=format&fit=crop&q=80')" }}></div>
        <div className="article-hero-gradient"></div>
        <div className="article-top-nav">
          <button className="icon-btn back-btn glass-panel" onClick={() => nav(-1)}>
            <ArrowLeft size={24} color="#fff" />
          </button>
          <button className="icon-btn mode-btn glass-panel" onClick={() => setModeOpen(true)} style={{marginLeft: 16}}>
             <Palette size={20} color="#fff" />
          </button>
        </div>
        <div className="article-title-block">
          <TopicPill text="QUANTUM TECH" color="var(--color-tertiary)" />
          {mode !== 'Default' && <span className="label-sm primary-text">✦ {mode.toUpperCase()} MODE</span>}
          <h1 className="display-sm">The new protocol defining web4 architecture.</h1>
          <p className="label-sm source-label">TECHCRUNCH • 5 MIN READ</p>
        </div>
      </header>

      <main className="article-content">
        <p className="body-lg article-teaser">
          A consortium of global tech giants has unveiled a groundbreaking quantum protocol that could completely deprecate current encryption standards and reinvent decentralized consensus by 2027.
        </p>

        {/* Comic Strip Carousel */}
        <div className="comic-panel-section">
          <div className="label-sm comic-panel-title">✦ STORY IN PANELS</div>
          <div className="comic-panel-scroll no-scrollbar" ref={scrollRef} onScroll={handleScroll}>
            {comicPanels.map((panel, idx) => (
              <div key={idx} className="comic-card">
                <img src={panel.src} alt={panel.caption} className="comic-image" />
                <div className="label-sm comic-caption">{panel.caption}</div>
              </div>
            ))}
          </div>
          <div className="carousel-indicators">
            {comicPanels.map((_, idx) => (
              <div key={idx} className={`indicator-dot ${currentPanel === idx ? 'active' : ''}`} />
            ))}
          </div>
        </div>

        {/* Info Panel Horizontal Scroll */}
        <div className="info-panel-scroll no-scrollbar">
          <div className="info-card glass-panel">
            <div className="info-card-header">
              <TrendingUp size={16} color="var(--color-secondary)" />
              <span className="label-sm">Sentiment</span>
            </div>
            <div className="info-card-value">84%</div>
            <div className="info-card-sub secondary-text">Bullish</div>
          </div>
          
          <div className="info-card glass-panel tldr-card">
             <div className="info-card-header">
              <AlignLeft size={16} />
              <span className="label-sm">TL;DR</span>
             </div>
             <p className="body-lg muted-text text-sm">New protocol changes everything about web security.</p>
          </div>

          <div className="info-card glass-panel">
             <div className="info-card-header">
              <Users size={16} />
              <span className="label-sm">Contributors</span>
             </div>
             <div className="info-card-value">1.2k</div>
             <div className="info-card-sub primary-text">Active</div>
          </div>
        </div>

        {/* New CTAs Section */}
        <div className="article-ctas">
          {videoState === 'idle' && (
            <button className="cta-pill primary-ghost" onClick={simulateVideo}>
              <Play size={16} /> Generate AI Explainer
            </button>
          )}
          {videoState === 'loading' && (
            <div className="simulated-video loading">
               <div className="glow-pulse"></div>
               <span className="body-lg primary-text bold">Synthesizing concepts...</span>
            </div>
          )}
          {videoState === 'playing' && (
            <div className="simulated-video playing">
               <div className="video-overlay label-sm">AI-Generated • 60s</div>
               <Play size={40} fill="#fff" opacity={0.8} />
               <h3 className="display-sm video-title">The new protocol defining web4 architecture.</h3>
            </div>
          )}

          <button className="cta-pill tertiary-ghost" onClick={() => setImpactOpen(true)}>
             <Sparkles size={16} /> How does this affect me?
          </button>
        </div>

        <div className="view-arc-cta" onClick={() => nav('/arc/1')}>
          <span className="body-lg bold">View Full Arc Timeline</span>
          <span className="primary-text">→</span>
        </div>

        {/* Comments Section */}
        <div className="comments-section">
          <h2 className="display-sm comments-header">Comments <span className="label-sm muted-text">342</span></h2>
          <div className="comment-item">
            <img className="comment-avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150&h=150" alt="" />
            <div className="comment-body">
              <div className="label-lg">@tech_wizard</div>
              <p className="body-lg">The implications for existing blockchains are massive. If they don't upgrade by Q3, they're dead in the water.</p>
              <div className="comment-actions label-sm">
                <span>142 Likes</span> <span>Reply</span> <span>2M AGO</span>
              </div>
            </div>
          </div>
          <div className="comment-item">
            <img className="comment-avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150" alt="" />
            <div className="comment-body">
              <div className="label-lg">@cypherpunk</div>
              <p className="body-lg">I've been reading the whitepaper. The latency improvements alone justify the hype. Finally building true decentralized infra.</p>
              <div className="comment-actions label-sm">
                <span>89 Likes</span> <span>Reply</span> <span>15M AGO</span>
              </div>
            </div>
          </div>
          
          <div className="sticky-comment-input glass-panel">
            <input type="text" placeholder="Add a comment..." className="body-lg ghost-input" />
          </div>
        </div>
      </main>

      <AIAssistBar />
    </div>
  );
}
