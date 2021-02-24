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