
export default (state,props)=>{
    var pageId=props.pageId;
    var pageData=state[pageId]?state[pageId]:{};
    return{
        ...pageData,
        ...props
    };
}