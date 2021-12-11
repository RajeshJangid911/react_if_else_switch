import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import Then from "./Then"
import Else from "./Else"
import { pushItemsToArray } from "../commons"

const If = ({condition,children})=>{
    const [truthyChildren,setTruthyChildren] =  useState([])
    const [falsyChildren,setFalsyChildren] =  useState([])

    useEffect(()=>{

        const childrenArray = React.Children.toArray(children);

        let newTruthyChildren = []
        let newFalsyChildren = []

        if (childrenArray && childrenArray.length > 0) {
            childrenArray.forEach(child=>{
                if(Object.is(Then,child.type)){
                    newTruthyChildren = pushItemsToArray(newTruthyChildren,child.props.children)
                }
                if(Object.is(Else,child.type)){
                    newFalsyChildren = pushItemsToArray(newFalsyChildren,child.props.children)
                }
            })
        }

        setTruthyChildren(newTruthyChildren)
        setFalsyChildren(newFalsyChildren)

    },[children])

    if(condition){
         return truthyChildren ?? null
    }else{
        return falsyChildren ?? null
    }
}

If.propTypes = {
    condition: PropTypes.bool.isRequired,
    disableMemo: PropTypes.bool,

    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]).isRequired
}


export default React.memo(If,(prevProps, nextProps) => {
    return prevProps.condition === nextProps.condition && !nextProps.disableMemo
})