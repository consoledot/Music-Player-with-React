const INITIAL_STATE = {
    latest:null,
    newRelease: null,
    index: 0,
    status: false,
    albumArt:"",
    isPlaylist:false,
    isPlaying:false,
    player:null
}

const reducer = (state= INITIAL_STATE, action)=>{
    switch(action.type){
        case "SET_LATEST":
            return{
                ...state,
                latest:action.payload
            }
        case "ADD_PLAYLIST":
            return{
                ...state,
                newRelease: action.payload
            }
        case "SET_INDEX":
            return{
                ...state,
                index: action.payload
           }
        case "UPDATE_INDEX":
            return{
                ...state,
                index: action.payload
            }
        case "SET_STATUS":
            return{
                ...state,
                status: action.payload
            }
        case "SET_ALBUM_ART":
            return{
                ...state,
                albumArt: action.payload
            }
        case "IS_PLAYLIST":
            return{
                ...state,
                isPlaylist: action.payload
            }
        case "SET_PLAYING":
            return{
                ...state,
                isPlaying:action.payload
            }
        case "SET_PLAYER":
            return{
                ...state,
                player:action.payload
            }
        default:
            return state
    }
}

export default reducer