import { createContext, useState, useContext, useEffect } from 'react';

const VisualModeContext = createContext();

export const useVisualMode = () => useContext(VisualModeContext);

export const VisualModeProvider = ({ children }) => {
  const [mode, setMode] = useState('Default');

  useEffect(() => {
    // Remove previous mode classes
    document.body.classList.remove('mode-anime', 'mode-comic', 'mode-manga');
    
    // Add current mode class
    if (mode === 'Anime') document.body.classList.add('mode-anime');
    if (mode === 'Comic Book') document.body.classList.add('mode-comic');
    if (mode === 'Manga') document.body.classList.add('mode-manga');
  }, [mode]);

  return (
    <VisualModeContext.Provider value={{ mode, setMode }}>
      {children}
    </VisualModeContext.Provider>
  );
};
