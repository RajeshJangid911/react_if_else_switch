import PropTypes from "prop-types"
import React from "react";
import { v4 as uuidv4 } from 'uuid';

const Case = (props) => {
  return (
    <React.Fragment key={uuidv4()}>
      {props.children}
    </React.Fragment>
  );
};


Case.propTypes = {
  value: PropTypes.any.isRequired,
  children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  break:PropTypes.bool,
}

export default Case;
