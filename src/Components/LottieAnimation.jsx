import { useEffect, useRef } from 'react';

export default function LottieAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Simple CSS animation as fallback since we couldn't install lottie-react
    const container = containerRef.current;
    if (container) {
      container.style.animation = 'float 6s ease-in-out infinite';
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="lottie-container"
      style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '200px',
        height: '200px',
        zIndex: 1,
        opacity: 0.7
      }}
    >
      {/* Simple animated shapes as Lottie alternative */}
      <div className="animated-shape shape-1"></div>
      <div className="animated-shape shape-2"></div>
      <div className="animated-shape shape-3"></div>
    </div>
  );
} 