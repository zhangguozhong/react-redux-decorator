import React from 'react'
import BaseContainer from './BaseContainer'
import {connect} from 'react-redux'
import IdContainer from "./IdContainer";

export default (mapStateToProps)=> (Comp)=> {
    return IdContainer()(connect(mapStateToProps)(BaseContainer()(Comp)))
}