"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Else = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
    key: (0, _uuid.v4)()
  }, props.children);
};

Else.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.arrayOf(_propTypes.default.element), _propTypes.default.node, _propTypes.default.arrayOf(_propTypes.default.node)]).isRequired
};

var _default = /*#__PURE__*/_react.default.memo(Else);

exports.default = _default;