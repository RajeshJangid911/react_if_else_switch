"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _commons = require("../commons");

var _Case = _interopRequireDefault(require("./Case"));

var _Default = _interopRequireDefault(require("./Default"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Switch = _ref => {
  let {
    expression,
    fallthrough = false,
    enableMemo = false,
    children
  } = _ref;
  const [childrenToBeRendered, setChildrenToBeRendered] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    if (children && children.length > 0) {
      const childrenArray = _react.default.Children.toArray(children);

      let newChildrenArr = [];
      let defaultChildren = [];
      let expressionMatched = false;
      let breakReached = false;

      if (childrenArray && childrenArray.length > 0) {
        // push cases which satisfies the expression to state
        childrenArray.forEach(child => {
          if (Object.is(_Case.default, child.type) && child.type.name === "Case") {
            // handle case value match case
            if (child.props.value && child.props.value === expression) {
              expressionMatched = true;
            } // handle switch fall through


            if (expressionMatched && !breakReached) {
              newChildrenArr = (0, _commons.pushItemsToArray)(newChildrenArr, child.props.children);
            } // handle break


            if (expressionMatched) {
              if (fallthrough) {
                if (child.props.break) {
                  breakReached = true;
                }
              } else {
                breakReached = true;
              }
            }
          }

          if (Object.is(_Default.default, child.type) && child.type.name === "Default") {
            defaultChildren = (0, _commons.pushItemsToArray)(defaultChildren, child.props.children);
          }
        }); // handle default case

        if (!breakReached) {
          newChildrenArr = [...newChildrenArr, ...defaultChildren];
        }

        setChildrenToBeRendered(newChildrenArr);
      }
    }
  }, [children, expression]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, childrenToBeRendered);
};

Switch.propTypes = {
  expression: _propTypes.default.any.isRequired,
  enableMemo: _propTypes.default.bool,
  fallthrough: _propTypes.default.bool,
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.arrayOf(_propTypes.default.element)]).isRequired
};

var _default = /*#__PURE__*/_react.default.memo(Switch, (prevProps, nextProps) => {
  return prevProps.expression === nextProps.expression && nextProps.enableMemo;
});

exports.default = _default;