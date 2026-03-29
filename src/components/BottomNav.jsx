import { Home, Compass, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './BottomNav.css';

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <div className="nav-dock glass-panel">
        <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Home size={24} />
          <div className="dot"></div>
        </NavLink>
        <NavLink to="/discover" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Compass size={24} />
          <div className="dot"></div>
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <User size={24} />
          <div className="dot"></div>
        </NavLink>
      </div>
    </nav>
  );
}
