import './favorites.style.scss'
import {useEffect} from 'react'
import {connect} from 'react-redux'
import Card from '../Card/card.component'
import {addPlaylist} from '../../redux/action'

const Favorites =({favorites})=>{
    useEffect(()=>{
        addPlaylist(favorites)
    },[favorites])
    return(
        <div className="favorite"> 
            <h1>Favorites</h1>
            <div className="section"> 
            {
                !favorites ? (
                    <p> You do have any Favorites</p>
                )
                :(
                    favorites.map((favorite,index) => <Card key={favorite.id} image={favorite.album.cover_medium} title={favorite.title} index={index}/>)
                )
            }
            </div>
        </div>
    )
    }
const mapStateToProps = state=>({
    favorites: state.favorites
})
const mapDispatchToProps = dispatch=>({
    addPlaylist: playlist=>dispatch(addPlaylist(playlist))
})
export default connect(mapStateToProps, mapDispatchToProps)(Favorites)