import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import "../styles/tailwind.css";
var AnimatedBellIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "currentColor" : _b, _c = _a.size, size = _c === void 0 ? 24 : _c, _d = _a.ringDuration, ringDuration = _d === void 0 ? 0.4 : _d;
    var _e = useState(false), isAnimating = _e[0], setIsAnimating = _e[1];
    var _f = useState(0), animationPhase = _f[0], setAnimationPhase = _f[1];
    useEffect(function () {
        if (isAnimating) {
            var timer_1 = setTimeout(function () {
                if (animationPhase < 4) {
                    setAnimationPhase(function (prevPhase) { return prevPhase + 1; });
                }
                else {
                    setIsAnimating(false);
                    setAnimationPhase(0);
                }
            }, ringDuration * 1000);
            return function () { return clearTimeout(timer_1); };
        }
        return undefined; // Add this line
    }, [isAnimating, animationPhase, ringDuration]);
    var handleMouseEnter = function () {
        if (!isAnimating) {
            setIsAnimating(true);
            setAnimationPhase(1);
        }
    };
    var getAnimationIntensity = function () {
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
    var bellStyle = {
        animation: isAnimating
            ? "shake ".concat(ringDuration, "s ease-in-out infinite")
            : "none",
        transformOrigin: "top center",
    };
    var clapperStyle = {
        animation: isAnimating
            ? "swing ".concat(ringDuration, "s ease-in-out infinite")
            : "none",
        transformOrigin: "50% 10%",
    };
    return (_jsxs("div", { onMouseEnter: handleMouseEnter, style: {
            cursor: "pointer",
            width: size,
            height: size,
            position: "relative",
        }, children: [_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("g", { style: bellStyle, children: _jsx("path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }) }), _jsx("g", { style: clapperStyle, children: _jsx("path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }) })] }), _jsx("style", { children: "\n          @keyframes shake {\n            0%, 100% { transform: rotate(0deg); }\n            25% { transform: rotate(".concat(5 * getAnimationIntensity(), "deg); }\n            75% { transform: rotate(").concat(-5 * getAnimationIntensity(), "deg); }\n          }\n          @keyframes swing {\n            0%, 100% { transform: rotate(0deg) translateY(0); }\n            25% { transform: rotate(").concat(30 * getAnimationIntensity(), "deg) translateY(").concat(-1 * getAnimationIntensity(), "px) translateX(").concat(2 * getAnimationIntensity(), "px); }\n            75% { transform: rotate(").concat(-30 * getAnimationIntensity(), "deg) translateY(").concat(-1 * getAnimationIntensity(), "px) translateX(").concat(-2 * getAnimationIntensity(), "px); }\n          }\n        ") })] }));
};
export default AnimatedBellIcon;
