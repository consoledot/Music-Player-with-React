import './player.style.scss'
import {connect} from 'react-redux'
import {useRef} from 'react'
import {setStatus} from '../../redux/action'


const Player = ({playlist,index, status, setStatus})=>{

const player = useRef()
function playSong(){
    status ?  player.current.pause() : player.current.play()
    setStatus(!status)
}
function nextSong(){
    player.current.play()
}
function prevSong(){
}

return(
    <div className="player-panel">
        <div className="image">
       {playlist && <img src={playlist[index].album.cover_medium} alt="music"/>}
        </div>
        {playlist &&<div className="title">{playlist[index].title}</div>}
        <div className="controls">
            <i className="fa fa-step-backward" aria-hidden="true" onClick={()=> prevSong()}></i>
            <i className={`fa ${status ? 'fa-pause-circle': 'fa-play-circle'}`} aria-hidden="true" onClick={()=> playSong()}></i>
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
    playlist: state.newRelease,
    index: state.index,
    status: state.status
})
const mapDispatchToProps = dispatch=>({
    setStatus: status => dispatch(setStatus(status))
})
export default connect(mapStateToProps,mapDispatchToProps)(Player)