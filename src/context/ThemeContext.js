import React, { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// export default { ThemeProvider, ThemeContext };
