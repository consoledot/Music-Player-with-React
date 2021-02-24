import './player.style.scss'
import {connect} from 'react-redux'
import {useRef, useState} from 'react'


const Player = ({playlist})=>{
    const [isPlaying, setIsPlaying] = useState(false)
    let [index, setIndex] = useState(0)

const player = useRef()
function playSong(){
    isPlaying ?  player.current.pause() : player.current.play()
    setIsPlaying(!isPlaying)
}
function nextSong(){
    setIndex(index+1)
    player.current.play()
}
function prevSong(){
   setIndex(index-1)
   player.current.play()
}

return(
    <div className="player-panel">
        <div className="image">
       {playlist && <img src={playlist[index].album.cover_medium} alt="music"/>}
        </div>
        {playlist &&<div className="title">{playlist[index].title}</div>}
        <div className="controls">
            <i className="fa fa-step-backward" aria-hidden="true" onClick={()=> prevSong()}></i>
            <i className={`fa ${isPlaying ? 'fa-pause-circle': 'fa-play-circle'}`} aria-hidden="true" onClick={()=> playSong()}></i>
            <i className="fa fa-step-forward" aria-hidden="true" onClick={()=> nextSong()}></i>
        </div>
        <div className="bar">
            <div className="progress"></div>
        </div>
        <div className="options">
            <i className="fa fa-heart" aria-hidden="true"></i>
            <i className="fa fa-random" aria-hidden="true"></i>
            <i className="fa fa-retweet" aria-hidden="true"></i>
            <i className="fa fa-volume-up" aria-hidden="true"></i>
        </div>
        {playlist && <audio ref ={player}src={`${playlist[index].preview}`}/>}
    </div>
)
}
const mapStateToProps = state=>({
    playlist: state.newRelease
})
export default connect(mapStateToProps)(Player)