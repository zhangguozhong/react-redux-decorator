
import * as Types from '../ActionTypes/ActionTypes'

export default (store)=>(next)=> async (action)=> {
    var {pageId,type,message} = action;
    if (type===Types.ACTIONS_FETCH_MIDDLEWARE){
        var messageStr=message+'这里已经是经过自定义的中间件处理了';
        store.dispatch({//触发action,重新渲染组件
            type:Types.ACTIONS.LOADING_MEDIA_SUCCESS,
            pageId,
            message:messageStr
        });
        console.log(messageStr);
    }else {
        next(action);
    }
}