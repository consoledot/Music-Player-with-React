export const addPlaylist = playlist=>({
    type:"ADD_PLAYLIST",
    payload: playlist
})

export const setIndex = index =>({
    type:"SET_INDEX",
    payload:index
})
export const updateIndex = index =>({
    type: "UPDATE_INDEX",
    payload: index
})
export const setStatus = status=>({
    type:"SET_STATUS",
    payload:status
})

export const setAlbumArt =image =>({
    type:"SET_ALBUM_ART",
    payload: image
})
export const setIsPlaylist = status=>({
    type: "IS_PLAYLIST",
    payload:status
})
export const setLatest = data=>({
    type:"SET_LATEST",
    payload:data
})

export const setPlaying = status=>({
    type:"SET_PLAYING",
    payload:status
})
export const addFavorites= favorite=>({
    type: "ADD_FAVORITE",
    payload:favorite
})