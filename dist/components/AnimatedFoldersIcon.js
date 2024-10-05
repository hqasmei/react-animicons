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
var AnimatedFoldersIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "currentColor" : _b, _c = _a.size, size = _c === void 0 ? 24 : _c;
    var _d = useState(false), isHovered = _d[0], setIsHovered = _d[1];
    var animationStyle = {
        transition: "all 0.3s ease",
    };
    var folderStyle = __assign(__assign({}, animationStyle), { transformOrigin: "bottom", transform: isHovered ? "scaleY(1.05)" : "scaleY(1)" });
    return (_jsx("div", { onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); }, style: { cursor: "pointer" }, children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("path", { d: "M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z", style: folderStyle }), _jsx("path", { d: "M2 8v11a2 2 0 0 0 2 2h14", style: animationStyle })] }) }));
};
export default AnimatedFoldersIcon;
