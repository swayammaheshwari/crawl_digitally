import React, { useState } from 'react';

const CursorEffectComponent: React.FC = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const updateCursorPosition = (e: any) => {
        const x = e.clientX || e.touches[0].clientX;
        const y = e.clientY || e.touches[0].clientY;
        setCursorPosition({ x, y });
    };

    return (
        <div className="dad">
            <div className="front">
                <span>System</span>
            </div>
            <div className="back">
                <img
                    src="https://picsum.photos/1400/600?random=1"
                    alt=""
                    style={{
                        zIndex: -1,
                        position: 'fixed',
                        pointerEvents: 'none',
                        width: '100%',
                        height: '90vh',
                        background: `radial-gradient(circle 10vmax at ${cursorPosition.x}px ${cursorPosition.y}px,
                          rgba(0, 0, 0, 0) 100%,
                          rgba(0, 0, 0, 0.5) 100%,
                          rgba(0, 0, 0, 0.95) 100%)`,
                    }}
                />
            </div>
            <style>{`
        :root {
          
        }

        .dad {
          position: relative;
          overflow: hidden;
        }

        .front {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          z-index: 2;
        }

        .front span {
          display: block;
          text-align: center;
          color: white;
          font-size: 240px;
          padding: 20px;
        }
      `}</style>
        </div>
    );
};

export default CursorEffectComponent;
