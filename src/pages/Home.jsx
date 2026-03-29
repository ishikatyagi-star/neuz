import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import StoryCard from '../components/StoryCard';
import SideDrawer from '../components/SideDrawer';
import VisualModeSelector from '../components/VisualModeSelector';
import { useVisualMode } from '../utils/VisualModeContext';
import './Home.css';

const feedData = [
  {
    id: '1',
    _type: 'hero',
    topic: 'QUANTUM TECH',
    title: 'The new protocol defining web4 architecture.',
    source: 'TECHCRUNCH',
    time: '2H AGO',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c341ea109?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    _type: 'quick',
    title: 'Central banks coordinate massive rate cuts globally.',
    summary: 'A synchronized move designed to stimulate global markets after a stagnant quarter.',
    source: 'WSJ',
    time: '4H AGO',
    likes: '1.2k',
    comments: '342'
  },
  {
    id: '3',
    _type: 'reel',
    title: 'Understanding Quantum Supremacy in 60s.',
    source: 'WIRED',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80'
  },
  {
    id: '4',
    _type: 'deep',
    title: 'The Architecture of AGI: A comprehensive breakdown.',
    summary: 'Exploring the neural pathways and scalable data structures needed to achieve generalized intelligence within the next decade.',
  }
];

// Motion variants for spring animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } }
};

export default function Home() {
  const nav = useNavigate();
  const { mode } = useVisualMode();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isModeOpen, setModeOpen] = useState(false);

  return (
    <div className="home-container">
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
      <VisualModeSelector isOpen={isModeOpen} onClose={() => setModeOpen(false)} />

      <header className="home-header glass-panel">
        <Menu className="icon-btn" size={24} onClick={() => setDrawerOpen(true)} />
        <Palette className="icon-btn" size={20} style={{ marginLeft: '12px' }} onClick={() => setModeOpen(true)} />
        {mode !== 'Default' && <div style={{flex: 1, marginLeft: 8}}><span className="label-sm primary-text" style={{fontSize: 10}}>✦ {mode}</span></div>}
        <div className="logo-glow" style={mode !== 'Default' ? {} : { flex: 1, textAlign: 'center' }}>NEUZ</div>
        <div className="avatar-placeholder" onClick={() => nav('/profile')} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150&h=150')", backgroundSize: 'cover' }}></div>
      </header>
      
      <motion.main 
        className="feed-container"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {feedData.map(item => (
           <motion.div key={item.id} variants={itemVariants}>
             <StoryCard type={item._type} data={item} />
           </motion.div>
        ))}
        {/* Spacer for bottom nav */}
        <div className="feed-bottom-spacer"></div>
      </motion.main>
    </div>
  );
}
