import React from 'react';
import { useTheme } from './ThemeContext';

const ChangeTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ChangeTheme;
