"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Then = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
    key: (0, _uuid.v4)()
  }, props.children);
};

Then.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.arrayOf(_propTypes.default.element), _propTypes.default.node, _propTypes.default.arrayOf(_propTypes.default.node)]).isRequired
};

var _default = /*#__PURE__*/_react.default.memo(Then);

exports.default = _default;