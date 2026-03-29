import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Menu } from 'lucide-react';
import './Onboarding.css';

const STYLES = ['ANIME', 'MANGA', 'COMIC BOOK', 'PHOTOREALISTIC'];
const THEMES = ['Crypto', 'Pop Culture', 'Macroeconomics', 'AI Tech', 'Sustainable Gear', 'Streetwear', 'Indie Gaming', 'Quantum Computing'];

export default function Onboarding() {
  const nav = useNavigate();
  const [selectedStyle, setSelectedStyle] = useState('ANIME');
  const [selectedThemes, setSelectedThemes] = useState(['Macroeconomics', 'Crypto']);

  const toggleTheme = (theme) => {
    if (selectedThemes.includes(theme)) {
      setSelectedThemes(selectedThemes.filter(t => t !== theme));
    } else {
      setSelectedThemes([...selectedThemes, theme]);
    }
  };

  return (
    <div className="onboarding-container">
      {/* Header */}
      <header className="onboarding-header">
        <Menu className="icon-btn" size={24} />
        <div className="logo-glow">NEUZ</div>
        <div className="avatar-placeholder"></div>
      </header>

      {/* Main Content */}
      <main className="onboarding-main">
        <h1 className="display-lg">Pick Your Interests</h1>
        <p className="body-lg muted-text">Customize your visual feed and content focus.</p>

        {/* Visual Style Grid */}
        <div className="style-grid">
          {STYLES.map(style => (
            <div 
              key={style} 
              className={`style-card ${selectedStyle === style ? 'selected' : ''}`}
              onClick={() => setSelectedStyle(style)}
            >
              <div className="style-bg"></div>
              <div className="style-label">{style}</div>
              <div className="check-circle">
                {selectedStyle === style && <Check size={16} strokeWidth={3} />}
              </div>
            </div>
          ))}
        </div>

        {/* Subcultures Theme */}
        <div className="themes-section">
          <h2 className="label-sm section-label">SUBCULTURE THEMES</h2>
          <div className="pill-container">
            {THEMES.map(theme => {
              const isActive = selectedThemes.includes(theme);
              // Simple mock highlighting Macroeconomics specifically if selected
              const isHighlight = isActive && theme === 'Macroeconomics';
              return (
                <button
                  key={theme}
                  className={`theme-pill ${isActive ? 'active' : ''} ${isHighlight ? 'highlight' : ''}`}
                  onClick={() => toggleTheme(theme)}
                >
                  {theme}
                </button>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer / Done Button */}
      <footer className="onboarding-footer">
        <button className="primary-btn full-width" onClick={() => nav('/')}>
          NEXT
        </button>
      </footer>
    </div>
  );
}
