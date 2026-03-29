import BottomSheet from './BottomSheet';
import { useVisualMode } from '../utils/VisualModeContext';
import { Check } from 'lucide-react';
import './VisualModeSelector.css';

const MODES = ['Default', 'Anime', 'Comic Book', 'Manga'];

export default function VisualModeSelector({ isOpen, onClose }) {
  const { mode, setMode } = useVisualMode();

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose} title="Visual Filter">
      <div className="mode-list">
        {MODES.map(m => (
          <div 
            key={m} 
            className={`mode-item ${m === mode ? 'active' : ''}`}
            onClick={() => { setMode(m); onClose(); }}
          >
            <span className="body-lg bold">{m}</span>
            {m === mode && <Check size={20} color="var(--color-primary)" strokeWidth={3} />}
          </div>
        ))}
      </div>
    </BottomSheet>
  );
}
