 export const addOrRemoveFavorite=(favorites, favorite)=>{
     const existingFavorite = favorites.findIndex(fav => fav.id === favorite.id)
     if(existingFavorite < 0){
         return [...favorites, favorite]
     }
        favorites.splice(existingFavorite, 1)
        return favorites
 }