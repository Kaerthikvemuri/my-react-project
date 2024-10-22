var initialState={
    todos:["mw","karthik","scoda","k"]
}
function todoReducer(state=initialState,action){
    if(action.type==='ADD_TODO'){
        return {...state,todos:[...state.todos,action.payload]}
    }
    return state
}
export default todoReducer