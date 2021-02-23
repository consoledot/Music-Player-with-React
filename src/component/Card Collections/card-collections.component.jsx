import './card-collections.style.scss'
import CardSection from '../Card Section/card-section.component'
import Playlists from '../Playlist/playlist.component'
import NewRelease from '../New Release/new-release.component'
import {useEffect, useState} from 'react'
import axios from 'axios'


const CardCollection =()=>{
    const [playlist, Setplaylist] = useState('')
    const [latest, Setlatest] = useState("")

   const corsUrl ='https://cors-anywhere.herokuapp.com/'
   async function getDatas(){
       try{
           const responses = await Promise.all([
               axios.get(corsUrl+ "https://api.deezer.com/playlist/908622995"),
               axios.get(corsUrl+"https://api.deezer.com/chart/0")
           ])
           const data = responses.map(response => response.data)
           Setplaylist(data[0])
           Setlatest(data[1])
           console.log(playlist)
           console.log(latest)
       }catch(err){
           console.log(err)
       }
    }
    // console.log(playlist)
    // console.log(latest.tracks.data)
    useEffect(()=>{
        getDatas()
    },[])
    return(
        <div className="card-collection">
            {latest && <NewRelease releases={latest.tracks.data} title="New Releases"/>}
             {latest && <Playlists playlists={latest.playlists.data} title="Featured Playlist"/>}
           {latest && <CardSection albums={latest.albums.data} title="Browse"/>}
        </div>
    )
}
export default CardCollection