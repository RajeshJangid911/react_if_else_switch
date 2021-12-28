import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"

import { pushItemsToArray } from "../commons";
import Case from "./Case";
import Default from "./Default";

const Switch = ({expression,fallthrough=false,enableMemo=false,children}) => {
  const [childrenToBeRendered, setChildrenToBeRendered] = useState([]);

  useEffect(() => {
    if (children && children.length > 0) {
      const childrenArray = React.Children.toArray(children);
      let newChildrenArr = [];
      let defaultChildren = [];
      let expressionMatched = false;
      let breakReached = false;

      if (childrenArray && childrenArray.length > 0) {
        // push cases which satisfies the expression to state
        childrenArray.forEach((child) => {
          if (Object.is(Case, child.type) && child.type.name === Case.name) {
            // handle case value match case
            if (child.props.value && child.props.value === expression) {
              expressionMatched = true;
            }
            // handle switch fall through
            if (expressionMatched && !breakReached) {
              newChildrenArr = pushItemsToArray(newChildrenArr,child.props.children)
            }
            // handle break
            if (expressionMatched) {
              if(fallthrough){
                if(child.props.break){
                  breakReached = true;
                }
              }else{
                breakReached = true;
              }
            }
          }
          if (Object.is(Default, child.type) &&  child.type.name === "Default") {
            defaultChildren = pushItemsToArray(defaultChildren,child.props.children)
          }
        });
        // handle default case
        if (!breakReached) {
          newChildrenArr = [...newChildrenArr,...defaultChildren]
        }
        setChildrenToBeRendered(newChildrenArr);
      }
    }
  }, [children, expression]);

  return <>
    {childrenToBeRendered}
  </>;
};

Switch.propTypes = {
  expression: PropTypes.any.isRequired ,
  enableMemo: PropTypes.bool,
  fallthrough: PropTypes.bool,
  children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
}

export default React.memo(Switch,(prevProps,nextProps)=>{
    return (prevProps.expression === nextProps.expression && nextProps.enableMemo)
});
