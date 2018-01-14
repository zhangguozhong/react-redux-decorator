
export default store => next => action => {
    console.log('打印日志');
    next(action);
    console.log('执行结束');
}