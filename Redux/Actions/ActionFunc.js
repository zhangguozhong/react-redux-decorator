
import * as Types from '../ActionTypes/ActionTypes'

export function testFuc(fromPage,message){
    return{
        type:Types.ACTIONS_FETCH_MIDDLEWARE,
        message:message,
        pageId:fromPage.props.pageId
    };
}

export function action1(name){
    return{
        type:Types.ACTIONS.LOADING_MEDIA_SUCCESS,
        message:name
    }
}
export function action2(name){
    return{
        type:Types.ACTIONS.LOADING_MEDIA_SUCCESS,
        message:name
    }
}