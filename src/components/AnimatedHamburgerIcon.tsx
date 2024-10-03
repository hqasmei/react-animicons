import React, { useState } from "react";

export interface AnimatedHamburgerIconProps {
  color?: string;
  size?: number;
  // Add any other props you want to expose
}

const AnimatedHamburgerIcon: React.FC<AnimatedHamburgerIconProps> = ({
  color = "currentColor",
  size = 24,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const lineStyle: React.CSSProperties = {
    transition: "all 0.3s ease",
  };

  const topBottomLineStyle: React.CSSProperties = {
    ...lineStyle,
    transformOrigin: "center right",
    transform: isHovered ? "scaleX(0.75)" : "scaleX(1)",
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
        <line x1="4" y1="6" x2="20" y2="6" style={topBottomLineStyle} />
        <line x1="4" y1="12" x2="20" y2="12" style={lineStyle} />
        <line x1="4" y1="18" x2="20" y2="18" style={topBottomLineStyle} />
      </svg>
    </div>
  );
};

export default AnimatedHamburgerIcon;
