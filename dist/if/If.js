"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Then = _interopRequireDefault(require("./Then"));

var _Else = _interopRequireDefault(require("./Else"));

var _commons = require("../commons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const If = _ref => {
  let {
    condition,
    children
  } = _ref;
  const [truthyChildren, setTruthyChildren] = (0, _react.useState)([]);
  const [falsyChildren, setFalsyChildren] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    const childrenArray = _react.default.Children.toArray(children);

    let newTruthyChildren = [];
    let newFalsyChildren = [];

    if (childrenArray && childrenArray.length > 0) {
      childrenArray.forEach(child => {
        if (Object.is(_Then.default, child.type)) {
          newTruthyChildren = (0, _commons.pushItemsToArray)(newTruthyChildren, child.props.children);
        }

        if (Object.is(_Else.default, child.type)) {
          newFalsyChildren = (0, _commons.pushItemsToArray)(newFalsyChildren, child.props.children);
        }
      });
    }

    setTruthyChildren(newTruthyChildren);
    setFalsyChildren(newFalsyChildren);
  }, [children]);

  if (condition) {
    return truthyChildren !== null && truthyChildren !== void 0 ? truthyChildren : null;
  } else {
    return falsyChildren !== null && falsyChildren !== void 0 ? falsyChildren : null;
  }
};

If.propTypes = {
  condition: _propTypes.default.bool.isRequired,
  disableMemo: _propTypes.default.bool,
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.arrayOf(_propTypes.default.element)]).isRequired
};

var _default = /*#__PURE__*/_react.default.memo(If, (prevProps, nextProps) => {
  return prevProps.condition === nextProps.condition && !nextProps.disableMemo;
});

exports.default = _default;