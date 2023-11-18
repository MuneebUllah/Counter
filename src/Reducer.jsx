const Reducer=(state,action)=>{
    if(action.type==="decre"){
        return state-1;
    }
    else if(action.type==="incre"){
        return state+1;
    }
    if(action.type==="reset"){
        return 0;
    }

    return state;
}
export default Reducer;