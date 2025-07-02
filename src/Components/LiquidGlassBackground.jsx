import React from 'react';

export default function LiquidGlassBackground({ children }) {
  return (
    <div className="liquid-glass-wrapper">
      {/* Liquid Glass Backgroundbjbjbhb */}
      <div className="liquid-glass-bg">
        <div className="glass-shape glass-shape-1"></div>
        <div className="glass-shape glass-shape-2"></div>
        <div className="glass-shape glass-shape-3"></div>
        <div className="glass-shape glass-shape-4"></div>
        <div className="glass-shape glass-shape-5"></div>
      </div>
      
      {/* Animated Blob Background */}
      <div className="outer-container">
        <div className="inner-container">
          <div className="inner-inner-container"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="content-wrapper">
        {children}
      </div>
    </div>
  );
} 