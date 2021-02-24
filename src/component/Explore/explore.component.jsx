import './explore.style.scss'
import {useEffect, useState} from 'react'
import Card from '../Card/card.component'
import axios from 'axios'
import {connect} from 'react-redux'
import {addPlaylist} from '../../redux/action'
const Explore = ({match,addPlaylist, isPlaylist})=>{
    const [playlist, setPlalist] = useState('')
    function  getData() {
        const corsUrl ='https://cors.bridged.cc/'
        axios.get(corsUrl+`https://api.deezer.com/${isPlaylist ?'playlist':'album' }/${match.params.id}`)
            .then(data => {
                console.log(data.data)
                setPlalist(data.data)
                addPlaylist(data.data.tracks.data)
            })
    }
    useEffect(()=>{
        getData()
    },[])
return(
    <div className="explore">
        <h1>{playlist.description ? playlist.description : playlist.title}</h1>
        <div className="section">
            {
                playlist && playlist.tracks.data.map((track,index)=> <Card key={track.id} index={index} image={track.album ? track.album.cover_medium :playlist.cover_medium} title={track.title}/>)
            }
        </div>
    </div>
)
}
const mapDispatchToProps = dispatch=>({
    addPlaylist: playlists=> dispatch(addPlaylist(playlists)),
})
export default connect(null, mapDispatchToProps)(Explore)