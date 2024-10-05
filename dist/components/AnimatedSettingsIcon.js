import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var AnimatedSettingsIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "currentColor" : _b, _c = _a.size, size = _c === void 0 ? 24 : _c, _d = _a.spinDuration, spinDuration = _d === void 0 ? 0.5 : _d, _e = _a.className, className = _e === void 0 ? "" : _e;
    // Define dynamic classes
    var sizeClass = "w-[".concat(size, "px] h-[").concat(size, "px]");
    var colorClass = "stroke-[".concat(color, "]");
    var durationClass = "duration-[".concat(spinDuration * 1000, "ms]");
    return (_jsx("div", { className: "".concat(sizeClass, " ").concat(className), children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "".concat(colorClass, " ").concat(durationClass, " transition-transform ease-in-out origin-center group-hover:rotate-180"), children: [_jsx("path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }), _jsx("circle", { cx: "12", cy: "12", r: "3" })] }) }));
};
export default AnimatedSettingsIcon;
