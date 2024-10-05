import React, { useState } from "react";
import "../styles/tailwind.css";

export interface AnimatedFoldersIconProps {
  color?: string;
  size?: number;
  // Add any other props you want to expose
}

const AnimatedFoldersIcon: React.FC<AnimatedFoldersIconProps> = ({
  color = "currentColor",
  size = 24,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const animationStyle: React.CSSProperties = {
    transition: "all 0.3s ease",
  };

  const folderStyle: React.CSSProperties = {
    ...animationStyle,
    transformOrigin: "bottom",
    transform: isHovered ? "scaleY(1.05)" : "scaleY(1)",
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: "pointer" }}
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
        <path
          d="M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"
          style={folderStyle}
        />
        <path d="M2 8v11a2 2 0 0 0 2 2h14" style={animationStyle} />
      </svg>
    </div>
  );
};

export default AnimatedFoldersIcon;
