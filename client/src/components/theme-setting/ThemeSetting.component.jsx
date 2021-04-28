import React, { useState, useEffect } from 'react';

const getStorageTheme = () => {
  let theme = '';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

const ThemeSetting = () => {
  const [theme, setTheme] = useState(getStorageTheme());

  useEffect(() => {
    document.body.className = theme;
    // console.log(theme);
    // console.log(document.body.className);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const [showSetting, setShowSetting] = useState(false);
  return (
    <div
      className="theme-setting"
      onMouseEnter={(e) => setShowSetting(!showSetting)}
      onMouseLeave={(e) => setShowSetting(!showSetting)}
      onClick={(e) => setShowSetting(!showSetting)}
    >
      <div className="icon-wrapper">
        <i className="bi bi-gear icon" />
      </div>
      {showSetting && (
        <div className="options pr-3">
          <div className="item" onClick={(e) => setTheme('theme-default')}></div>
          <div className="item" onClick={(e) => setTheme('theme-yellow')}></div>
          <div className="item" onClick={(e) => setTheme('theme-blue')}></div>
          <div className="item" onClick={(e) => setTheme('theme-violet')}></div>
          <div className="item" onClick={(e) => setTheme('theme-green')}></div>
        </div>
      )}
    </div>
  );
};

export default ThemeSetting;
