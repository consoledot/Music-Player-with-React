import './card-collections.style.scss'
import CardSection from '../Card Section/card-section.component'
import Playlists from '../Playlist/playlist.component'
import NewRelease from '../New Release/new-release.component'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {setLatest} from '../../redux/action'
import {connect} from 'react-redux'


const CardCollection =({latestSongs})=>{
    const [latest, setLatest] = useState(latestSongs)
    

   const corsUrl ='https://cors.bridged.cc/'
   async function getDatas(){
       try{
           const response = await  axios.get(corsUrl+"https://api.deezer.com/chart/0")
            setLatest(response.data)
          
       }catch(err){
           console.log(err)
       }
    }
    useEffect(()=>{
        if(!latest){
            getDatas()
            setLatest(latestSongs)
        }
    },[])
    return(
        <div className="card-collection">
            {latest && <NewRelease releases={latest.tracks.data} title="New Releases"/>}
             {latest && <Playlists playlists={latest.playlists.data} title="Featured Playlist" isPlaylist/>}
           {latest && <CardSection albums={latest.albums.data} title="Browse"/>}
        </div>
    )
}
const mapStateToProps = state=>({
    latestSongs:state.latest
})
const mapDispatchToProps = dispatch=>({
    setLatest: latest=> dispatch(setLatest(latest))
})
export default connect(mapStateToProps, mapDispatchToProps)(CardCollection)