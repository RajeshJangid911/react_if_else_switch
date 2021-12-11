"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Case", {
  enumerable: true,
  get: function get() {
    return _Case.default;
  }
});
Object.defineProperty(exports, "Default", {
  enumerable: true,
  get: function get() {
    return _Default.default;
  }
});
Object.defineProperty(exports, "Else", {
  enumerable: true,
  get: function get() {
    return _Else.default;
  }
});
Object.defineProperty(exports, "If", {
  enumerable: true,
  get: function get() {
    return _If.default;
  }
});
Object.defineProperty(exports, "Switch", {
  enumerable: true,
  get: function get() {
    return _Switch.default;
  }
});
Object.defineProperty(exports, "Then", {
  enumerable: true,
  get: function get() {
    return _Then.default;
  }
});

var _If = _interopRequireDefault(require("./if/If"));

var _Then = _interopRequireDefault(require("./if/Then"));

var _Else = _interopRequireDefault(require("./if/Else"));

var _Case = _interopRequireDefault(require("./switch/Case"));

var _Default = _interopRequireDefault(require("./switch/Default"));

var _Switch = _interopRequireDefault(require("./switch/Switch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }