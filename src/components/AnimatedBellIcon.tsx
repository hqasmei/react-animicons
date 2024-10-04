import React, { useState, useEffect } from "react";

export interface AnimatedBellIconProps {
  color?: string;
  size?: number;
  ringDuration?: number;
}

const AnimatedBellIcon: React.FC<AnimatedBellIconProps> = ({
  color = "currentColor",
  size = 24,
  ringDuration = 0.4,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [ animationPhase, setAnimationPhase ] = useState( 0 );
  
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        if (animationPhase < 4) {
          setAnimationPhase((prevPhase) => prevPhase + 1);
        } else {
          setIsAnimating(false);
          setAnimationPhase(0);
        }
      }, ringDuration * 1000);
      return () => clearTimeout(timer);
    }
    return undefined; // Add this line
  }, [isAnimating, animationPhase, ringDuration]);

  const handleMouseEnter = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setAnimationPhase(1);
    }
  };

  const getAnimationIntensity = () => {
    switch (animationPhase) {
      case 1:
        return 1;
      case 2:
        return 0.7;
      case 3:
        return 0.4;
      case 4:
        return 0.2;
      default:
        return 0;
    }
  };

  const bellStyle: React.CSSProperties = {
    animation: isAnimating
      ? `shake ${ringDuration}s ease-in-out infinite`
      : "none",
    transformOrigin: "top center",
  };

  const clapperStyle: React.CSSProperties = {
    animation: isAnimating
      ? `swing ${ringDuration}s ease-in-out infinite`
      : "none",
    transformOrigin: "50% 10%",
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      style={{
        cursor: "pointer",
        width: size,
        height: size,
        position: "relative",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g style={bellStyle}>
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        </g>
        <g style={clapperStyle}>
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </g>
      </svg>
      <style>
        {`
          @keyframes shake {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(${5 * getAnimationIntensity()}deg); }
            75% { transform: rotate(${-5 * getAnimationIntensity()}deg); }
          }
          @keyframes swing {
            0%, 100% { transform: rotate(0deg) translateY(0); }
            25% { transform: rotate(${
              30 * getAnimationIntensity()
            }deg) translateY(${-1 * getAnimationIntensity()}px) translateX(${
          2 * getAnimationIntensity()
        }px); }
            75% { transform: rotate(${
              -30 * getAnimationIntensity()
            }deg) translateY(${-1 * getAnimationIntensity()}px) translateX(${
          -2 * getAnimationIntensity()
        }px); }
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedBellIcon;
