import { useNavigate } from 'react-router-dom';
import { Search, Compass } from 'lucide-react';
import TopicPill from '../components/TopicPill';
import './Discover.css';

export default function Discover() {
  const nav = useNavigate();
  const preventDefault = (e) => e.preventDefault();

  const handleSimulate = (title) => {
    nav('/reels', { state: { simulated: true, simulatedTitle: title } });
  };

  return (
    <div className="discover-container">
      {/* View Header */}
      <header className="discover-header">
        <Compass size={24} color="var(--color-tertiary)" />
        <h1 className="display-sm">Discover</h1>
      </header>

      {/* Search Bar */}
      <div className="search-container">
        <form className="glass-panel search-form" onSubmit={preventDefault}>
          <Search size={20} color="var(--color-text-muted)" />
          <input type="text" className="search-input body-lg" placeholder="Search NEUZ" />
        </form>
      </div>

      {/* Masonry Grid */}
      <main className="masonry-grid">
        <div className="masonry-col">
          {/* Featured Hero Card - Large */}
          <div className="discover-card hero" onClick={() => handleSimulate("Anime's global takeover.")}>
            <img src="https://images.unsplash.com/photo-1541562232579-515a213580f4?auto=format&fit=crop&q=80" alt="" className="d-card-img" />
            <div className="d-card-tag"><TopicPill text="TRENDING" color="var(--color-tertiary)" glow={true} /></div>
            <div className="d-card-gradient"></div>
            <div className="d-card-content">
              <h3 className="display-sm">Anime's global takeover.</h3>
              <p className="label-sm">1.2M VIEWS</p>
            </div>
          </div>
          {/* Small Card */}
          <div className="discover-card small" onClick={() => handleSimulate("Top 10 releases this week.")}>
             <img src="https://images.unsplash.com/photo-1578632292335-df3fbc186b4d?auto=format&fit=crop&q=80" alt="" className="d-card-img" />
             <div className="d-card-tag"><span className="label-sm d-pill">MANGA</span></div>
             <div className="d-card-gradient"></div>
             <div className="d-card-content">
              <h3 className="body-lg bold">Top 10 releases this week.</h3>
            </div>
          </div>
          {/* Action Card */}
          <div className="discover-card small brand-bg" onClick={() => nav('/arc/1')}>
             <div className="d-card-content brand-content">
               <h3 className="display-sm" style={{color: '#000'}}>Explore ARCS</h3>
               <span style={{color: '#000'}}>→</span>
             </div>
          </div>
        </div>
        
        <div className="masonry-col">
           {/* Tall Card */}
           <div className="discover-card tall" onClick={() => handleSimulate("Silicon shortage continues.")}>
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80" alt="" className="d-card-img" />
            <div className="d-card-tag"><TopicPill text="TECH CPU" color="var(--color-secondary)" /></div>
            <div className="d-card-gradient"></div>
            <div className="d-card-content">
              <h3 className="display-sm" style={{fontSize: '1.5rem'}}>Silicon shortage continues.</h3>
              <p className="label-sm">450K VIEWS</p>
            </div>
           </div>
           {/* Normal Card */}
           <div className="discover-card normal" onClick={() => handleSimulate("Web4 takes shape.")}>
            <img src="https://images.unsplash.com/photo-1620641788421-7a1c341ea109?auto=format&fit=crop&q=80" alt="" className="d-card-img" />
            <div className="d-card-tag"><span className="label-sm d-pill">CRYPTO</span></div>
            <div className="d-card-gradient"></div>
            <div className="d-card-content">
              <h3 className="body-lg bold">Web4 takes shape.</h3>
            </div>
           </div>
        </div>
      </main>
      
      <div className="feed-bottom-spacer"></div>
    </div>
  );
}
