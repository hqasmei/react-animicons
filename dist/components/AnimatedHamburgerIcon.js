var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "../styles/tailwind.css";
var AnimatedHamburgerIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "currentColor" : _b, _c = _a.size, size = _c === void 0 ? 24 : _c;
    var _d = useState(false), isHovered = _d[0], setIsHovered = _d[1];
    var lineStyle = {
        transition: "all 0.3s ease",
    };
    var topBottomLineStyle = __assign(__assign({}, lineStyle), { transformOrigin: "center right", transform: isHovered ? "scaleX(0.75)" : "scaleX(1)" });
    return (_jsx("div", { onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); }, style: { cursor: "pointer" }, children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("line", { x1: "4", y1: "6", x2: "20", y2: "6", style: topBottomLineStyle }), _jsx("line", { x1: "4", y1: "12", x2: "20", y2: "12", style: lineStyle }), _jsx("line", { x1: "4", y1: "18", x2: "20", y2: "18", style: topBottomLineStyle })] }) }));
};
export default AnimatedHamburgerIcon;
