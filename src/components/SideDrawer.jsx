import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './SideDrawer.css';

export default function SideDrawer({ isOpen, onClose }) {
  const nav = useNavigate();

  const handleNav = (path) => {
    nav(path);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="drawer-overlay" onClick={onClose}></div>
      <div className="side-drawer glass-panel">
        <header className="drawer-header">
          <div className="logo-glow">NEUZ</div>
          <button className="icon-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </header>

        <nav className="drawer-nav">
          <div className="drawer-link body-lg" style={{ fontWeight: 'normal' }} onClick={() => handleNav('/')}>Home</div>
          <div className="drawer-link body-lg" style={{ fontWeight: 'normal' }} onClick={() => handleNav('/discover')}>Discover</div>
          <div className="drawer-link body-lg" style={{ fontWeight: 'normal' }} onClick={() => handleNav('/arc/1')}>Story Arcs</div>
          <div className="drawer-link body-lg" style={{ fontWeight: 'normal' }} onClick={() => handleNav('/profile')}>Profile</div>
        </nav>

        <div className="drawer-divider"></div>

        <nav className="drawer-nav secondary">
          <div className="drawer-link body-lg" style={{ fontWeight: 'normal' }} onClick={onClose}>Settings</div>
          <div className="drawer-link body-lg" style={{ fontWeight: 'normal' }} onClick={onClose}>About</div>
        </nav>
      </div>
    </>
  );
}
