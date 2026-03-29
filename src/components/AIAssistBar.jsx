import { ArrowUp } from 'lucide-react';
import './AIAssistBar.css';

export default function AIAssistBar() {
  return (
    <div className="ai-assist-wrapper">
      <div className="ai-assist-bar glass-panel">
        <div className="ai-avatar">AI</div>
        <input 
          type="text" 
          className="ai-input body-lg" 
          placeholder="Ask the AI..." 
        />
        <button className="ai-send-btn">
          <ArrowUp size={20} color="var(--color-surface)" />
        </button>
      </div>
    </div>
  );
}
