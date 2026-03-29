import { X } from 'lucide-react';
import './BottomSheet.css';

export default function BottomSheet({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="sheet-overlay" onClick={onClose}></div>
      <div className="bottom-sheet glass-panel">
        <div className="sheet-handle-wrap" onClick={onClose}>
          <div className="sheet-handle"></div>
        </div>
        
        <header className="sheet-header">
           <h3 className="display-sm" style={{fontSize: '1.5rem', marginTop: '0.5rem', marginBottom: '0.5rem'}}>{title}</h3>
           <button className="sheet-close-btn" onClick={onClose}><X size={20}/></button>
        </header>
        
        <div className="sheet-content">
          {children}
        </div>
      </div>
    </>
  );
}
