import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import * as oldActionCreator from '../Redux/Actions/ActionFunc'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
const uuid = require('uuid');

function mapStateToProps(store,props) {
    return{}
}

@connect(mapStateToProps,(dispatch)=>bindActionCreators(oldActionCreator,dispatch))
export default ()=> (Comp)=> class extends Component{

    constructor(props){
        super(props)
        this.pageId = props.pageId?props.pageId:uuid.v4();
    }

    render(){
        return(
            <View style={styles.container}>
                <Comp {...this.props} pageId={this.pageId}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});