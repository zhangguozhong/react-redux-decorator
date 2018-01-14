import React,{Component} from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import TestDecorator from '../Decorators/TestDecorator'

function mapStateToProps(store,props){
    console.log('HomePage');
    return{
    }
}

@TestDecorator(mapStateToProps)
export default class HomePage extends Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.testFuc(this,'有点意思');
    }

    render(){
        return(
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    }
});