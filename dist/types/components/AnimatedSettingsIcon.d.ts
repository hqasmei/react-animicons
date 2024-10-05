import React from "react";
import "../styles/tailwind.css";
export interface AnimatedSettingsIconProps {
    color?: string;
    size?: number;
    spinDuration?: number;
    className?: string;
}
declare const AnimatedSettingsIcon: React.FC<AnimatedSettingsIconProps>;
export default AnimatedSettingsIcon;
