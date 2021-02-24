const INITIAL_STATE = {
    newRelease: null
}

const reducer = (state= INITIAL_STATE, action)=>{
    switch(action.type){
        case "ADD_PLAYLIST":
            return{
                ...state,
                newRelease: action.payload
            }
        default:
            return state
    }
}

export default reducer