import {addOrRemoveFavorite} from './utils'

const INITIAL_STATE = {
    latest:null,
    newRelease: null,
    index: 0,
    status: false,
    albumArt:"",
    isPlaylist:false,
    isPlaying:false,
    favorites:[],
    mode:true
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
        case "ADD_FAVORITE":
            return{
                ...state,
                favorites: addOrRemoveFavorite(state.favorites, action.payload)
            }
        case "SET_MODE":
            return{
                ...state,
                mode: action.payload
            }
        default:
            return state
    }
}

export default reducer