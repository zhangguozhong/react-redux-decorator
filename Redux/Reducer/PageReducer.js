
import * as Types from '../ActionTypes/ActionTypes'

export default (state={},action)=>{
    var {pageId,type,message} = action;
    switch (type){
        case Types.ACTIONS.LOADING_MEDIA_SUCCESS:{
            var pageData = state[pageId]?state[pageId]:{};
            var newData = Object.assign({},state);
            newData[pageId]={
                ...pageData,
                pageId,
                message
            }
            return newData;
        }
    }
    return state;
}