import React,{Component} from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import {connect} from 'react-redux'
import getStateFromReducer from "../Redux/Reducer/getStateFromReducer";

function mapStateToProps(store,props) {
    var message = getStateFromReducer(store.PageReducer,props);
    return{
        ...message
    }
}

@connect(mapStateToProps)
export default ()=>(Comp)=> class extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textView}>{this.props.message}</Text>
                <Comp {...this.props}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red'
    },
    textView:{
        marginTop:20,
        color:'white',
        fontSize:18,
        textAlign:'center'
    }
});