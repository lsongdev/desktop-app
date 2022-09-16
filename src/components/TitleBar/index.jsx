import React from 'react';

import './index.css';

const TitleBar = ({ title, children }) => {
  return (
    <header className="title-bar" style={{ WebkitAppRegion: "drag" }} >
      <div className="title-bar-controls" >
        <span className="title-bar-controls-button title-bar-controls-button-close" ></span>
        <span className="title-bar-controls-button title-bar-controls-button-minimize" ></span>
        <span className="title-bar-controls-button title-bar-controls-button-maximize" ></span>
      </div>
      <span className="title-bar-title" >{title}</span>
      <div>{children}</div>
    </header>
  );
}
export default TitleBar;