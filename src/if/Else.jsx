import PropTypes from "prop-types"
import React from "react";
import { v4 as uuidv4 } from 'uuid';

const Else = (props)=>{
    return (
        <React.Fragment key={uuidv4()}>
            {props.children}
        </React.Fragment>
    )
}

Else.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
}


export default  React.memo(Else)