import React from 'react'
import PropTypes from "prop-types"
import { v4 as uuidv4 } from 'uuid';

const Then = (props)=>{
    return (
        <React.Fragment key={uuidv4()}>
            {props.children}
        </React.Fragment>
    )
}

Then.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
}

export default React.memo(Then)